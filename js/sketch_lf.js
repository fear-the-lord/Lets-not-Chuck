var video; 
var poseNet;
var pose; 
var skeleton;

// Callback function
function modelReady() { 
	console.log('PoseNet Ready');
}

function gotPoses(poses) { 
	// PoseNet returns an object containing the (x, y) co-ordinates of 17 key positions in our body as well as their confidence score, 
	// the confidence score of the entire pose. It also conatins a 2D array skeleton.
	// Checks if a pose has been detected. 
	if(poses.length > 0) { 
		pose = poses[0].pose;
		skeleton = poses[0].skeleton;
	}
}

function setup() { 
	createCanvas(500, 720);
	video = createCapture(VIDEO);
	video.hide();
	// Loading the pre-trained poseNet model from ml5.js.
	// We need a callback to execute until the model is loaded.
	poseNet = ml5.poseNet(video, modelReady);
	// After the model is loaded we get the poses.
	poseNet.on('pose', gotPoses);
}

function draw() { 
	background(0);
	image(video, 0, 0, width, height - 40);
	//Checks if it is a valid pose
	if(pose) { 
		// Get the position of the bowling arm's shoulder and wrist, in order to calculate the angle between them.
		let x1 = pose.leftShoulder.x; 
		let y1 = pose.leftShoulder.y; 
		let x2 = pose.leftWrist.x; 
		let y2 = pose.leftWrist.y; 

		// Calculate the angle.
		let chuckingAngle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

		// If the angle is greater than a certain angle, then the action is chucked.
		if(chuckingAngle > 170) { 
			textSize(32);
			fill(255);
			text('Chucked', (width / 2) - 65, height - 10);
		}
		
		// Draw the keypoints on the canvas.
		for(let i = 0; i < pose.keypoints.length; i++) { 
			let x = pose.keypoints[i].position.x; 
			let y = pose.keypoints[i].position.y;
			noStroke();
			fill(0, 255, 0);
			ellipse(x, y, 12, 12);
		}

		// Draw the lines connecting the keypoints on the canvas.
		for(let i = 0; i < skeleton.length; i++) { 
			let a = skeleton[i][0]; 
			let b = skeleton[i][1];
			strokeWeight(4);
			stroke(255);
			line(a.position.x, a.position.y, b.position.x, b.position.y);
		}
	}
}
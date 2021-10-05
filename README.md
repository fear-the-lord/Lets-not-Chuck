# Let's-not-Chuck
Chucking Detection using PoseNet in ml5.js <br>
<a href = "https://youtu.be/brfo2NRzb78">Click this link to see the demo</a> <br>
<img src = "https://img.shields.io/youtube/views/brfo2NRzb78?style=social">

## Problem Statement 
To check if a bowler is chucking, in real time. 


## Overview 
In the sport of cricket, throwing, commonly referred to as chucking, is an illegal bowling action which occurs when a bowler straightens the bowling arm when delivering the ball. The Laws of Cricket specify that only the rotation of the shoulder can be used to impart velocity to the ball – a bowler's arm must not extend during the bowling action. If the umpire deems that the ball has been thrown, they will call a no-ball which means the batsman cannot be given out from that delivery.

A set of tiered tolerance thresholds for the amount of allowable elbow extension, or straightening, were implemented: **10 degrees for fast bowlers**, **7.5 degrees for medium pacers**, and **5 degrees for spin bowlers**. Enforcing these new measures proved problematic, as the laboratory based measurement systems used had a margin of error of at least 1 degree, and video based measurement systems were likely to have more, especially if inappropriately executed. 

## Things to do 
<ul>
  <li>Create an html page.</li>
  <li>Render the ml5.js script in the html page.</li>
  <li>Write a script in p5.js to implement the PoseNet pre-trained model.</li> 
  <li>Render the same script in the html page.</li>
</ul>

Copy and paste this line into the html file in which you want to render the ml5.js 
```bash 
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
```
## Details about poseNet() 
PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.

PoseNet can be used to estimate either a single pose or multiple poses, meaning there is a version of the algorithm that can detect only one person in an image/video and one version that can detect multiple persons in an image/video.

PoseNet returns a pose object which has a contains the **(x, y) co-ordinates** of all the **17** most important points of the body along with their confidence score. It also returns the entire confidence score of a particular pose. 

### Input: 
Optional. Number. A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video given in the constructor.

### Output:
```bash
[
  {
    pose: {
      keypoints: [{ position: { x, y }, score, part }, ...],
      leftAngle: { x, y, confidence },
      leftEar: { x, y, confidence },
      leftElbow: { x, y, confidence },
      ...
    },
  },
  {
    pose: {
      keypoints: [{ position: { x, y }, score, part }, ...],
      leftAngle: { x, y, confidence },
      leftEar: { x, y, confidence },
      leftElbow: { x, y, confidence },
      ...
    },
  },
];
```
All the 17 keypoints returned by poseNet are: <img src = "https://user-images.githubusercontent.com/35571958/84601334-011d0900-ae9d-11ea-8d72-3cd9aca86700.png"></img>

## Work Done  
In this project I have created 6 different classes of bowlers according to their bowling arm and the category (fast, spin and medium fast). I have taken the (x, y) co-oridinates of the shoulder and the wrist, and calculated the angle between them. If the angle exceeds the above mentioned angle in the given category, then it will display **"Chucked"**. 

## Results
<img src = "https://user-images.githubusercontent.com/35571958/84600664-ac778f00-ae98-11ea-9efa-ab601179e8f4.gif"></img>

## References
<ul>
  <li>https://learn.ml5js.org/docs/#/reference/posenet</li>
</ul>


<p>&#169; Contributed By: Souvik Ghosh. </p>

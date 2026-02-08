import React from 'react';
import '../App.css';  // Adjust path if your CSS is in src

import videoFile from '../assets/GOTofficial.mp4';

const VideoBackground = () => (
  <video autoPlay loop muted playsInline className="bg-video">
    <source src={videoFile} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoBackground;

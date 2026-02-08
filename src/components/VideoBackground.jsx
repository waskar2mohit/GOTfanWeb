import React, { useRef, useState } from 'react';
import '../styles/VideoBackground.css'
import videoFile from '../assets/GotBestQuality.mp4';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleEnableSound = async () => {
    setHasInteracted(true);
    try {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        await videoRef.current.play();
      }
    } catch (e) {
      // Some browsers may still block autoplay with sound
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
    if (!videoRef.current.paused && !next) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="bg-video"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!hasInteracted && (
        <button className="video-sound-button" onClick={handleEnableSound}>
          Play with sound
        </button>
      )}
      {hasInteracted && (
        <button className="video-mute-toggle" onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      )}
    </>
  );
};

export default VideoBackground;

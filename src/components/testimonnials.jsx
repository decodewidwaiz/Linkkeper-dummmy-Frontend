import React, { useEffect, useRef } from 'react';

const testimonials = () => {
  const videoRef = useRef(null);

  // Set slower playback rate once the video is loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slightly slower speed
    }
  }, []);

  return (
    <div className="testimonials  flex flex-col items-center px-4 py-10 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Loved by thousands of <span className="text-green-800">People</span>
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-xl">
        Here's what some of our users have to say about LinkKeeper.
      </p>
      
      <div className="w-full max-w-7xl px-4">
        <video
          ref={videoRef}
          className="w-full object-cover object-top"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./../src/assets/testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default testimonials;

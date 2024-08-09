import React,{useState, useEffect} from "react";

const RandomVideo = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const moveVideo = () => {
            const top = Math.random() * (window.innerHeight - 800);
            const left = Math.random() * (window.innerHeight - 50);

            setPosition({top,left})   
        };

        const intervalId = setInterval(moveVideo, 3500);

        return () => clearInterval(intervalId);

    }, []);




    return (
        <div
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        transition: 'top 0.5s, left 0.5s',
      }}
    >
      <video id="bannerVideo" width="800" height="650" autoPlay muted loop>
          <source src='/deusEye.mp4 'type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default RandomVideo;

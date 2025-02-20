import React, {  useRef } from 'react';
import Video from './Video';


const VideoElement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Define the content for each section




  return (
    <div
      ref={containerRef}
      className="h-full bg-black text-white "
    >

      {/* {sections.map((i, index) => ( */}
        
          <Video />
      {/* ))} */}
    </div>
  );
};

export default VideoElement;
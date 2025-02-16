import React, { useState, useEffect, useRef } from 'react';
import Video from './Video';

interface Section {
  text: string;
  button: string;
}

const VideoElement: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
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
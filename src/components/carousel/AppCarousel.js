// Note: Uncomment import lines while working with compiler.
import React from 'react';
import './Carousel.css';

const useHorizontalScrollEvent = (callback) => {
  const positionRef = React.useRef(0);
  return (e) => {
      const x = e.currentTarget.scrollLeft;
      if (x !== positionRef.current) {
          positionRef.current = x;
          callback(e);
      }
  };
};


function AppCarousel (){
  const handleScroll = useHorizontalScrollEvent((e) => {
      console.log('Horizontal scroll event occurred ...');
  });
  return (
      <div className="appStyle" onScroll={handleScroll}>
        <ul>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
          <li>Some very long text test here ...</li>
        </ul>
      </div>
  );
};

export default AppCarousel;

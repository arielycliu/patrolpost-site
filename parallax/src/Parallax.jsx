import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxExample = () => {
  return (
    <div>
      <Parallax
        bgImage="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
        strength={500}
      >
        <div style={{ height: 500 }}>
          <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>
            Parallax Effect
          </h1>
        </div>
      </Parallax>
      <div style={{ height: 500 }}>
        <h2 style={{ textAlign: 'center' }}>Scroll down to see the parallax effect</h2>
      </div>
      <Parallax
        bgImage="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
        strength={500}
      >
        <div style={{ height: 500 }}>
          <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>
            Another Parallax Section
          </h1>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxExample;

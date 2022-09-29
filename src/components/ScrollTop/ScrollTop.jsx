import React from 'react';
import Button from '../Button/Button';
import './ScrollTop.css';

function ScrollTop() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="scroll_top">
      <Button functionToCall={goToTop}> ^ </Button>
    </div>
  );
}

export default ScrollTop;

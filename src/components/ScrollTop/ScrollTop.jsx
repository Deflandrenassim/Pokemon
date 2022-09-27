import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

function ScrollTop() {
  const [, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setShowTopBtn(true);
      } else if (window.scrollY < 30) {
        setShowTopBtn(false);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="scroll_top">
      <Button functionToCall={goToTop}> Top </Button>
    </div>
  );
}

export default ScrollTop;

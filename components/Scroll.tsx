import React from 'react';
import Link from 'next/link';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
    >
       ⇧ 
    </button>
  );
}

export default ScrollToTopButton;

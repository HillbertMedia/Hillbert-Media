import React from "react";
function Slideshow({ videos, selectedVideoIndex, setIsSlideShowOpen }) {
    const [currentIndex, setCurrentIndex] = React.useState(selectedVideoIndex);
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50">
        <div className="max-w-2xl mx-auto h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <video className="rounded-md w-full h-full object-contain" src={videos[currentIndex]} autoPlay controls />
            <button className="absolute top-0 right-0 m-4 bg-gray-900 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75" onClick={() => setCurrentIndex((currentIndex + 1) % videos.length)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.707 10l3.147-3.146a.5.5 0 10-.708-.708L11 9.293V3.5a.5.5 0 00-1 0v6.793l-2.646-2.647a.5.5 0 10-.708.708L10.293 10l-3.147 3.146a.5.5 0 00.708.708L11 10.707v5.793a.5.5 0 001 0V10.707l2.646 2.647a.5.5 0 00.708-.708L11.707 10z" clipRule="evenodd" />
        </svg>
      </button>
      <button className="absolute top-0 left-0 m-4 bg-gray-900 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75" onClick={() => setCurrentIndex((currentIndex - 1 + videos.length) % videos.length)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.293 10L5.146 6.854a.5.5 0 11.708-.708L9 9.293V3.5a.5.5 0 011 0v6.793l2.646-2.647a.5.5 0 11.708.708L11.707 10l3.147 3.146a.5.5 0 01-.708.708L11 10.707v5.793a.5.5 0 01-1 0V10.707l-2.646 2.647a.5.5 0 01-.708-.708L8.293 10z" clipRule="evenodd" />
        </svg>
      </button>
      <button className="absolute top-0 right-0 m-4 bg-gray-900 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75" onClick={() => setIsSlideShowOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm3.536 12.121a.5.5 0 01-.707 0L10 10.707l-2.829 2.828a.5.5 0 01-.707-.707L9.293 10 6.464 7.172a.5.5 0 11.707-.707L10 9.293l2.829-2.829a.5.5 0 01.707.707L10.707 10l2.829 2.829a.5.5 0 010 .707z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>
    )}
    export default Slideshow;
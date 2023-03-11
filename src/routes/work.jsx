import React, { useState } from 'react';
import Slideshow from '../components/SlideShow';

function Work() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
    const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  
    const openSlideshow = (index) => {
      setCurrentVideoIndex(index);
      setIsSlideshowOpen(true);
    };
    console.log(isSlideshowOpen)

  return (
    <div className="flex flex-col  min-h-screen  w-full h-full  bg-primary pt-20">
      <div className="flex items-center justify-center pb-10 z-0">
            <h1 className="text-7xl bold font-bold"> WORK </h1>
        </div>
      <div className="max-w-6xl w-full mx-auto mt-8 flex flex-col items-center justify-center md:grid grid-cols-2 md:content-center lg:grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col md: items-center">
       
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 1</h2>
    <p className="mb-4">Description of Video 1</p>
    <button onClick={() => openSlideshow(0)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 2</h2>
    <p className="mb-4">Description of Video 2</p>
    <button onClick={() => openSlideshow(1)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 3</h2>
    <p className="mb-4">Description of Video 3</p>
    <button onClick={() => openSlideshow(2)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>

</div>

        </div>
        <div className="flex flex-col md: items-center">   
        <div>
             <h2 className="text-lg font-bold mb-2">Video Title 1</h2>
                 <p className="mb-4">Description of Video 1</p>
            <button onClick={() => openSlideshow(3)}>
                 <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
    </div>
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 2</h2>
    <p className="mb-4">Description of Video 2</p>
    <button onClick={() => openSlideshow(4)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 3</h2>
    <p className="mb-4">Description of Video 3</p>
    <button onClick={() => openSlideshow(5)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
  </div>
</div>
        <div className="flex flex-col md: items-center">
       
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 1</h2>
    <p className="mb-4">Description of Video 1</p>
    <button onClick={() => openSlideshow(6)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 2</h2>
    <p className="mb-4">Description of Video 2</p>
    <button onClick={() => openSlideshow(7)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2">Video Title 3</h2>
    <p className="mb-4">Description of Video 3</p>
    <button onClick={() => openSlideshow(8)}>
            <video className="rounded-md w-full mb-4" src="/path/to/video1.mp4" controls />
          </button>
</div>

        </div>
      </div>
      {isSlideshowOpen && (
        <Slideshow videos={[ { src: "/path/to/video1.mp4", title: "Video 1", description: "Description for video 1" },
        { src: "/path/to/video2.mp4", title: "Video 2", description: "Description for video 2" },
        { src: "/path/to/video3.mp4", title: "Video 3", description: "Description for video 3" },
        { src: "/path/to/video4.mp4", title: "Video 4", description: "Description for video 4" },]} selectedVideoIndex={currentVideoIndex} setIsSlideShowOpen={setIsSlideshowOpen}/>)}
    </div>
  );
}

export default Work;
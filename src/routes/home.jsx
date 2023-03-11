import React from 'react';
import Header from '../components/Header';


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex items-center justify-center h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10 text-white text-center flex flex-col place-items-center justify-center">
          <img src='/logo.png' className='md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6' alt="hillbertmedialogo"/>
        </div>
      </div>

      <Header />
</div>
);
}

export default Home;
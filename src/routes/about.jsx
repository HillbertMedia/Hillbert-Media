function About() {
    return (
        <div className="flex flex-col min-h-screen bg-primary pt-20">
            <div className="flex items-center justify-center pb-10 z-0">
            <h1 className="text-7xl bold font-bold"> ABOUT </h1>
            </div>
            <div>

            </div>
            <img src='/logo.png' className='md:w-1/4 md:hidden ' alt="hillbertmedialogo"/>
        <div className="flex flex-col max-w-7xl justify-center lg:space-x-6  mx-auto lg:flex-row">
       
        <div className="lg:w-2/3 bg-quaternary rounded-lg shadow-lg px-6 py-4 text-black">
          <h2 className="text-4xl font-bold mb-4 text-center">A production company you can <span className="text-secondary">trust</span> </h2>
          <p className="text-lg font-sans font-semibold">Hillbert media is a small production company based in Stockholm,
Sweden. Our passion has always been movies and music.
<br></br>
<br></br>
We might be small but with our expertise we can help you with
everything from an idea to final product or maybe you just need help
with something in-between?
<br></br>
<br></br>
Whatever you need help with we promise you a great collaboration with
great success. That is how we can achieve the ultimate production
whether it is small budget or bigger. Beside our technical abilities we
are also extremely creative and always look for new exciting ways to
create videos.
<br></br>
<br></br>
Don't be afraid to reach out! We would love to help your dream project
become a reality.
</p>
        </div>
        <div className="lg:w-1/3 bg-white rounded-lg shadow-lg px-6 py-4 mb-4 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">Check out our latest <span className="text-secondary">projects</span></h2>
          <div className="flex flex-col space-y-4">
            <div className="w-full mb-4 lg:mb-0">
              <video src="path/to/video1.mp4" className="w-full" controls />
            </div>
            <div className="w-full">
              <video src="path/to/video2.mp4" className="w-full" controls />
            </div>
          </div>
        </div>
      </div>
       
        </div>
    );
}
export default About;
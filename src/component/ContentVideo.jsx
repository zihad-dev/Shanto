import React, { useState } from 'react'
import Container from './Container'

const ContentVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div className='my-[100px] relative'>
        <Container>
          <div className='flex gap-10 justify-center items-center'>
            <div className='w-[40%] h-[400px] flex items-center relative'>
              <div className='w-[400px] h-[400px] bg-gray-500 rounded-[5px] flex justify-center items-center'>
                <div
                  onClick={handleClick}
                  className='w-[60px] h-[60px] bg-black rounded-full cursor-pointer flex justify-center items-center text-white text-2xl'
                >
                  click
                </div>
              </div>
            </div>
            <div className='w-[50%]'>
              <p>
                SEO is one of the most powerful features of WordPress. However, just using WordPress as your CMS and using plugins won’t lead to higher search engine rankings. The best way to achieve this is to hire a bespoke WordPress SEO team. By having our WordPress SEO experts optimize your website, you will be able to take advantage of the platform’s power.
              </p>
            </div>
          </div>
        </Container>

        {/* Overlay video modal */}
        {showVideo && (
          <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
            <div className='relative w-[80%] max-w-[800px]'>
              <button
                onClick={handleClose}
                className='absolute -top-10 right-0 text-white text-3xl font-bold'
              >
                ✕
              </button>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // এখানে তোমার ভিডিও লিংক দাও
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentVideo;

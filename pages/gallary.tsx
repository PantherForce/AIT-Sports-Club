import React from 'react'
import ImageCard from '@/components/ImageCard';
import Image from 'next/image';


function Gallary() {
  return (
    <div className="relative">
      <section className="body-font">
        <div className="container mx-auto px-5">
          <div className="flex w-full max-w-screen-xl flex-col items-center justify-between md:flex-row lg:flex-row">
            {/* Text */}
            <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
              <div className="text-5xl font-medium">Gallary</div>
              <div className="my-10 text-lg text-gray-600">
                We have a nice collection of photos of various events organised
                by the ait sports club throughout the year.
              </div>
            </div>
            {/* Image */}
            <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
              <Image
                className=""
                src="/gallarypage.png"
                width={400}
                height={400}
                alt="Team"
              />
            </div>
          </div>
          <div className="-m-4 flex animate-[slide-down-fade_0.9s_ease-in-out] flex-wrap">
            <ImageCard src="/gallary/photo1.jpeg" />
            <ImageCard src="/gallary/photo2.jpeg" />
            <ImageCard src="/gallary/photo3.jpeg" />
            <ImageCard src="/gallary/photo4.png" />
            <ImageCard src="/gallary/photo5.png" />
            <ImageCard src="/gallary/photo6.png" />
            <ImageCard src="/gallary/photo7.png" />
            <ImageCard src="/gallary/photo1.jpeg" />
            <ImageCard src="/gallary/photo1.jpeg" />
            <ImageCard src="/gallary/photo1.jpeg" />
            <ImageCard src="/gallary/photo1.jpeg" />
            <ImageCard src="/gallary/photo1.jpeg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallary
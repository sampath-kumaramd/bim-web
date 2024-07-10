import { useState } from 'react';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl">
      {!isPlaying ? (
        <div className="relative">
          {/* Background image */}
          <Image
            src="/images/about-us-our-concept-image.svg"
            alt="Video background"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-3xl"
          />
          {/* Thumbnail image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[90%] w-[90%]">
              <Image
                src="/images/thumbnail.svg"
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-80 p-4 transition-transform hover:scale-110"
                onClick={handlePlayClick}
              >
                <PlayIcon className="text-pink-600 h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Background image */}
          <Image
            src="/images/about-us-our-concept-image.svg"
            alt="Video background"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-3xl"
          />
          {/* Thumbnail image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[90%] w-[90%]">
              <video className="h-full w-full rounded-3xl" controls autoPlay>
                <source src="/sample-video.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;

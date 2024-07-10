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
        <>
          <Image
            src="/images/about-us-our-concept-image.png"
            alt="Get Started"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-3xl"
          />
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-80 p-4 transition-transform hover:scale-110"
            onClick={handlePlayClick}
          >
            <PlayIcon className="text-pink-600 h-8 w-8" />
          </button>
        </>
      ) : (
        <video className="h-auto w-full rounded-3xl" controls autoPlay>
          <source src="/sample-video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoSection;

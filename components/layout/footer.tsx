import Image from 'next/image';
import { Button } from '../ui/button';
import { Typography } from '../Typography';
import { Separator } from '../ui/separator';

type SocialIcon = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const socialIcons: SocialIcon[] = [
  // { src: '/icons/facebook.svg', alt: 'Facebook', width: 10, height: 10 },
  {
    href: 'https://www.facebook.com',
    src: '/icons/fb.svg',
    alt: 'Facebook',
    width: 9,
    height: 9,
  },
  {
    href: 'https://www.instagram.com/',
    src: '/icons/insta.svg',
    alt: 'Instagram',
    width: 12,
    height: 12,
  },
  {
    href: 'https://www.tiktok.com',
    src: '/icons/tiktok.svg',
    alt: 'Tiktok',
    width: 10,
    height: 10,
  },
  {
    href: 'https://www.twitter.com',
    src: '/icons/x.svg',
    alt: 'x',
    width: 12,
    height: 12,
  },
  {
    href: 'https://www.youtube.com',
    src: '/icons/youtube.svg',
    alt: 'Youtube',
    width: 15,
    height: 15,
  },
];

function SocialButton({ href, src, alt, width, height }: SocialIcon) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="h-6 w-6 rounded-full border-2 bg-transparent hover:bg-rose-400"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={width} height={height} />
      </a>
    </Button>
  );
}

export function Footer() {
  return (
    <>
      <div className="bg-pink">
        <div className="container mx-auto p-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
            <div className="order-2 col-span-7 flex justify-center gap-4 md:order-1 md:justify-start">
              <Typography
                className="text-start text-sm sm:text-lg text-white md:text-start"
                variant="HempaSansLg"
              >
                {' '}
                Legal
              </Typography>
              <Separator orientation="vertical" className="my-auto h-5" />
              <Typography
                className="text-start text-sm sm:text-lg text-white md:text-start"
                variant="HempaSansLg"
              >
                {' '}
                ©2024 by BIM Group. All rights reserved
              </Typography>
            </div>

            <div className="order-1 col-span-5 flex items-center justify-center gap-2 md:order-2 md:justify-end">
              <Typography
                className="me-4 text-start text-sm sm:text-lg text-white md:text-start"
                variant="HempaSansLg"
              >
                Follow Us
              </Typography>
              {socialIcons.map((icon) => (
                <SocialButton key={icon.alt} {...icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

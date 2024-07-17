'use client';
import { useParams, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { Typography } from './Typography';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MainHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  closeMenu?: () => void;
}

export function MainHeader({
  className,
  closeMenu,
  ...props
}: MainHeaderProps) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    { href: '/', label: 'Home', active: pathname === '/' },
    { href: '/about', label: 'About', active: pathname === '/about' },
    { href: '/news', label: 'News', active: pathname === '/news' },
    { href: '/contact', label: 'Contact', active: pathname === '/contact' },
  ];

  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <div {...props} className={className}>
        {routes.map((route) => (
          <motion.div key={route.href} variants={itemVariants}>
            <Button
              onClick={() => {
                router.push(route.href);
                closeMenu?.();
              }}
              variant={'link'}
              className={`${
                route.active
                  ? 'underline decoration-white underline-offset-18'
                  : ''
              } w-full justify-start`}
            >
              <Typography variant="HempaSansSm" className="ms-2 text-white">
                {route.label}
              </Typography>
            </Button>
          </motion.div>
        ))}
        <Link href="/pre-register">
          <Button className="rounded-lg bg-white text-[#4B0325] hover:bg-gray-50 lg:hidden">
            Pre-Register
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

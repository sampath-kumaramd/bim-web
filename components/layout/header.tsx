'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MainHeader } from '../MainHeader';
import { Button } from '../ui/button';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    router.push('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="bg-pink">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button onClick={toggleMenu} className="z-50 lg:hidden">
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X size={24} color="white" />
                ) : (
                  <Menu size={24} color="white" />
                )}
              </motion.div>
            </button>

            <button onClick={handleLogoClick}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={300}
                height={300}
                className="w-[180px] md:w-[250px] h-auto lg:w-[300px]"
                loading="lazy"
              />
            </button>
          </div>
          <MainHeader className="hidden flex-row gap-4 lg:flex" />

          <div className="flex items-center gap-4">
            <Button className="hidden rounded-lg bg-white text-[#4B0325] hover:bg-gray-50 md:block">
              Pre-Register
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed left-0 top-0 z-40 w-full bg-pink lg:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 pt-20">
              <MainHeader className="flex flex-col items-start space-y-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
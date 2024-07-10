import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CustomButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'custom';
  cornerStyle: 'rounded' | 'pill' | 'sharp' | 'asymmetrical';
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant,
  cornerStyle,
  className,
}) => {
  const primaryClasses =
    'bg-yellow-400 text-black hover:bg-yellow-500 clip-customLeft rounded-2xl rounded-tl-3xl rounded-bl-3xl  h-16';
  const secondaryClasses =
    'bg-white/20 text-white hover:bg-white/30 clip-customRight rounded-2xl rounded-tr-3xl rounded-br-3xl h-16';
  const tertiaryClasses =
    'bg-[#D10062] text-white hover:bg-[#C0005A] shadow-lg shadow-[#58350833] clip-customRight rounded-2xl rounded-tr-3xl rounded-br-3xl h-16';
  const customClasses = 'rounded-2xl h-16';

  const variantClasses =
    variant === 'primary'
      ? primaryClasses
      : variant === 'secondary'
        ? secondaryClasses
        : variant === 'tertiary'
          ? tertiaryClasses
          : customClasses;

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'relative px-6 py-2 font-semibold transition-colors duration-300',
        variantClasses,
        className,
      )}
    >
      {text}
    </motion.button>
  );
};

export default CustomButton;

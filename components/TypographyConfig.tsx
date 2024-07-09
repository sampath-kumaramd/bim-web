import { cva } from 'class-variance-authority';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      default: 'font-sans', // Add a default style
      menuItem:
        "font-['Hempa_Sans'] font-normal text-[18px] leading-[24px] tracking-normal",
      footerText:
        "font-['Hempa_Sans'] font-normal text-[20px] leading-[27.9px] tracking-normal",
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

import { VariantProps } from 'class-variance-authority';

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

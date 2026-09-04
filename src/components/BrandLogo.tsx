import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface BrandLogoProps {
  className?: string;
  label?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-9 w-9',
  label = 'StyleCue Logo'
}) => {
  const { themeConfig } = useTheme();

  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-full border-2 ${className}`}
      style={{
        borderColor: themeConfig.primaryAccent
      }}
    >
      <span
        aria-hidden="true"
        className="h-full w-full"
        style={{
          backgroundColor: themeConfig.primaryAccent,
          maskImage: 'url(/logo.png)',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskImage: 'url(/logo.png)',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain'
        }}
      />
    </span>
  );
};
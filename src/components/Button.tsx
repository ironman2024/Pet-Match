import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  variant = 'primary',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
  const variants = {
    primary: 'bg-[#4A90E2] text-white hover:bg-[#357ABD]',
    secondary: 'bg-[#50C878] text-white hover:bg-[#3EA861]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
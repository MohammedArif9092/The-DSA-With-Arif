import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'yellow' | 'pink' | 'blue' | 'white' | 'purple' | 'green';
}

export const Card: React.FC<CardProps> = ({ className, color = 'white', children, ...props }) => {
  const colorClass = {
    yellow: 'bg-neo-yellow',
    pink: 'bg-neo-pink',
    blue: 'bg-neo-blue',
    white: 'bg-neo-white',
    purple: 'bg-neo-purple',
    green: 'bg-neo-green',
  }[color];

  return (
    <div
      className={cn(
        "border-4 border-neo-black shadow-neo rounded-none p-6 transition-all",
        colorClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

export const Button: React.FC<ButtonProps> = ({ className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-neo-yellow hover:bg-yellow-400 text-black',
    secondary: 'bg-neo-white hover:bg-gray-100 text-black',
    danger: 'bg-neo-pink hover:bg-pink-600 text-white',
    success: 'bg-neo-green hover:bg-green-400 text-black',
  };

  return (
    <button
      className={cn(
        "border-4 border-neo-black shadow-neo-sm font-bold font-mono px-6 py-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export const BadgeItem: React.FC<{ icon: string; name: string; unlocked: boolean }> = ({ icon, name, unlocked }) => (
  <div className={cn(
    "flex flex-col items-center justify-center p-4 border-4 border-neo-black aspect-square",
    unlocked ? "bg-neo-blue shadow-neo-sm" : "bg-gray-300 opacity-50 grayscale"
  )}>
    <span className="text-4xl mb-2">{icon}</span>
    <span className="text-xs font-bold font-mono text-center leading-tight">{name}</span>
  </div>
);

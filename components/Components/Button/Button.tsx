import React, { ReactNode } from 'react';

interface Button {
  children: ReactNode;
  className?: string;
  full?: boolean;
  onClick?: () => void | Promise<unknown>;
}

function Button({ children, className, full, ...rest }: Button) {
  return (
    <button
      className={`px-4 py-2 neon-button 
    ${className} 
    ${full ? 'mt-5 w-full text-base sm:text-2xl' : ''} 
    
    `}
      {...rest}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}

export default Button;

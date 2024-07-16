import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Button {
  children: ReactNode;
  className?: string;
  onClick?: () => void | Promise<unknown>;
}

function Button({ children, className, ...rest }: Button) {
  return (
    <button className={clsx('px-6 py-2 neon-button text-base sm:text-2xl ', className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;

import React from 'react';
import { Button as NBButton, IButtonProps } from 'native-base';

export interface ButtonProps extends IButtonProps {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <NBButton
      {...props}
      bgColor="success.600"
      _text={{ fontSize: 16, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>
      {children}
    </NBButton>
  );
};

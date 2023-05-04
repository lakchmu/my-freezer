import React from 'react';
import { Button as NBButton, IButtonProps } from 'native-base';

export interface CancelProps extends IButtonProps {}

export const Cancel = ({ ...props }: CancelProps) => {
  return (
    <NBButton
      {...props}
      flex="1"
      variant="outline"
      _text={{ fontSize: 16, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>
      Cancel
    </NBButton>
  );
};

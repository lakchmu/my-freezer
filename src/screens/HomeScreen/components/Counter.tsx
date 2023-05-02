import React, { FC, useCallback } from 'react';
import { Box, Icon as NBIcon, IconButton, Text } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface CounterProps {
  value: number;
  onChange: (value: number) => void;
}

export const Counter: FC<CounterProps> = ({ value, onChange }: CounterProps) => {
  const onIncrement = () => {
    onChange(value + 1);
  };

  const onDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const Icon = useCallback(
    ({ name }: { name: string }) => <NBIcon size="lg" as={SimpleLineIcons} name={name} color="primary.600" />,
    [],
  );

  return (
    <Box flexDirection="row" alignItems="center">
      <IconButton onPress={onDecrement} icon={<Icon name="minus" />} />
      <Text color="primary.600" fontSize="18" fontWeight="bold" mx={1}>
        {value}
      </Text>
      <IconButton onPress={onIncrement} icon={<Icon name="plus" />} />
    </Box>
  );
};

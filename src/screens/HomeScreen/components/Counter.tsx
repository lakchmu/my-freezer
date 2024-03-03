import React, { FC, useCallback } from 'react';
import { HStack, Icon as NBIcon, IconButton, Spinner } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface CounterProps {
  loading: boolean;
  value: number;
  onChange: (value: number) => void;
}

export const Counter: FC<CounterProps> = ({ loading, value, onChange }: CounterProps) => {
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
    <HStack justifyContent="space-between" alignItems="center">
      {loading && <Spinner fontSize="md" color="primary.600" />}
      <IconButton onPress={onDecrement} icon={<Icon name="minus" />} disabled={loading} />
      <IconButton onPress={onIncrement} icon={<Icon name="plus" />} disabled={loading} />
    </HStack>
  );
};

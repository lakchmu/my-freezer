import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Stack, Select as NBSelect, Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface SelectProps {
  label: string;
  errorMessage: string;
  placeholder: string;
  accessibilityLabel: string;
  options: Option[];
  value: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

type Option = { label: string; value: string };

export const Select = ({
  value,
  onSelect,
  label,
  options,
  placeholder,
  accessibilityLabel,
  errorMessage,
}: SelectProps) => {
  return (
    <Stack>
      <FormControl.Label>{label}</FormControl.Label>
      <NBSelect
        accessibilityLabel={accessibilityLabel}
        placeholder={placeholder}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <Icon as={Feather} name="chevron-down" size={3} />,
        }}
        selectedValue={value}
        onValueChange={onSelect}>
        {options.map((option: Option) => (
          <NBSelect.Item label={option.label} value={option.value} key={option.value} />
        ))}
      </NBSelect>
      <FormControl.ErrorMessage leftIcon={<Icon as={MaterialIcons} name="error-outline" size={5} />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </Stack>
  );
};

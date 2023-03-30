import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Stack, Input as NBInput, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface InputProps {
  label: string;
  placeholder: string;
  accessibilityLabel: string;
  value: string;
  onInput: Dispatch<SetStateAction<string>>;
}

export const Input = ({ value, onInput, label, placeholder, accessibilityLabel }: InputProps) => {
  return (
    <Stack>
      <FormControl.Label>{label}</FormControl.Label>
      <NBInput
        type="text"
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel}
        onChangeText={onInput}
        value={value}
      />
      {false && (
        <>
          <FormControl.HelperText>Must be atleast 6 characters.</FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<Icon as={MaterialIcons} name="error-outline" size={5} />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </>
      )}
    </Stack>
  );
};

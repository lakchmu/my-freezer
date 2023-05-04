import React, { Dispatch } from 'react';
import { FormControl, VStack, HStack } from 'native-base';
import { ImagePickerResponse } from 'react-native-image-picker';

import { ImageInput, Input, Scanner, Select } from '../../../../components';
import { Unit } from '../../../../types';

export const initFormValue: FormValueProp = {
  name: '',
  limit: '',
  unit: Unit.PIECE,
  barcode: '',
  uri: undefined,
  image: {} as ImagePickerResponse,
};

export interface FormValueProp {
  name: string;
  limit: string;
  unit: Unit;
  barcode: string;
  uri?: string;
  image: ImagePickerResponse;
}

export interface FormContentProp {
  value: FormValueProp;
  setValue: Dispatch<React.SetStateAction<FormValueProp>>;
  Controls: any;
}

export const FormContent = ({ value, setValue, Controls }: FormContentProp) => {
  const options = [
    { label: Unit.PIECE, value: Unit.PIECE },
    { label: Unit.GRAM, value: Unit.GRAM },
  ];

  const onInput = (field: Record<string, unknown>) => setValue({ ...value, ...field });

  return (
    <VStack space={2}>
      <ImageInput value={value.image} onInput={image => onInput({ image })} currentUri={value.uri} />
      <FormControl isRequired>
        <Input
          label="Name"
          placeholder="Name"
          accessibilityLabel="Input name of a product"
          value={value.name}
          onInput={name => onInput({ name })}
        />
      </FormControl>
      <HStack space={2}>
        <FormControl flex="1" isRequired>
          <Input
            label="Limit"
            placeholder="Limit"
            accessibilityLabel="Input Limit"
            value={value.limit}
            onInput={limit => onInput({ limit })}
          />
        </FormControl>
        <FormControl flex="1" isRequired>
          <Select
            label="Unit"
            placeholder="Choose Unit"
            errorMessage="Please make a selection!"
            accessibilityLabel="Select Unit"
            options={options}
            value={value.unit}
            onSelect={unit => onInput({ unit })}
          />
        </FormControl>
      </HStack>
      <Scanner value={value.barcode} setValue={barcode => onInput({ barcode })} />
      <HStack space={2}>
        <Controls />
      </HStack>
    </VStack>
  );
};

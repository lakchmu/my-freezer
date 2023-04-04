import React, { useContext, useState } from 'react';
import { FormControl, VStack, HStack } from 'native-base';
import { Asset, ImagePickerResponse } from 'react-native-image-picker';

import { Button, ImageInput, Input, Scanner, Select } from '../../../components';
import { Unit } from '../../../types';
import { getHttpClient } from '../../../rest';
import { NotificationContext, NotificationStatus } from '../../../store';

export const Form = () => {
  const { dispatch } = useContext(NotificationContext);

  const [name, setName] = useState<string>('');
  const [limit, setLimit] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [barcode, setBarcode] = useState<string>('');
  const [image, setImage] = useState<ImagePickerResponse>({} as ImagePickerResponse);

  const options = [
    { label: Unit.PIECE, value: Unit.PIECE },
    { label: Unit.GRAM, value: Unit.GRAM },
  ];

  const onSubmit = async () => {
    try {
      const httpClient = await getHttpClient({ headers: { 'Content-Type': 'multipart/form-data' } });
      const body = getData();

      await httpClient.post('/product', body);

      dispatch({ show: true, text: 'The Product Was Added', status: NotificationStatus.SUCCESS });
      clean();
    } catch (error: any) {
      dispatch({ show: true, text: error.message, status: NotificationStatus.ERROR });
    }
  };

  const getData = () => {
    const body = new FormData();

    if (image.assets) {
      const photo: Asset = image.assets[0];
      if (!photo.uri || !photo.fileName || !photo.type) {
        return;
      }
      body.append('files', { uri: photo.uri, name: photo.fileName, type: photo.type });
    }
    body.append('name', name);
    body.append('limit', limit);
    body.append('unit', unit);
    body.append('barcode', barcode);

    return body;
  };

  const clean = () => {
    setName('');
    setLimit('');
    setUnit('');
    setBarcode('');
    setImage({});
  };

  return (
    <VStack space={2}>
      <ImageInput value={image} onInput={setImage} />
      <FormControl isRequired>
        <Input
          label="Name"
          placeholder="Name"
          accessibilityLabel="Input name of a product"
          value={name}
          onInput={setName}
        />
      </FormControl>
      <HStack space={2}>
        <FormControl flex="1" isRequired>
          <Input label="Limit" placeholder="Limit" accessibilityLabel="Input Limit" value={limit} onInput={setLimit} />
        </FormControl>
        <FormControl flex="1" isRequired>
          <Select
            label="Unit"
            placeholder="Choose Unit"
            errorMessage="Please make a selection!"
            accessibilityLabel="Select Unit"
            options={options}
            value={unit}
            onSelect={setUnit}
          />
        </FormControl>
      </HStack>
      <Scanner value={barcode} setValue={setBarcode} />
      <Button mt="8" size="lg" onPress={onSubmit}>
        Create
      </Button>
    </VStack>
  );
};

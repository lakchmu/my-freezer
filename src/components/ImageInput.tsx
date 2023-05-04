import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, IconButton, Image, Stack } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { Actionsheet } from './Actionsheet';

export interface ImageInputProps {
  value: ImagePickerResponse;
  onInput: Dispatch<SetStateAction<ImagePickerResponse>>;
  currentUri?: string;
}

export const ImageInput = ({ currentUri, value, onInput }: ImageInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onPress = async (useGallery: boolean) => {
    const res = useGallery
      ? await launchImageLibrary({ mediaType: 'photo' })
      : await launchCamera({ mediaType: 'photo', saveToPhotos: true });

    onInput(res);
    setIsOpen(false);
  };

  const uri: string = useMemo(() => {
    const defaultUri = currentUri || 'https://wallpaperaccess.com/full/317501.jpg';

    return value.assets?.length && value.assets[0].uri ? value.assets[0].uri : defaultUri;
  }, [value, currentUri]);

  const items = [
    { label: 'From Gallery', value: true },
    { label: 'Use Camera', value: false },
  ];

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Stack style={style.root}>
      <Image source={{ uri }} alt="Product" size="xl" w="100%" />
      <IconButton
        style={style.button}
        icon={<Icon as={Entypo} name="camera" />}
        borderRadius="full"
        _icon={{ color: 'coolGray.50', size: 'md' }}
        _hover={{ bg: 'coolGray.800:alpha.20' }}
        _pressed={{ bg: 'coolGray.800:alpha.40' }}
        _ios={{ _icon: { size: '2xl' } }}
        onPress={onOpen}
      />
      <Actionsheet items={items} isOpen={isOpen} onClose={onClose} onPress={onPress} />
    </Stack>
  );
};

const style = StyleSheet.create({
  root: { position: 'relative' },
  button: { position: 'absolute', top: 12, right: 12 },
});

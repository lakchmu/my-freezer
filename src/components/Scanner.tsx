import React, { useState } from 'react';
import { FormControl, Icon, Input, Pressable, Stack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BarcodeScanner from 'react-native-scan-barcode';
import { StyleSheet, useWindowDimensions } from 'react-native';

export interface ScannerProps {
  value: string;
  setValue: (value: string) => void;
}

export const Scanner = ({ value, setValue }: ScannerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onPress = () => setIsLoading(!isLoading);

  const barcodeReceived = (e: any) => {
    setValue(e.data);
    setIsLoading(false);
  };

  const { height } = useWindowDimensions();

  return (
    <>
      {isLoading && (
        <Stack style={styles(height).wrap}>
          <BarcodeScanner
            onBarCodeRead={barcodeReceived}
            style={styles(height).root}
            torchMode="off"
            cameraType="back"
          />
        </Stack>
      )}
      <FormControl.Label>Barcode</FormControl.Label>
      <Input
        type="text"
        placeholder="barcode"
        accessibilityLabel="barcode"
        onChangeText={setValue}
        value={value}
        InputRightElement={
          <Pressable onPress={onPress} borderRadius="md" _hover={{ opacity: '0.8' }} _pressed={{ opacity: '0.6' }}>
            <Icon as={<MaterialCommunityIcons name="barcode-scan" />} size={5} mr="4" />
          </Pressable>
        }
      />
    </>
  );
};

const styles = (height: number) =>
  StyleSheet.create({
    root: {
      position: 'absolute',
      height,
      width: '100%',
      top: -(height / 2) + height / 8,
      left: 0,
    },
    wrap: {
      position: 'relative',
      height: height / 4,
      width: '100%',
      overflow: 'hidden',
    },
  });

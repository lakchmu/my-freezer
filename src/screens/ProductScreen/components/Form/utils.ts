import { Asset, ImagePickerResponse } from 'react-native-image-picker';

interface getFormDataProp {
  image: ImagePickerResponse;
  name: string;
  limit: string;
  unit: string;
  barcode: string;
}

export const getFormData = (prop: getFormDataProp) => {
  const { image, name, limit, unit, barcode } = prop;

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

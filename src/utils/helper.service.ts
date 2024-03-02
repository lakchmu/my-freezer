import { ImageSourcePropType } from 'react-native';

const HelperService = {
  getImageUrl(url?: string): ImageSourcePropType | undefined {
    return url ? { uri: `${process.env.BASE_URL}/uploads/${url}` } : undefined;
  },
};

export default HelperService;

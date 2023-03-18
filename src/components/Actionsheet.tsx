import React from 'react';
import { Icon, Actionsheet as RBActionsheet } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface ActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Actionsheet = ({ isOpen, onClose }: ActionsheetProps) => (
  <RBActionsheet isOpen={isOpen} onClose={onClose} size="full">
    <RBActionsheet.Content>
      <RBActionsheet.Item startIcon={<Icon as={MaterialIcons} size="6" name="logout" />}>Logout</RBActionsheet.Item>
      <RBActionsheet.Item startIcon={<Icon as={Ionicons} size="6" name="close" />} onPress={onClose}>
        Close
      </RBActionsheet.Item>
    </RBActionsheet.Content>
  </RBActionsheet>
);

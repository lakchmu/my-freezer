import React from 'react';
import { Icon, Actionsheet as RBActionsheet } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type ActionItem = {
  label: string;
  iconName?: string;
  value: any;
};
export interface ActionsheetProps {
  items: ActionItem[];
  isOpen: boolean;
  onClose: () => void;
  onPress(value: boolean): void;
}

export const Actionsheet = ({ isOpen, onClose, items, onPress }: ActionsheetProps) => (
  <RBActionsheet isOpen={isOpen} onClose={onClose} size="full">
    <RBActionsheet.Content>
      {items.map(({ label, value, iconName }: ActionItem) => (
        <RBActionsheet.Item
          {...(iconName ? { startIcon: <Icon as={MaterialIcons} size="6" name={iconName} /> } : {})}
          onPress={() => onPress(value)}
          key={label}>
          {label}
        </RBActionsheet.Item>
      ))}
    </RBActionsheet.Content>
  </RBActionsheet>
);

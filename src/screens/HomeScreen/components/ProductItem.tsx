import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { HStack, VStack, Text, IconButton, Icon, Spinner, Pressable } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';

import { NotificationContext, NotificationStatus, ProductsContext } from '../../../store';
import { BaseScreenNavigationProp, RootStackScreen } from '../../../router/type';
import { HelperService } from '../../../utils';
import { Avatar } from '../../../components';

import { Counter } from './Counter';

import type { Product } from '../../../types';

export interface ProductItemProps extends Product {}

export const ProductItem: FC<ProductItemProps> = ({ id, name, uri, amount, limit }: ProductItemProps) => {
  const { edit, remove } = useContext(ProductsContext);
  const { dispatch } = useContext(NotificationContext);
  const { navigate } = useNavigation<BaseScreenNavigationProp<RootStackScreen.HOME>>();

  const [count, setCount] = useState<number>(amount);

  const [removing, setRemoving] = useState<boolean>(false);
  const [counting, setCounting] = useState<boolean>(false);

  const debounceEdit = useCallback(
    debounce(async (id: number, data: Partial<Product>) => {
      setCounting(true);
      await edit(id, data);
      setCounting(false);
    }, 2000),
    [edit],
  ); // TODO fix warning

  const onEditPageOpen = () => navigate(RootStackScreen.EDITPRODUCT, { id });

  const onRemove = async () => {
    try {
      setRemoving(true);
      await remove(id);
      dispatch({ show: true, text: 'The Product Was Deleted', status: NotificationStatus.SUCCESS });
    } catch (error: any) {
      dispatch({ show: true, text: error.message, status: NotificationStatus.ERROR });
    } finally {
      setRemoving(false);
    }
  };

  const setFullAmount = async () => {
    setCounting(true);
    setCount(limit);
    await edit(id, { amount: limit });
    setCounting(false);
  };

  const onCountChange = useCallback(
    (value: number) => {
      setCount(value);
      debounceEdit(id, { amount: value });
    },
    [id, debounceEdit],
  );

  const source = useMemo(() => HelperService.getImageUrl(uri), [uri]);

  return (
    <Pressable onPress={onEditPageOpen}>
      <HStack alignItems="center" space={4}>
        <Avatar source={source} name={name} />
        <VStack alignItems="flex-start" flex={1}>
          <Text fontSize="xl" bold lineHeight="xs" color="coolGray.800" marginBottom="2">
            {name}
          </Text>
          <Text fontSize="xs" bold color="coolGray.400">
            Needs For Week: {limit}
          </Text>
          <Text fontSize="sm" bold color="darkBlue.700">
            Current: {count}
          </Text>
        </VStack>
        <VStack alignItems="stretch" justifyContent="flex-end" space={5}>
          <HStack justifyContent="flex-end" alignItems="center">
            {counting ? (
              <Spinner fontSize="md" color="lime.600" marginRight="1" />
            ) : (
              <IconButton
                onPress={setFullAmount}
                icon={<Icon size="lg" as={MaterialIcons} name="battery-charging-full" color="lime.600" />}
                padding="1"
              />
            )}
            {removing ? (
              <Spinner fontSize="md" color="red.600" />
            ) : (
              <IconButton
                onPress={onRemove}
                icon={<Icon size="md" as={SimpleLineIcons} name="trash" color="red.600" />}
                padding="1"
              />
            )}
          </HStack>
          <Counter loading={counting} value={count} onChange={onCountChange} />
        </VStack>
      </HStack>
    </Pressable>
  );
};

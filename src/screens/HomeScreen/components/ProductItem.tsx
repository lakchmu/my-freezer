import React, { FC, useCallback, useContext, useState } from 'react';
import { HStack, Avatar, VStack, Text, IconButton, Icon } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';

import { ProductsContext } from '../../../store';
import { BaseScreenNavigationProp, RootStackScreen } from '../../../router/type';

import { Counter } from './Counter';

import type { Product } from '../../../types';

const BASE_URL = process.env.BASE_URL;

export interface ProductItemProps extends Product {}

export const ProductItem: FC<ProductItemProps> = ({ id, name, uri, amount, limit }: ProductItemProps) => {
  const { edit } = useContext(ProductsContext);
  const { navigate } = useNavigation<BaseScreenNavigationProp<RootStackScreen.HOME>>();

  const [count, setCount] = useState<number>(amount);

  const debounceEdit = useCallback(debounce(edit, 2000), [edit]); // TODO fix warning

  const onEditPageOpen = () => navigate(RootStackScreen.EDITPRODUCT, { id });

  const onCountChange = useCallback(
    (value: number) => {
      setCount(value);
      debounceEdit(id, { amount: value });
    },
    [id, debounceEdit],
  );

  const source = uri ? { uri: `${BASE_URL}/uploads/${uri}` } : undefined;

  return (
    <HStack alignItems="center" space={2} p={2} backgroundColor="white" w="100%" h="32">
      <Avatar bg="darkBlue.700" source={source} size="xl">
        {!uri && name.slice(0, 2)}
      </Avatar>
      <VStack alignItems="flex-start" flex={1}>
        <Text fontSize="lg" fontWeight="bold" bold color="coolGray.800">
          {name}
        </Text>
        <Text fontSize="md" color="coolGray.800">
          Amount: {count}, Limit: {limit}
        </Text>
      </VStack>
      <VStack alignItems="flex-end" space={5}>
        <IconButton
          onPress={onEditPageOpen}
          icon={<Icon size="md" as={SimpleLineIcons} name="pencil" color="lime.600" />}
        />
        <Counter value={count} onChange={onCountChange} />
      </VStack>
    </HStack>
  );
};

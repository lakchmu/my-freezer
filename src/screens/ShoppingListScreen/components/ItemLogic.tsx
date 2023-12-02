import React from 'react';

import { ItemContent, ItemContentProps } from './ItemContent';

interface ItemLogicProps extends ItemContentProps {}

const BASE_URL = process.env.BASE_URL;

export const ItemLogic = (props: ItemLogicProps) => {
  const source = props.uri ? { uri: `${BASE_URL}/uploads/${props.uri}` } : undefined;
  const count = props.limit - props.amount;

  return <ItemContent {...props} source={source} count={count} />;
};

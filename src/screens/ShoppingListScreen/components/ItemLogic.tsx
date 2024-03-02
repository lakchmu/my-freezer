import React, { useMemo } from 'react';

import { HelperService } from '../../../utils';

import { ItemContent, ItemContentProps } from './ItemContent';

interface ItemLogicProps extends ItemContentProps {}

export const ItemLogic = ({ uri, ...rest }: ItemLogicProps) => {
  const source = useMemo(() => HelperService.getImageUrl(uri), [uri]);
  const count = rest.limit - rest.amount;

  return <ItemContent {...rest} source={source} count={count} />;
};

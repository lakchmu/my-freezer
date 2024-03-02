import React, { useMemo } from 'react';
import { Avatar as NBAvatar, Text } from 'native-base';
import { ImageSourcePropType } from 'react-native';

interface AvatarProps {
  name: string;
  source?: ImageSourcePropType;
}

export function Avatar({ source, name }: AvatarProps) {
  const label = useMemo(() => {
    if (!name?.length) {
      return '??';
    }

    const words: string[] | undefined = name.trim().split(' ');

    if (!words || !words.length) {
      return '??';
    }

    return `${words.at(0)?.slice(0, 1)}${words.at(1)?.slice(0, 1)}`.toUpperCase();
  }, [name]);

  return (
    <NBAvatar bg="white" source={source} size="xl" borderColor="darkBlue.700" borderWidth="3px">
      <Text fontSize="2xl" color="darkBlue.700" fontWeight="700">
        {!source && label}
      </Text>
    </NBAvatar>
  );
}

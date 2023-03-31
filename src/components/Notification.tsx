import React, { useContext, useEffect, useMemo } from 'react';
import { Alert, HStack, Icon, IconButton, Text, useToast, VStack } from 'native-base';
import Feather from 'react-native-vector-icons/MaterialIcons';

import { NotificationContext, NotificationStatus } from '../store';

const Content = ({ id, title, description, status, isClosable, close, ...rest }: any) => (
  <Alert
    maxWidth="100%"
    alignSelf="center"
    flexDirection="row"
    status={status ? status : 'info'}
    variant="solid"
    {...rest}>
    <VStack space={4} flexShrink={1}>
      <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
        <HStack space={1} flexShrink={1} alignItems="center">
          {status === NotificationStatus.ERROR && <Icon size={5} as={<Feather name="error" />} color="white" />}
          {status === NotificationStatus.SUCCESS && (
            <Icon size={5} as={<Feather name="check-circle" />} color="white" />
          )}
          <Text fontSize="md" fontWeight="medium" flexShrink={1} color="lightText">
            {title}
          </Text>
        </HStack>
        {isClosable ? (
          <IconButton
            variant="unstyled"
            icon={<Icon size={5} as={Feather} name="close" color="white" />}
            _icon={{ color: 'lightText' }}
            onPress={() => close(id)}
          />
        ) : null}
      </HStack>
      {description && (
        <Text px="6" color="lightText">
          {description}
        </Text>
      )}
    </VStack>
  </Alert>
);

export const Notification = () => {
  const toast = useToast();
  const { state: notification, dispatch } = useContext(NotificationContext);

  const contentProps = useMemo(
    () => ({
      title: notification.text,
      isClosable: true,
      status: notification.status,
      close: toast.close,
    }),
    [notification, toast],
  );

  useEffect(() => {
    if (notification.show) {
      toast.show({
        render: ({ id }) => {
          return <Content id={id} {...contentProps} />;
        },
      });
      dispatch({ show: false });
    }
  }, [toast, dispatch, contentProps, notification]);

  return <></>;
};

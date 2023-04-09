import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Box, Pressable, VStack, Text, HStack, Divider, Stack } from 'native-base';

import { HomeScreen, LoginScreen, NewProductScreen, SearchScreen } from '../screens';
import AuthContext from '../store/auth/state';

import { RootStackParamList, RootStackScreen } from './type';

const DrawerNavigator = createDrawerNavigator<RootStackParamList>();

// const CustomDrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props} safeArea>
//       <VStack space="6" my="2" mx="1">
//         <Box px="4">
//           <Text bold color="gray.700">
//             Mail
//           </Text>
//           <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
//             john_doe@gmail.com
//           </Text>
//         </Box>
//         <VStack divider={<Divider />} space="4">
//           <VStack space="3">
//             {props.state.routeNames.map((name, index) => (
//               <Pressable
//                 px="5"
//                 py="3"
//                 rounded="md"
//                 bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
//                 onPress={event => {
//                   props.navigation.navigate(name);
//                 }}>
//                 <HStack space="7" alignItems="center">
//                   <Text fontWeight="500" color={index === props.state.index ? 'primary.500' : 'gray.700'}>
//                     {name}
//                   </Text>
//                 </HStack>
//               </Pressable>
//             ))}
//           </VStack>
//         </VStack>
//       </VStack>
//     </DrawerContentScrollView>
//   );
// };

export const Drawer = () => {
  const auth = useContext(AuthContext);

  return (
    <DrawerNavigator.Navigator
      // drawerContent={props => <CustomDrawerContent {...props} />} !^!&!&!&!&&!
      screenOptions={{ headerShown: false }}>
      {auth.state.isAuthorized ? (
        <>
          <DrawerNavigator.Screen name={RootStackScreen.HOME} component={HomeScreen} />
          <DrawerNavigator.Screen name={RootStackScreen.SEARCH} component={SearchScreen} />
          <DrawerNavigator.Screen name={RootStackScreen.NEWPRODUCT} component={NewProductScreen} />
        </>
      ) : (
        <DrawerNavigator.Screen name={RootStackScreen.LOGIN} component={LoginScreen} />
      )}
    </DrawerNavigator.Navigator>
  );
};

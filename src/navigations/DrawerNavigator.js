import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import HomeNavigator from './HomeNavigator';

const DrawerNavigator = () => {

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator headerMode="none">    
      <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
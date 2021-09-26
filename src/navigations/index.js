import React , { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, Button } from 'react-native';
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const [count, setCount] = useState(false);

  return(
    <NavigationContainer>
      {count ? <HomeNavigator /> : <LoginNavigator />}
      {!count ? <Button
        onPress={() => {
          setCount(true);
        }}
        title="Home"
        color="#841584"
      /> : 
        <Button
          onPress={() => {
            setCount(false);
          }}
          title="Login"
          color="#841584"
        />
      }
    </NavigationContainer>
  );
};

export default AppNavContainer;
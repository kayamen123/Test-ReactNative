import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

const LoginNavigator = () => {

const SignIn = () => {
  return (
    <View>
      <Text>
        Hi From SignIn!
      </Text>
    </View>
  )
}

const SignUp = () => {
  return (
    <View>
      <Text>
        Hi From SignUp!
      </Text>
    </View>
  )
}

  const LoginStack = createStackNavigator();
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="SignIn" component={SignIn}></LoginStack.Screen>
      <LoginStack.Screen name="SignUp" component={SignUp}></LoginStack.Screen>
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
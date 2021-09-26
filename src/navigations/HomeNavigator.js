import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

const HomeNavigator = () => {

const Register = () => {
  return (
    <View>
      <Text>
        Hi From Register!
      </Text>
    </View>
  )
}

const Login = () => {
  return (
    <View>
      <Text>
        Hi From Login!
      </Text>
    </View>
  )
}

  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Register">
      <HomeStack.Screen name="Login" component={Login}></HomeStack.Screen>
      <HomeStack.Screen name="Register" component={Register}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
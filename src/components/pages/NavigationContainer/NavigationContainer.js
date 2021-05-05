import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../organisms/Home/Home';
import Details from '../../organisms/Details';

const screenOptions = {
  headerShown: false,
};

const NavigationContainerComponent = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="home" component={Home} />
        <Screen name="details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerComponent;

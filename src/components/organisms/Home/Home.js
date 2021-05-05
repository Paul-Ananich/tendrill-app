import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';

import ItemsList from '../../molecules/ItemsList';
import FlowerIcon from '../../../assets/icons/flower.svg';
import {getLocationsList} from './ducks';

const tabBarOptions = {
  showLabel: false,
};

const Home = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationsList());
  }, [dispatch]);

  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen
        name="items-list"
        component={ItemsList}
        options={{
          tabBarIcon: ({focused}) => (
            <FlowerIcon
              width={30}
              height={30}
              fill={focused ? '#3C4046' : '#979797'}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Home;

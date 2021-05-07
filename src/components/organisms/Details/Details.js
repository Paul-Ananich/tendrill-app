import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Animated, View, TouchableOpacity} from 'react-native';
import {State} from 'react-native-gesture-handler';

import {getFarm, getLog} from './ducks';
import {StyledView, StyledSafeAreaView} from './styled.components';
import NavigationDrawer from '../../molecules/NavigationDrawer';
import SliderCustom from '../../molecules/ValueSlider';
import AnimatedImage from '../../atoms/AnimatedImage';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import Dots from '../../../assets/icons/dots.svg';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {farm} = useSelector(state => state.farm);
  const {log} = useSelector(state => state.log);

  useEffect(() => {
    dispatch(getFarm(item.fields.Farms[0]));
    dispatch(getLog(item));
  }, [dispatch, item]);

  let offset = 0;

  console.log(log);

  const heightAnimate = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: heightAnimate,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const handleMenu = useCallback(
    event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        let isOpen = true;
        const {translationY} = event.nativeEvent;
        offset += translationY;

        if (translationY >= 10) {
          isOpen = false;
        } else {
          heightAnimate.setValue(offset);
          heightAnimate.setOffset(0);
          offset = 0;
        }

        Animated.timing(heightAnimate, {
          toValue: isOpen ? 0 : 260,
          timing: 1000,
          useNativeDriver: true,
        }).start(() => {
          offset = isOpen ? 0 : 260;
          heightAnimate.setOffset(offset);
          heightAnimate.setValue(0);
        });
      }
    },
    [offset],
  );

  const handlePressBackButton = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <View>
      <AnimatedImage
        type="details-background-image"
        source={{uri: farm?.fields?.Attachments[0].url}}
        blurRadius={heightAnimate.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })}
      />
      <StyledSafeAreaView>
        <StyledView>
          <TouchableOpacity onPress={handlePressBackButton}>
            <ArrowLeft />
          </TouchableOpacity>
          <Dots />
        </StyledView>
      </StyledSafeAreaView>
      <NavigationDrawer
        animatedEvent={animatedEvent}
        handleMenu={handleMenu}
        heightAnimate={heightAnimate}
        name={farm?.fields.farm_name}>
        <SliderCustom
          minimumValue={1}
          maximumValue={6}
          initialValue={3}
          label="water level"
        />
        <SliderCustom
          minimumValue={0}
          maximumValue={200}
          initialValue={75}
          label="water temp"
        />
        <SliderCustom
          minimumValue={0}
          maximumValue={100}
          initialValue={85}
          label="air temp"
        />
        <SliderCustom
          minimumValue={0}
          maximumValue={100}
          initialValue={23}
          label="CO2 PUMP"
        />
      </NavigationDrawer>
    </View>
  );
};

export default Details;

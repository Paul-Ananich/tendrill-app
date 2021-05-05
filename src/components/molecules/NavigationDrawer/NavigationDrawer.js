import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import styles from './styled.components';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography';
import Divider from '../../atoms/Divider';

const NavigationDrawer = ({
  animatedEvent,
  handleMenu,
  heightAnimate,
  name,
  children,
}) => {
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={handleMenu}>
      <Animated.View
        style={[
          styles.navigationDrawer,
          {
            transform: [
              {
                translateY: heightAnimate.interpolate({
                  inputRange: [0, 260],
                  outputRange: [0, 260],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <Button type="sliders-badge" isClickable={false} />
        <Typography type="details-title">{name}</Typography>
        <Typography type="details-subtitle">
          Tulip • 37 days • Healthy
        </Typography>
        <Divider />
        <Animated.View
          style={{
            opacity: heightAnimate.interpolate({
              inputRange: [0, 220],
              outputRange: [1, 0],
            }),
          }}>
          {children}
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default NavigationDrawer;

import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import styles from './styled.components';
import {StyledTagsContainer} from './styled.components';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography';
import Divider from '../../atoms/Divider';
import Input from '../../atoms/Input';

const NavigationDrawer = ({
  animatedEvent,
  handleMenu,
  heightAnimate,
  name,
  handleSubmitInput,
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
        <StyledTagsContainer>
          <Input name="Tulip" handleSubmitInput={handleSubmitInput.bind({inputName: 'lifecycle'})} />
          <Typography type="details-subtitle">•</Typography>
          <Input name="37 days" handleSubmitInput={handleSubmitInput.bind({inputName: 'age'})} />
          <Typography type="details-subtitle">•</Typography>
          <Input name="Healthy" handleSubmitInput={handleSubmitInput.bind({inputName: 'health_status'})} />
        </StyledTagsContainer>
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

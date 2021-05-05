import React from 'react';
import {View} from 'react-native';

import Typography from '../../atoms/Typography';
import {StyledBox, StyledBoxImage} from './styled.components';

const Box = ({onPress, source, text}) => {
  return (
    <View>
      <StyledBox onPress={onPress}>
        <StyledBoxImage source={source} />
        <Typography type="box-item">{text}</Typography>
      </StyledBox>
    </View>
  );
};

export default Box;

import React, {useCallback, useState} from 'react';
import Slider from '@react-native-community/slider';

import Typography from '../../atoms/Typography';
import styles, {StyledValueSlider} from './styled.components';

const ValueSlider = ({maximumValue, minimumValue, initialValue, label}) => {
  const [sliderValue, setSliderValue] = useState(initialValue);

  const handleValueChange = useCallback(value => {
    setSliderValue(value);
  }, []);

  return (
    <StyledValueSlider>
      <Typography type="value-slider-label">{label}</Typography>
      <Slider
        style={styles.slider}
        thumbTintColor="#3C4046"
        value={sliderValue}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={1}
        minimumTrackTintColor="#3C4046"
        maximumTrackTintColor="#E6E6E6"
        onValueChange={handleValueChange}
      />
    </StyledValueSlider>
  );
};

export default ValueSlider;

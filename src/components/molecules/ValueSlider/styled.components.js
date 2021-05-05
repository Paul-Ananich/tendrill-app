import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';

const styles = StyleSheet.create({
  slider: {
    width: '75%',
  },
});

const StyledValueSlider = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export {StyledValueSlider};

export default styles;

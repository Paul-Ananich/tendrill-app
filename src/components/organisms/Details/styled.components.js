import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

const StyledSafeAreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  justify-content: space-between;
`;

const StyledView = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 30px;
`;

export {StyledSafeAreaView, StyledView};

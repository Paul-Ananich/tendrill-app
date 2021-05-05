import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';

const StyledBox = styled(TouchableOpacity)`
  flex: 1;
  margin-horizontal: 12px;
  margin-top: 15px;
  margin-bottom: 20px;
  align-items: center;
  shadow-color: #b8cdd0;
  shadow-opacity: 1;
  shadow-radius: 6.68px;
  elevation: 10;
`;

const StyledBoxImage = styled(Image)`
  flex: 1;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export {StyledBox, StyledBoxImage};

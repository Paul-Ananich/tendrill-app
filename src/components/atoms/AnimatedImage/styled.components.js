import {Animated} from 'react-native';
import styled from 'styled-components';

const StyledAnimatedImage = styled(Animated.Image)`
  ${({type}) => {
    switch (type) {
      case 'details-background-image':
        return `
          width: 100%;
          height: 100%;
          z-index: 1;
        `;
      default:
        return;
    }
  }}
`;

export {StyledAnimatedImage};

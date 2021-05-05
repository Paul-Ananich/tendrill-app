import {View} from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  ${({type}) => {
    switch (type) {
      case 'sliders-badge':
        return `
          background-color: #dcdbda;
          border-radius: 2px;
          height: 4px;
          width: 30px;
        `;
      default:
        return;
    }
  }}
`;

export {StyledView};

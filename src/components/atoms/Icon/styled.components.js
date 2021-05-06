import { View } from 'react-native';
import styled from 'styled-components';

const StyledIconContainer = styled(View)`
  ${({type}) => {
  switch (type) {
    case 'actions-icon':
      return `
          margin-left: 16px;
        `;
    default:
      return;
  }
}}
`;

export { StyledIconContainer };

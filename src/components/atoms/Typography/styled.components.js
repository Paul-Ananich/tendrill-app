import {Text} from 'react-native';
import styled from 'styled-components';

const defaultTextStyling = Object.freeze(`
  font-family: Raleway-Regular;
`);

const StyledText = styled(Text)`
  ${defaultTextStyling}
  ${({type}) => {
    switch (type) {
      case 'box-item':
        return `
          color: #3c4046;
          letter-spacing: 1.09375px;
          font-size: 16px;
          line-height: 19px;
        `;
      case 'value-slider-label':
        return `
          width: 25%;
          color: #828282;
          font-family: Raleway-Bold;
          letter-spacing: 0.957031px;
          font-size: 10px;
          line-height: 12px;
          text-transform: uppercase;
        `;
      case 'item-list-header':
        return `
          font-size: 30px;
          font-family: Raleway-Bold;
          letter-spacing: 1.09375px;
          color: #3C4046;
        `;
      case 'details-title':
        return `
          fontFamily: Raleway-Bold;
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 1.64062px;
          color: #3C4046;
          margin-top: 22px;
        `;
      case 'details-subtitle':
        return `
          color: #828282;
          font-family: Raleway;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 1.04px;
          margin-top: 11px;
          margin-bottom: 35px;
        `;
      default:
        return;
    }
  }}
`;

export {StyledText};

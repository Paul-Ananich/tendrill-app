import React from 'react';

import {StyledText} from './styled.components';

const Typography = ({children, type}) => {
  return <StyledText type={type}>{children}</StyledText>;
};

export default Typography;

import React from 'react';

import { StyledIconContainer } from './styled.components';

const Icon = ({ type, children }) => {
  return <StyledIconContainer type={type}>{children}</StyledIconContainer>;
};

export default Icon;

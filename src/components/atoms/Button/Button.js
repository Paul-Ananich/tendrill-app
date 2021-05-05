import React from 'react';

import {StyledView} from './styled.components';

const Button = ({isClickable, ...rest}) => {
  return <>{isClickable ? <></> : <StyledView {...rest} />}</>;
};

export default Button;

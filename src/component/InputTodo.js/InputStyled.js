import React from 'react';
import styled from 'styled-components';
import { Input, Box, Button } from '@chemcycled/components';

export const StyledInput = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <Input {...props} />
    </div>
  ))
)`
  margin-bottom: 10px;
`;

export const BoxStyled = styled(Box)`
  width: 50%;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

export const Text = styled('div')`
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: hsla(223, 39%, 55%, 1);
  font-weight: bold;
`;

export const StyleButton = styled(Button)``;

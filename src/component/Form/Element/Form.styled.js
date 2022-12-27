import React from 'react';
import {
  Box,
  Typography,
  Input,
  TextArea,
  RadioButtonGroup,
} from '@chemcycled/components';
import styled from 'styled-components';

export const StyledForm = styled(({ ...props }) => (
  <Box as='form' {...props} />
))`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFieldError = styled(({ ...props }) => (
  <Typography mt={0.8} type='span' {...props} />
))`
  display: block;
  color: ${({ theme }) => theme.color.error.primary};
  ${({ position }) => position && `position: ${position};`}
`;

export const StyledInput = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <Input {...props} />
    </div>
  ))
)`
  width: 100%;

  .ant-select-selector {
    height: 22px; // Fixed for all devices
  }
`;

export const StyledTextArea = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <TextArea {...props} />
    </div>
  ))
)``;

export const StyledRadioButtonGroup = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <RadioButtonGroup {...props} />
    </div>
  ))
)`
  ${({ disabled }) => disabled && `pointer-events: none;`};

  .ant-radio {
    padding: 0 0 1px;
  }
`;

export const StyleLabel = styled.label`
  display: flex;
`;

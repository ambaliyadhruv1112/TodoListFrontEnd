import React from 'react';

import { Box } from '@chemcycled/components';
import { Controller } from 'react-hook-form';

import { StyledTextArea } from './Form.styled';
import FormFieldError from './FormFieldError';

import { getFieldError } from '../../../utils/formValidation';

const FormTextArea = ({
  control,
  name,
  disabled,
  placeholder = '',
  ...rest
}) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => (
          <StyledTextArea
            color={error ? 'error' : 'primary'}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
            {...field}
          />
        )}
        name={name}
        color={color}
        {...rest}
      />
      {error && <FormFieldError error={error} />}
    </Box>
  );
};

export default FormTextArea;

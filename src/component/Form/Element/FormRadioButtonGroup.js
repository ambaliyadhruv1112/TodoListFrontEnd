import React from 'react';
import { Box } from '@chemcycled/components';
import { Controller } from 'react-hook-form';
import { StyledRadioButtonGroup } from './Form.styled';
import FormFieldError from './FormFieldError';
import { getFieldError } from '../../../utils/formValidation';

const FormRadioButtonGroup = ({
  control,
  name,
  align,
  errorPosition,
  disabled,
  ...rest
}) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box align={align} {...rest}>
      <Controller
        control={control}
        render={({ field }) => (
          <StyledRadioButtonGroup disabled={disabled} {...field} {...rest} />
        )}
        name={name}
        color={color}
        {...rest}
      />
      {error && (
        <FormFieldError error={error} align={align} position={errorPosition} />
      )}
    </Box>
  );
};

export default FormRadioButtonGroup;

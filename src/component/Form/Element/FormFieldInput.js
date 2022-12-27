import React from 'react';
import { Box } from '@chemcycled/components';
import { Controller } from 'react-hook-form';
import FormFieldError from './FormFieldError';
import { StyledInput } from './Form.styled';
import { getFieldError } from '../../../utils/formValidation';

const FormInput = ({
  control,
  name,
  defaultValue,
  placeholder,
  transform,
  ...rest
}) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        name={name}
        color={color}
        defaultValue={defaultValue || ''}
        {...rest}
        render={({ field }) => {
          return (
            <StyledInput
              color={error ? 'error' : 'primary'}
              placeholder={placeholder}
              {...field}
              onChange={(evt) => {
                field.onChange(
                  transform ? transform(evt.target.value) : evt.target.value
                );
              }}
            />
          );
        }}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </Box>
  );
};

export default FormInput;

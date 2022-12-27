import React from 'react';

import { Typography } from '@chemcycled/components';
import PropType from 'prop-types';

import { StyleLabel } from './Form.styled';

const FormLabel = ({ htmlFor, mb = 0.5, required, ...rest }) => {
  return (
    <StyleLabel htmlFor={htmlFor}>
      <Typography
        d='block'
        mb={mb}
        type='body'
        size='xsmall'
        weight='semibold'
        {...rest}
      />
      {required && (
        <Typography type='span' size='small' color='red'>
          *
        </Typography>
      )}
    </StyleLabel>
  );
};

FormLabel.propTypes = {
  htmlFor: PropType.string,
  required: PropType.bool,
};

FormLabel.defaultProps = {
  htmlFor: '',
  required: false,
};

export default FormLabel;

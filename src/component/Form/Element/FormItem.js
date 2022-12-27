import React from 'react';

import { Box } from '@chemcycled/components';

const FormItem = ({ children, ...rest }) => <Box {...rest}>{children}</Box>;

export default FormItem;

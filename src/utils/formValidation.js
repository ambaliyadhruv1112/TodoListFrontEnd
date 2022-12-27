import lodashGet from 'lodash/get';
import { VALIDATION_MESSAGES } from '../constants/message';

export const getFieldError = ({ error, errors, name }) => {
  console.log(error, errors, name);
  const newError =
    (error && error.message) ||
    (errors && lodashGet(errors, name) && lodashGet(errors, name).message);
  const color = newError && 'error';

  return { error: newError, color };
};

export const ValidateChemicalName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.CHEMICAL_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.CHEMICAL_NAME.MAX_LENGTH,
  },
};

export const ValidateCINNumber = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.CIN_NUMBER.EMPTY,
  },
};
export const ValidateSmell = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.PRODUCT_SMELL.EMPTY,
  },
};

export const ValidateSellerName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SELLER_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.SELLER_NAME.MAX_LENGTH,
  },
};

export const ValidateSellerAddress = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SELLER_ADDRESS.EMPTY,
  },
};

export const ValidateEmailAddress = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.EMAIL.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.EMAIL.INVALID,
  },
};

import lodashGet from 'lodash/get';
import { VALIDATION_MESSAGES } from '../constants/message';
import {
  CHEMICAL_NAME_PATTERNS,
  CIN_NUMBER_PATTERNS,
  EMAIL_PATTERNS,
  SELLER_NAME_PATTERNS,
} from './patterns';

export const ValidationAggregrator = (value, patterns, message) => {
  const error = patterns
    .map((e) => {
      return e.test(value) ? true : message;
    })
    .filter((e) => e !== true);
  return error.length === 0 || error[0];
};

export const getFieldError = ({ error, errors, name }) => {
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
  validate: (value) => {
    return ValidationAggregrator(
      value,
      [CHEMICAL_NAME_PATTERNS],
      VALIDATION_MESSAGES.CHEMICAL_NAME.INVALID
    );
  },
};

export const ValidateCINNumber = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.CIN_NUMBER.EMPTY,
  },
  validate: (value) => {
    return ValidationAggregrator(
      value,
      [CIN_NUMBER_PATTERNS],
      VALIDATION_MESSAGES.CIN_NUMBER.INVALID
    );
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
  validate: (value) => {
    return ValidationAggregrator(
      value,
      [SELLER_NAME_PATTERNS],
      VALIDATION_MESSAGES.SELLER_NAME.INVALID
    );
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
  validate: (value) => {
    return ValidationAggregrator(
      value,
      [EMAIL_PATTERNS],
      VALIDATION_MESSAGES.EMAIL.INVALID
    );
  },
};

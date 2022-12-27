export const VALIDATION_MESSAGES = {
  CHEMICAL_NAME: {
    EMPTY: 'Chemical name required',
    INVALID: 'Chemical name can contain only alpha numeric characters.',
    MAX_LENGTH: 'Chemical name cannot exceed 50 characters.',
  },
  CIN_NUMBER: {
    EMPTY: `CIN is required.`,
    INVALID: `Please enter a valid CIN number.`,
    MIN_LENGTH: `CIN must be 21 characters.`,
    MAX_LENGTH: `CIN must be 21 characters.`,
  },
  PRODUCT_SMELL: {
    EMPTY: 'Smell choice is required',
  },
  SELLER_NAME: {
    EMPTY: `Seller name is required.`,
    INVALID: `Seller name can contain only alpha numeric characters.`,
    MAX_LENGTH: `Seller name cannot exceed 50 characters.`,
  },
  EMAIL: {
    EMPTY: 'Email ID is required.',
    INVALID: 'Please enter valid Email ID.',
  },
  SELLER_ADDRESS: {
    EMPTY: `Seller address is required.`,
    INVALID: `Address can only have an alpha numeric value with only hyphen allowed as a special character.`,
    MAX_LENGTH: `Address can contain upto maximum 250 characters only.`,
  },
};

export const CHEMICAL_NAME_PATTERNS = /^[a-zA-Z0-9+()]{1,256}$/;

export const CIN_NUMBER_PATTERNS = /^([0-9]{2,7})-([0-9]{2})-[0-9]$/;

export const SELLER_NAME_PATTERNS = /^[\d\w ]+$/;

export const EMAIL_PATTERNS =
  /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

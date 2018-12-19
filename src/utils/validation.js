import { empty, letters, email, phone } from './messages';
import { nameRegex, emailRegex, phoneRegex } from './regex';

const defaultValidate = (fieldName, value, regex, fn) => {
  if (!value || !value.length) {
    return empty(fieldName);
  } else if (!value.match(regex)) {
    return fn(fieldName);
  }
  return null;
}

export const nameValidate = (...args) => defaultValidate(...args, nameRegex, letters);
export const emailValidate = (...args) => defaultValidate(...args, emailRegex, email);
export const phoneValidate = (fieldName, value) => {
  const nums = (value.match(/\d/g) || []);
  if (!value || !value.length) {
    return empty(fieldName);
  } else if (!value.match(phoneRegex) && nums.length !== 10 && nums.length !== 11) {
    return phone(fieldName);
  }
  return null;
}
export const emptyValidate = (fieldName, value) => {
  if (!value) {
    return empty(fieldName);
  }
  return null;
}

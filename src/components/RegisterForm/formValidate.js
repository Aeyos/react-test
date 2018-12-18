import { nameValidate, emailValidate, phoneValidate } from '../../utils/validation';

export default (values) => {
  const errors = {};

  errors.name = nameValidate('Nome' ,values.name);
  errors.surname = nameValidate('Sobrenome' ,values.surname);
  errors.email = emailValidate('E-mail', values.email);
  errors.phone = phoneValidate('Telefone', values.phone);

  return errors;
};

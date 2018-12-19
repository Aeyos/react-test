import { nameValidate, emailValidate, phoneValidate, emptyValidate } from '../../utils/validation';

export default (values) => {
  const errors = {};

  console.log('values', values)

  errors.name = nameValidate('Nome' ,values.name);
  errors.surname = nameValidate('Sobrenome' ,values.surname);
  errors.email = emailValidate('E-mail', values.email);
  errors.phone = phoneValidate('Telefone', values.phone);

  errors.country = emptyValidate('País', values.country);
  errors.state = emptyValidate('Estado', values.state);
  errors.address_type = emptyValidate('Tipo de endereço', values.address_type);
  errors.address = emptyValidate('Endereço', values.address);
  errors.interests = emptyValidate('Interesses', values.interests);

  return errors;
};

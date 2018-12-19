import { nameValidate, emailValidate, phoneValidate, emptyValidate } from '../../utils/validation';

export default (values) => {
  return [
    { name: 'name', result: nameValidate('Nome' ,values.name) },
    { name: 'surname', result: nameValidate('Sobrenome' ,values.surname) },
    { name: 'email', result: emailValidate('E-mail', values.email) },
    { name: 'phone', result: phoneValidate('Telefone', values.phone) },
    { name: 'country', result: emptyValidate('País', values.country) },
    { name: 'state', result: emptyValidate('Estado', values.state) },
    { name: 'address_type', result: emptyValidate('Tipo de endereço', values.address_type) },
    { name: 'address', result: emptyValidate('Endereço', values.address) },
    { name: 'interests', result: emptyValidate('Interesses', values.interests) },
  ].reduce((a, v) => v.result ? { ...a, [v.name]: v.result } : a, {});
};

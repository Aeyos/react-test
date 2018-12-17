import React from 'react';

import AgeRange from '../AgeRange';
import Input from '../Input';

export default [{
  label: 'Nome',
  fields: [{
    name: 'name',
    placeholder: 'Primeiro Nome',
    component: Input
  }, {
    name: 'surname',
    placeholder: 'Sobrenome',
    component: Input
  }, {
    name: ''
  }],
}, {
  label: 'Idade',
  fields: [{ name: 'age', component: AgeRange, labels: ['13-19', '20-29', '30-45', '45 ou acima'] }],
}, {
  label: 'E-mail',
  fields: [{ name: 'email', placeholder: 'email@exemplo.com', type: 'email', component: Input }],
}, {
  label: 'Telefone',
  fields: [{ name: 'phone', placeholder: '(41) 99999-999', type: 'phone', component: Input }],
}, {
  label: 'País',
  fields: [{ name: 'country', component: (field) => (<div key={field.name}>Select Country</div>) }],
}, {
  label: 'Estado',
  fields: [{ name: 'state', component: (field) => (<div key={field.name}>Select State</div>) }],
}, {
  label: 'Tipo de Endereço',
  fields: [{ name: 'address_type', component: (field) => (<div key={field.name}>Select Address</div>) }],
}, {
  label: 'Endereço',
  fields: [{ name: 'address', component: (field) => (<div key={field.name}>Select Address</div>) }],
  disabled: (val) => Boolean(val),
}, {
  label: 'Interesse',
  fields: [{ name: 'interests', component: (field) => (<div key={field.name}>Interests Field</div>) }],
}, {
  label: '',
  fields: [{ name: 'receive_messages', component: (field) => (<div key={field.name}>Checkbox</div>) }],
}];

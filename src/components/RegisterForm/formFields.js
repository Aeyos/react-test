import React from 'react';

export default [{
  label: 'Nome',
  fields: [{
    name: 'name',
    placeholder: 'Primeiro Nome'
  }, {
    name: 'surname',
    placeholder: 'Sobrenome'
  }, {
    name: ''
  }],
}, {
  label: 'Idade',
  fields: [{ name: 'age', component: (field) => (<div key={field.name}>Age Range Field</div>) }],
}, {
  label: 'E-mail',
  fields: [{ name: 'email', placeholder: 'email@exemplo.com', type: 'email' }],
}, {
  label: 'Telefone',
  fields: [{ name: 'phone', placeholder: '(41) 99999-999', type: 'phone' }],
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

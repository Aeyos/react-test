import AgeRange from '../AgeRange';
import Input, { PhoneInput } from '../Input';
import Select from '../Select';
import { Countries, States } from '../../data';
import Tagger from '../Tagger';
import Checkbox from '../Checkbox';

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
  fields: [{ name: 'phone', placeholder: '(41) 99999-999', type: 'phone', component: PhoneInput }],
}, {
  label: 'País',
  fields: [{ name: 'country', placeholder: 'Procure o país', component: Select, data: Countries }],
}, {
  label: 'Estado',
  fields: [{ name: 'state', placeholder: 'Procure o estado', component: Select, data: States }],
}, {
  label: 'Tipo de Endereço',
  fields: [{ name: 'address_type', placeholder: 'Selecione o tipo', component: Select, data: [{ label: 'Empresa' }, { label: 'Casa'}] }],
}, {
  label: 'Endereço',
  fields: [{ name: 'address', placeholder: 'R. Exemplo, 123, Complemento A', component: Input, dependsOn: 'address_type' }],
}, {
  label: 'Interesse',
  fields: [{ name: 'interests', placeholder: 'Adicione os interesses', component: Tagger }],
}, {
  label: '',
  fields: [{ name: 'receive_messages', label: 'Desejo receber novidadaes.', component: Checkbox }],
}];

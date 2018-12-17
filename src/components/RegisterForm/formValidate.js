const nameRegex = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/;
//                 |  A-z   Latin characters                       Space |

export default (values) => {
  const errors = {};

  errors.name = values.name.match(nameRegex) ? false : 'Nome em branco';
  errors.name = values.name.match(nameRegex) ? false : 'Nome em branco';
  errors.surname = 'sobre o nome em branco';

  return errors;
};

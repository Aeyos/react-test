import React from 'react';

import { InputText } from '../Styled';

export default ({ field, form, ...def }) => (
  <InputText {...field} {...def} data-has-content={field.value && field.value.length > 0} />
);

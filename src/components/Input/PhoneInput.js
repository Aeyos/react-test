import React from 'react';

import { phoneFormat } from '../../utils/format';

import Input from './index';

class PhoneInput extends React.Component {
  _blur = (evt) => {
    this.props.form.setFieldValue(this.props.field.name, phoneFormat(evt.target.value));
    this.props.field.onBlur.call(undefined, evt);
  }

  render() {
    return (
      <Input {...this.props} type="phone" onBlur={this._blur} onFocus={this.hue} />
    );
  }
}

export default PhoneInput;

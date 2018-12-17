import React from 'react';

import CenterButton from '../CenterButton';
import RegisterForm from '../RegisterForm';

class Register extends React.Component {
  state = { step: 0 }

  _nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  render() {
    if (this.state.step === 0) {
      return (<CenterButton onClick={this._nextStep}>Cadastro</CenterButton>);
    } else if (this.state.step === 1) {
      return (<RegisterForm />);
    }

    return (<div>Error: uknown state {this.state.step}</div>);
  }
}

export default Register;

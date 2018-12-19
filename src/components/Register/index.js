import React from 'react';

import CenterButton from '../CenterButton';
import RegisterForm from '../RegisterForm';
import Profile from '../Profile';
import FullPageLoader from '../FullPageLoader';

import Api from '../../utils/Api';
import Feedback from '../Feedback';
import { CenterContent, PageSize, Button, Content } from '../Styled';

class Register extends React.Component {
  state = { step: 0, values: null }

  goTo(step) {
    this.setState({ step });
  }

  _nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  _submit = (values) => {
    console.log('values', values)
    this.setState({ step: this.state.step + 1, values });
  }

  _confirm = () => {
    this.setState({ step: this.state.step + 1 });
    Api.saveProfile(this.state.values)
      .then((status) => {
        if (status) {
          this.goTo('success');
        } else {
          this.goTo('error');
        }
      });
  }

  renderMessage(type, str) {
    return (
      <PageSize>
        <Content>
          <CenterContent x="true" y="true">
            <Feedback show type={type}>
              {str}
              &nbsp;
              <Button onClick={() => this.goTo(2)}>Tente novamente</Button>
            </Feedback>
          </CenterContent>
        </Content>
      </PageSize>
    );
  }

  render() {
    if (this.state.step === 0) {
      return (<CenterButton onClick={this._nextStep}>Cadastro</CenterButton>);
    } else if (this.state.step === 1) {
      return (<RegisterForm onSubmit={this._submit} previousData={this.state.values || {}} />);
    } else if (this.state.step === 2) {
      return (<Profile data={this.state.values} onConfirm={this._confirm} onEdit={() => this.goTo(1)} />);
    } else if (this.state.step === 3) {
      return (<FullPageLoader />);
    } else if (this.state.step === 'success') {
      return this.renderMessage('Success' ,'Succeso! Seus dados foram gravados.');
    } else if (this.state.step === 'error') {
      return this.renderMessage('Error' ,'Algo de errado aconteceu ao enviar seus dados.');
    }

    return (<div>Error: uknown state {this.state.step}</div>);
  }
}

export default Register;

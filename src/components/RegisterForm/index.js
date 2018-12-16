import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Content, Errors, Flex, FormWrapper, Label, Group, RoundedImage, Row, Title,RangeField } from '../Styled';
import logo from '../../logo.svg';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import validate from './formValidate';
import form from './formFields';

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.formik = {
      validate,
      initialValues: {},
      onSubmit: this._onSubmit
    }
  }

  getField(field, index) {
    console.log('field', field)
    if (typeof field.component === 'function') {
      return field.component(field);
    } else if (!field.name) {
      return (<div key={index}></div>);
    }
    return (<Field {...field}></Field>);
  }

  getFormFields() {
    return form.map(entry => (
      <Row key={entry.label} data-label={entry.label}>
        <Label>{entry.label}</Label>
        <Group count={entry.fields.length}>
          {entry.fields.map(this.getField)}
        </Group>
        <Errors>
          {entry.fields.filter(f => f.name).map(field => (
            <ErrorMessage key={field.name} name={field.name} component="div" />
          ))}
        </Errors>
      </Row>
    ));
  }

  _onSubmit = (values, meta) => {
    console.log('values', values);
    console.log('meta', meta);
  }

  render() {
    return (
      <Content>
        <RangeField type="range" />
        <Flex height="100%">
          <LeftColumn>
            <RoundedImage src={logo} size="150px" />
          </LeftColumn>
          <RightColumn>
            <Title>Cadastro de perfil</Title>
            <Formik
              {...this.formik}
            >
              {({ isSubmitting }) => (
                <FormWrapper labelColSize="200px">
                  <Form>
                    {this.getFormFields()}
                    <div>
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </div>
                  </Form>
                </FormWrapper>
              )}
            </Formik>
          </RightColumn>
        </Flex>
      </Content>
    );
  }
}

export default RegisterForm;

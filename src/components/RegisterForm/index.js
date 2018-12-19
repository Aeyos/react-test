import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Content, Flex, FormWrapper, Label, Group, RoundedImage, Row, Title } from '../Styled';
import Feedback from '../Feedback';
import logo from '../../logo.svg';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import validate from './formValidate';
import form from './formFields';
import initialValues from './formInitialValues';

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.formik = {
      validate,
      initialValues: { ...this.getInitialValues(), ...initialValues },
      onSubmit: this._onSubmit
    }
  }

  getInitialValues() {
    return form
      .reduce((a, v) => [...a, ...(v.fields.map(e => e.name))], [])
      .reduce((a, v) => ({ ...a, [v]: '' }), {});
  }

  getField(field, index, values) {
    let disabled = false;
    if (!field.name) {
      return (<div key={index}></div>);
    } else if (field.dependsOn && !values[field.dependsOn]) {
      disabled = true;
    }
    return (<Field key={field.name} disabled={disabled} {...field}></Field>);
  }

  getFormFields(errors, touched, values) {
    return form.map(entry => (
      <Row key={entry.label} data-label={entry.label}>
        <Label>{entry.label}</Label>
        <Group count={entry.fields.length}>
          {entry.fields.map((e, i) => this.getField(e, i, values))}
        </Group>
        {entry.fields.filter(f => f.name).map(field => (
          <Feedback key={field.name} show={errors[field.name] && touched[field.name]} type="Error">
            <ErrorMessage name={field.name} component="div" />
          </Feedback>
        ))}
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
        <Flex height="100%">
          <LeftColumn>
            <RoundedImage src={logo} size="150px" />
            <span style={{color:'yellow'}}>UPLOAD DE IMAGEM</span>
          </LeftColumn>
          <RightColumn>
            <Title>Cadastro de perfil</Title>
            <Formik
              {...this.formik}
            >
              {({ values, isSubmitting, errors, touched }) => (
                <FormWrapper labelColSize="150px">
                  <Form>
                    {this.getFormFields(errors, touched, values)}
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

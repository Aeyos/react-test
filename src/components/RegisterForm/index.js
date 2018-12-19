import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Content, Flex, FormWrapper, Label, Group, Row, Title } from '../Styled';
import Feedback from '../Feedback';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import ImageUpload from '../ImageUpload';
import SendButton from './SendButton';
import validate from './formValidate';
import form from './formFields';
import initialValues from './formInitialValues';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.formik = {
      validate,
      initialValues: { ...this.getInitialValues(), ...initialValues, ...props.previousData },
      onSubmit: props.onSubmit
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

  render() {
    return (
      <Content>
        <Formik
          {...this.formik}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Flex height="100%">
              <LeftColumn>
                <Field component={ImageUpload} name="profile_picture" />
              </LeftColumn>
              <RightColumn>
                <Title>Cadastro de perfil</Title>
                <FormWrapper labelColSize="150px">
                  <Form>
                    {this.getFormFields(errors, touched, values)}
                    <SendButton type="submit" offset="150px">Confirmar</SendButton>
                  </Form>
                </FormWrapper>
              </RightColumn>
            </Flex>
          )}
        </Formik>
      </Content>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  previousData: PropTypes.object,
};

export default RegisterForm;

import React, { useRef, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

import LoadingIndicator from 'components/atoms/LoadingIndicator/LoadingIndicator';
import FormField from 'components/molecules/FormField/FormField';
import { FormWrapper, SubmitButton } from 'components/organisms/Form/Form.styles';

const Form = ({ setAlerts, setAlertsVisible, setErrors, setErrorsVisible, formData }) => {
  const initialFormState = {
    service: formData.services[0].fields.title,
    fullName: '',
    phoneNum: '',
    mail: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(initialFormState);

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    const fullNameRegex = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+ [a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ-]+\s?([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ-]+)?$/;
    const phoneNumRegex = /^[0-9]*$/;
    const mailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const errors = [];

    if (!fullNameRegex.test(formValues.fullName)) {
      errors.push('Należy wpisać pełne imię oraz nazwisko.');
    }
    if (!phoneNumRegex.test(formValues.phoneNum) || formValues.phoneNum.length !== 9) {
      errors.push('Należy wpisać poprawny numer telefonu.');
    }
    if (formValues.mail.length) {
      if (!mailRegex.test(formValues.mail)) {
        errors.push('Należy wpisać poprawny adres e-mail.');
      }
    }
    if (!formValues.message.length) {
      errors.push('Należy wpisać treść wiadomości.');
    }

    setErrors(errors);
    setAlerts([]);

    if (errors.length === 0) {
      setIsLoading(true);

      emailjs.sendForm('MainMail', 'Entries', formRef.current, 'K7-ALd9R6IurA7Qtr').then(
        (result) => {
          // console.log(result.text);

          setIsLoading(false);

          setFormValues(initialFormState);
          setAlerts(['Wiadomość została wysłana.']);
          setAlertsVisible(true);
          setTimeout(() => {
            setAlertsVisible(false);
          }, 4000);
        },
        (error) => {
          // console.log(error.text);

          setIsLoading(false);

          setErrors([error.text]);

          setErrorsVisible(true);
          setTimeout(() => {
            setErrorsVisible(false);
          }, 4000);
        }
      );
    } else {
      setErrorsVisible(true);
      setTimeout(() => {
        setErrorsVisible(false);
      }, 4000);
    }
  };

  return (
    <FormWrapper ref={formRef}>
      <FormField
        labelText="W czym potrzebujesz pomocy?"
        type="select"
        name="service"
        value={formValues.service ?? ''}
        onChange={(e) => setFormValues({ ...formValues, service: e.target.value })}
        formData={formData}
      />
      <FormField
        labelText="Imię i Nazwisko"
        type="text"
        name="fullName"
        autoComplete="name"
        value={formValues.fullName}
        onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
      />
      <FormField
        labelText="Numer Telefonu"
        type="tel"
        name="phoneNumber"
        autoComplete="tel"
        value={formValues.phoneNum}
        onChange={(e) => setFormValues({ ...formValues, phoneNum: e.target.value })}
      />
      <FormField
        labelText="Adres E-mail"
        type="email"
        name="mail"
        autoComplete="email"
        value={formValues.mail}
        onChange={(e) => setFormValues({ ...formValues, mail: e.target.value })}
        isOptional={true}
      />
      <FormField
        labelText="Wiadomość"
        type="textarea"
        name="message"
        value={formValues.message}
        onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
      />
      {isLoading ? (
        <SubmitButton type="button">
          <LoadingIndicator />
        </SubmitButton>
      ) : (
        <SubmitButton type="submit" onClick={(e) => handleForm(e)}>
          Wyślij
        </SubmitButton>
      )}
    </FormWrapper>
  );
};

Form.propTypes = {
  setAlerts: PropTypes.func.isRequired,
  setAlertsVisible: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  setErrorsVisible: PropTypes.func.isRequired,
};

export default Form;

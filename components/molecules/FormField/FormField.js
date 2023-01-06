import React from 'react';

import PropTypes from 'prop-types';

import { FormFieldWrapper, PhoneInputSpan } from 'components/molecules/FormField/FormField.styles';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import Textarea from 'components/atoms/Textarea/Textarea';
import Select from 'components/atoms/Select/Select';

const FormField = ({ labelText, type, name, autoComplete, value, onChange, formData, isOptional }) => (
  <FormFieldWrapper>
    {name === 'phoneNumber' ? (
      <>
        <Label htmlFor={name}>{labelText}</Label>
        <PhoneInputSpan />
        <Input type={type} name={name} autoComplete={autoComplete} value={value} onChange={onChange} phoneNumberInput="true" />
      </>
    ) : type === 'textarea' ? (
      <>
        <Label htmlFor={name}>{labelText}</Label>
        <Textarea name={name} value={value} onChange={onChange} />
      </>
    ) : type === 'select' ? (
      <>
        <Label htmlFor={name}>{labelText}</Label>
        <Select value={value} name={name} onChange={onChange}>
          {formData.services.map((service, id) => (
            <option value={service.fields.title} key={id}>
              {service.fields.title}
            </option>
          ))}
        </Select>
      </>
    ) : (
      <>
        <Label htmlFor={name}>
          {labelText}
          {isOptional ? <span> (opcjonalnie)</span> : null}
        </Label>
        <Input type={type} name={name} autoComplete={autoComplete} value={value} onChange={onChange} />
      </>
    )}
  </FormFieldWrapper>
);

FormField.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.object,
  isOptional: PropTypes.bool,
};

export default FormField;

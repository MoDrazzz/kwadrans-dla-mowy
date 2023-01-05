import React from 'react';

import PropTypes from 'prop-types';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { AlertWrapper } from 'components/atoms/Alert/Alert.styles';

const Alert = ({ message }) => (
  <AlertWrapper>
    <Paragraph white>{message}</Paragraph>
  </AlertWrapper>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired
}

export default Alert;
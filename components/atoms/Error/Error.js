import React from 'react';

import PropTypes from 'prop-types';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ErrorWrapper } from 'components/atoms/Error/Error.styles';

const Error = ({ message }) => (
  <ErrorWrapper>
    <Paragraph white>{message}</Paragraph>
  </ErrorWrapper>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;
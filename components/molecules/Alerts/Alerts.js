import React from 'react';

import PropTypes from 'prop-types';

import Alert from 'components/atoms/Alert/Alert';
import Error from 'components/atoms/Error/Error';

import { AlertsWrapper } from 'components/molecules/Alerts/Alerts.styles';

const Alerts = ({ visible, errors, alerts }) => (
  <AlertsWrapper visible={visible}>
    {errors.map((message, id) => (
      <Error key={id} message={message} />
    ))}
    {alerts.map((message, id) => (
      <Alert key={id} message={message} />
    ))}
  </AlertsWrapper>
);

Alerts.propTypes = {
  visible: PropTypes.bool.isRequired,
  errors: PropTypes.array,
  alerts: PropTypes.array
}

export default Alerts;
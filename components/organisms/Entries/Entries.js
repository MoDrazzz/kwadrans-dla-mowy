import React, { useState, useEffect } from 'react';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ViewTitle from 'components/molecules/ViewTitle/ViewTitle';
import Alerts from 'components/molecules/Alerts/Alerts';
import Container from 'components/organisms/Container/Container';
import Form from 'components/organisms/Form/Form';

const query = `
{
  entriesScreen(id: "3BASJlpnzTI9n97tZV9oRd") {
    title,
    description
  }
}
`;

const Entries = () => {
  const [errors, setErrors] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [errorsVisible, setErrorsVisible] = useState(false);
  const [alertsVisible, setAlertsVisible] = useState(false);

  return (
    <Container bg="dimmed" id="entries">
      <ViewTitle align="center" section="ZAPISY" title="Umów termin już dziś!" />
      <Paragraph align="center">
        Maecenas volutpat felis ex, sit amet ultrices ipsum ultrices at. Cras non aliquet sapien. Ut ex arcu, malesuada sit amet quam et, pretium
        elementum mi.
      </Paragraph>
      <Form setErrors={setErrors} setAlerts={setAlerts} setErrorsVisible={setErrorsVisible} setAlertsVisible={setAlertsVisible} />
      <Alerts visible={errorsVisible || alertsVisible} errors={errors} alerts={alerts} />
    </Container>
  );
};

export default Entries;

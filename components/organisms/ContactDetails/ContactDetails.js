import React from 'react';

import PropTypes from 'prop-types';

import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import Separator from 'components/atoms/Separator/Separator';
import ContactDetail from 'components/molecules/ContactDetail/ContactDetail';
import { ContactDetailsWrapper } from 'components/organisms/ContactDetails/ContactDetails.styles';

const ContactDetails = ({ data }) => (
  <ContactDetailsWrapper>
    <ContactDetail icon={faPhone} name="Telefon" value={`+48 ${data.phoneNumber}`} href={`tel:+48${data.phoneNumber.replace(/\s+/g, '')}`} />
    <Separator />
    <ContactDetail icon={faLocationDot} name="Lokalizacja" value={data.location} />
    <Separator />
    <ContactDetail icon={faEnvelope} name="Adres E-mail" value={data.mail} href={`mailTo:${data.mail}`} />
  </ContactDetailsWrapper>
);

ContactDetails.propTypes = {
  data: PropTypes.object
}

export default ContactDetails;
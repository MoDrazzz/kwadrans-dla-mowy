import React from 'react';

import PropTypes from 'prop-types';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ContactIcon from 'components/atoms/ContactIcon/ContactIcon';
import { ContactDetailWrapper } from 'components/molecules/ContactDetail/ContactDetail.styles';

const ContactDetail = ({ icon, name, value, href }) => (
  <ContactDetailWrapper>
    <ContactIcon icon={icon} />
    <Paragraph bold="true">{name}</Paragraph>
    <Paragraph>{href ? <a href={href}>{value}</a> : value}</Paragraph>
  </ContactDetailWrapper>
);

ContactDetail.propTypes = {
  icon: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  href: PropTypes.string
}

export default ContactDetail;
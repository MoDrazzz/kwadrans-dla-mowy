import React from 'react';

import Map from 'components/atoms/Map/Map';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ViewTitle from 'components/molecules/ViewTitle/ViewTitle';
import Container from 'components/organisms/Container/Container';
import ContactDetails from 'components/organisms/ContactDetails/ContactDetails';

import { Wrapper } from 'components/organisms/Contact/Contact.styles';

const Contact = ({ contentData }) => (
  <Container id="contact">
    <ViewTitle section="KONTAKT" title={contentData.title} align="center" />
    <Paragraph align="center">{contentData.description}</Paragraph>
    <Wrapper>
      <ContactDetails data={contentData} />
      <Map src={contentData.mapLink} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Map>
    </Wrapper>
  </Container>
);

export default Contact;

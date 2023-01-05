import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import FooterText from 'components/atoms/FooterText/FooterText';
import { Wrapper } from 'components/organisms/Footer/Footer.styles';

import mockFooterData from 'data/mockFooterData';

const query = `
{
  footer(id: "6cQqidVLm5XoS7T90BJ23h") {
    description,
    portfolioLink
  }
}`;

const Footer = () => {
  return (
    <Wrapper bg="primary">
      <FooterText>{mockFooterData.description}</FooterText>
      <FooterText>
        <a href={mockFooterData.portfolioLink} target="_blank" rel="noreferrer">
          Projekt i wykonanie: <span>Grzegorz Pawlik</span> <FontAwesomeIcon icon={faLink} />
        </a>
      </FooterText>
    </Wrapper>
  );
};

export default Footer;

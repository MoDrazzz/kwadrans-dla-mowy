import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import FooterText from 'components/atoms/FooterText/FooterText';
import { Wrapper } from 'components/organisms/Footer/Footer.styles';

const Footer = ({ contentData }) => {
  return (
    <Wrapper bg="primary">
      <FooterText>{contentData.description}</FooterText>
      <FooterText>
        <a href={contentData.portfolioLink} target="_blank" rel="noreferrer">
          Projekt i wykonanie: <span>Grzegorz Pawlik</span> <FontAwesomeIcon icon={faLink} />
        </a>
      </FooterText>
    </Wrapper>
  );
};

export default Footer;

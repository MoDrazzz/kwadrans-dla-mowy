import React from 'react';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PortraitPhoto from 'components/atoms/PortraitPhoto/PortraitPhoto';
import AboutImage from 'components/atoms/AboutImage/AboutImage';
import ViewTitle from 'components/molecules/ViewTitle/ViewTitle';
import AboutContentWrapper from 'components/molecules/AboutContentWrapper/AboutContentWrapper';
import Container from 'components/organisms/Container/Container';

import { Wrapper, AboutButton } from 'components/organisms/About/About.styles';

const About = ({ contentData }) => (
  <Container bg="dimmed" id="about">
    <Wrapper>
      <PortraitPhoto src={contentData.portrait.fields.file.url} alt={contentData.portrait.fields.title} />
      <div>
        <ViewTitle section="O NAS" title={contentData.title} />
        <Paragraph>{contentData.description}</Paragraph>
        <AboutContentWrapper>
          <AboutButton onClick={() => document.getElementById('services').scrollIntoView()}>Dowiedz się więcej</AboutButton>
          <AboutImage src={contentData.image.fields.file.url} alt={contentData.image.fields.title} />
        </AboutContentWrapper>
      </div>
    </Wrapper>
  </Container>
);

export default About;

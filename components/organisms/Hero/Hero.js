import React from 'react';

import DisplayText from 'components/atoms/DisplayText/DisplayText';
import TitleImage from 'components/atoms/TitleImage/TitleImage';
import Container from 'components/organisms/Container/Container';
import { Wrapper, Subtitle, HeroButton } from 'components/organisms/Hero/Hero.styles';

const Hero = ({ contentData }) => (
  <Container bg="primary" id="hero">
    <Wrapper>
      <DisplayText>{contentData.title}</DisplayText>
      <Subtitle white align="center">
        {contentData.description}
      </Subtitle>
      <div>
        <HeroButton onClick={() => document.getElementById('about').scrollIntoView()}>Poznaj Nas Bliżej</HeroButton>
        <HeroButton onClick={() => document.getElementById('contact').scrollIntoView()} special>
          Skontaktuj Się
        </HeroButton>
      </div>
      <TitleImage src={contentData.image.fields.file.url} alt={contentData.image.fields.title} />
    </Wrapper>
  </Container>
);

export default Hero;

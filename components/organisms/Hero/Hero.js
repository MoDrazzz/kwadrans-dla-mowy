import React, { useState, useEffect } from 'react';

import DisplayText from 'components/atoms/DisplayText/DisplayText';
import TitleImage from 'components/atoms/TitleImage/TitleImage';
import Container from 'components/organisms/Container/Container';
import { Wrapper, Subtitle, HeroButton } from 'components/organisms/Hero/Hero.styles';

const query = `
{
	heroScreen(id: "3lKT5zU9uOgXK8eQPQOJo4") {
    title
    description
    image {
      title
      url
    }
  }
}`;

const Hero = () => {
  return (
    <Container bg="primary" id="hero">
      <Wrapper>
        <DisplayText>Najwyższej Jakości Usługi Logopedyczno-Lingwistyczne</DisplayText>
        <Subtitle white align="center">
          Etiam consectetur nunc dui, sed aliquet felis pulvinar nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Subtitle>
        <div>
          <HeroButton onClick={() => document.getElementById('about').scrollIntoView()}>Poznaj Nas Bliżej</HeroButton>
          <HeroButton onClick={() => document.getElementById('contact').scrollIntoView()} special>
            Skontaktuj Się
          </HeroButton>
        </div>
        <TitleImage
          src="https://images.ctfassets.net/b1212y5qc9na/6rlp9QMSwr7bqTuTTzB0ei/2b14d50db46a00ac876cfe3e953853d9/Therapy-1.svg"
          alt="Title Image"
        />
      </Wrapper>
    </Container>
  );
};

export default Hero;

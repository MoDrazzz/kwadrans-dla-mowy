import React from 'react';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PortraitPhoto from 'components/atoms/PortraitPhoto/PortraitPhoto';
import AboutImage from 'components/atoms/AboutImage/AboutImage';
import ViewTitle from 'components/molecules/ViewTitle/ViewTitle';
import AboutContentWrapper from 'components/molecules/AboutContentWrapper/AboutContentWrapper';
import Container from 'components/organisms/Container/Container';

import { Wrapper, AboutButton } from 'components/organisms/About/About.styles';

const query = `
{
  aboutScreen(id: "3D9uTzJzXITl1SYvv3kD54") {
    title
    description
    portrait {
      title
      url
    }
    image {
      title
      url
    }
  }
}`;

const About = () => {
  return (
    <Container bg="dimmed" id="about">
      <Wrapper>
        <PortraitPhoto
          src="https://images.ctfassets.net/b1212y5qc9na/1gAvTTHEoiSpbThslpiMvr/d47a52a88b049cfa672d26f0a9f01ccc/Portrait.jpg"
          alt="Portret"
        />
        <div>
          <ViewTitle section="O NAS" title="Poznaj Kwadrans dla mowy" />
          <Paragraph>
            Maecenas mollis at tellus eget tempus. Duis eu lacinia magna. Nam et tincidunt lectus. Nam eu quam eros. Nullam sodales velit at velit
            mattis posuere. Suspendisse ultricies efficitur eros, in rutrum lorem. Vestibulum mauris libero, vehicula vitae quam sed, porta blandit
            turpis. Orci varius natoque penatibus et magnis dis parturient.
          </Paragraph>
          <AboutContentWrapper>
            <AboutButton onClick={() => document.getElementById('services').scrollIntoView()}>Dowiedz się więcej</AboutButton>
            <AboutImage
              src="https://images.ctfassets.net/b1212y5qc9na/6kRvDFlcKgRn6cpU8tC8Zo/6231ad8cd837b77efe08c09ce18cdcd4/Therapy-2.svg"
              alt="Zdjęcie 2"
            />
          </AboutContentWrapper>
        </div>
      </Wrapper>
    </Container>
  );
};

export default About;

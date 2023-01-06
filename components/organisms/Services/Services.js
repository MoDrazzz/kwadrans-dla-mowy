import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ViewTitle from 'components/molecules/ViewTitle/ViewTitle';
import Container from 'components/organisms/Container/Container';
import Service from 'components/organisms/Service/Service';

import { ServicesWrapper } from 'components/organisms/Services/Services.styles';

const Services = ({ contentData }) => (
  <Container id="services">
    <ViewTitle align="center" section="OFERTA" title={contentData.title} />
    <Paragraph align="center">{contentData.description}</Paragraph>
    <ServicesWrapper>
      {contentData.services.map((service, id) => (
        <Service key={id} serviceData={service} />
      ))}
    </ServicesWrapper>
  </Container>
);

export default Services;

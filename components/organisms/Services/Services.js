import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ViewTitle from 'components/molecules/ViewTitle/ViewTitle';
import Container from 'components/organisms/Container/Container';
import Service from 'components/organisms/Service/Service';

import { ServicesWrapper } from 'components/organisms/Services/Services.styles';

import mockServices from 'data/mockServices';

const query = `
{
	servicesScreen(id: "4Wclkrh0TG8No4AWDKFApk") {
    title
    description
  }
  
  serviceCollection {
    items {
      title,
      description,
      advantages
    }
  }
}
`;

const Services = () => {
  return (
    <Container id="services">
      <ViewTitle align="center" section="OFERTA" title="Zapoznaj się z naszą ofertą" />
      <Paragraph align="center">
        Fusce et tempus neque. Aliquam blandit tortor vitae tortor tempus, eu vehicula lorem egestas. Nulla id efficitur nulla, at lobortis.
      </Paragraph>
      <ServicesWrapper>
        {mockServices.map((service, id) => (
          <Service key={id} serviceData={service} />
        ))}
      </ServicesWrapper>
    </Container>
  );
};

export default Services;

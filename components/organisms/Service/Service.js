import React from 'react';

import PropTypes from 'prop-types';

import Advantage from 'components/atoms/Advantage/Advantage';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ServiceTitle from 'components/atoms/ServiceTitle/ServiceTitle';
import AdvantagesWrapper from 'components/molecules/AdvantagesWrapper/AdvantagesWrapper';

import { ServiceWrapper } from 'components/organisms/Service/Service.styles';

const Service = ({ serviceData: { title, description, advantages } }) => (
  <ServiceWrapper>
    <div>
      <ServiceTitle>{title}</ServiceTitle>
      <Paragraph align="justify">{description}</Paragraph>
    </div>
    <AdvantagesWrapper>
      {advantages.map((advantage, id) => {
        return <Advantage key={id} advantageData={advantage} />
      })}
    </AdvantagesWrapper>
  </ServiceWrapper>
);

Service.propTypes = {
  serviceData: PropTypes.object.isRequired
}

export default Service;
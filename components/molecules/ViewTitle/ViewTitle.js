import React from 'react';

import PropTypes from 'prop-types';

import Title from 'components/atoms/Title/Title';
import Accent from 'components/atoms/Accent/Accent';
import { Wrapper, Section } from 'components/molecules/ViewTitle/ViewTitle.styles';

const ViewTitle = ({ section, title, align }) => (
  <Wrapper align={align}>
    <Section align={align}>{ section }</Section>
    <Title>{ title }</Title>
    <Accent align={align} />
  </Wrapper>
);

ViewTitle.propTypes = {
  section: PropTypes.string.isRequired,
  title: PropTypes.string,
  align: PropTypes.string,
}

export default ViewTitle;
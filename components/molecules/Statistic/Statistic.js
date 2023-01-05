import React from 'react';

import PropTypes from 'prop-types';

import StatisticValue from 'components/atoms/StatisticValue/StatisticValue';
import { StatisticWrapper, StatisticDescription } from './Statistic.styles';

const Statistic = ({ statisticData: { value, description} }) => (
  <StatisticWrapper>
    <StatisticValue>{value}</StatisticValue>
    <StatisticDescription white align="center">{description}</StatisticDescription>
  </StatisticWrapper>
);

Statistic.propTypes = {
  statisticData: PropTypes.object.isRequired
}

export default Statistic;
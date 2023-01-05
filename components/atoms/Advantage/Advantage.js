import React from 'react';

import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { AdvantageWrapper, AdvantageIcon } from 'components/atoms/Advantage/Advantage.styles';

const Advantage = ({ advantageData }) => (
  <AdvantageWrapper><AdvantageIcon size="lg" icon={faCheck} />{advantageData}</AdvantageWrapper>
);

Advantage.propTypes = {
  advantageData: PropTypes.string.isRequired
}

export default Advantage;
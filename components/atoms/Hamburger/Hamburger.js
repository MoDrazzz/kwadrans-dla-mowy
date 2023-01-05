import React from 'react';
import PropTypes from 'prop-types';
import { HamburgerWrapper, HamburgerInner } from 'components/atoms/Hamburger/Hamburger.styles';

const Hamburger = ({ toggleNavigation, navigationActive, headerActive }) => (
  <HamburgerWrapper onClick={toggleNavigation}>
    <HamburgerInner navigationActive={navigationActive} headerActive={headerActive} />
  </HamburgerWrapper>
);

Hamburger.propTypes = {
  toggleNavigation: PropTypes.func.isRequired,
  navigationActive: PropTypes.bool.isRequired,
  headerActive: PropTypes.bool.isRequired
}

export default Hamburger;
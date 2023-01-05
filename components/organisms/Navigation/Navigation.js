import React, { useEffect, useState } from 'react';

import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import NavigationItem from 'components/atoms/NavigationItem/NavigationItem';
import NavigationItems from 'components/molecules/NavigationItems/NavigationItems';
import { NavigationContainer } from 'components/organisms/Navigation/Navigation.styled';

const query = `
{
  logo(id: "18eVE6GmiWFa2v7frTSnD0") {
    logo {
      title,
      url
    }
  }
}`;

const Navigation = () => {
  const [navigationActive, setNavigationActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNavigation = () => {
    setNavigationActive(!navigationActive);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 0 ? setHeaderActive(true) : setHeaderActive(false);
      });
    }, 500);
  });

  return (
    <NavigationContainer headerActive={headerActive}>
      <Logo src="https://images.ctfassets.net/b1212y5qc9na/40KTupdnNiBwRD2PSBtr5h/914a5eb1798ee09c25805c5579b7b1c3/Logo.svg" alt="Logo" />
      <nav>
        <NavigationItems headerActive={headerActive} navigationActive={navigationActive}>
          <NavigationItem headerActive={headerActive}>
            <a tabIndex="1" href="#hero">
              Strona Główna
            </a>
          </NavigationItem>
          <NavigationItem headerActive={headerActive}>
            <a tabIndex="2" href="#about">
              O Nas
            </a>
          </NavigationItem>
          <NavigationItem headerActive={headerActive}>
            <a tabIndex="3" href="#services">
              Oferta
            </a>
          </NavigationItem>
          <NavigationItem headerActive={headerActive}>
            <a tabIndex="4" href="#entries">
              Zapisy
            </a>
          </NavigationItem>
          <NavigationItem headerActive={headerActive}>
            <a tabIndex="5" href="#contact">
              Kontakt
            </a>
          </NavigationItem>
        </NavigationItems>
      </nav>
      <Hamburger toggleNavigation={toggleNavigation} navigationActive={navigationActive} headerActive={headerActive} />
    </NavigationContainer>
  );
};

export default Navigation;

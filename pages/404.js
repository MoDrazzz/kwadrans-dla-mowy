import React from 'react';

import DisplayText from 'components/atoms/DisplayText/DisplayText';

import { Wrapper } from 'components/organisms/LoadingScreen/LoadingScreen.styles';
import Separator from 'components/atoms/Separator/Separator';
import Title from 'components/atoms/Title/Title';

const Custom404 = () => {
  return (
    <Wrapper>
      <DisplayText color="primary">404</DisplayText>
      <Separator />
      <Title color="primary">Nie znaleziono</Title>
    </Wrapper>
  );
};

export default Custom404;

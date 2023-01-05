import React from 'react';

import { useIsFetching } from '@tanstack/react-query';

import DisplayText from 'components/atoms/DisplayText/DisplayText';
import LoadingIndicator from 'components/atoms/LoadingIndicator/LoadingIndicator';

import { Wrapper } from 'components/organisms/LoadingScreen/LoadingScreen.styles';
import Separator from 'components/atoms/Separator/Separator';

const LoadingScreen = () => {
  return (
    <Wrapper>
      <DisplayText color="primary">Trwa ładowanie, proszę czekać...</DisplayText>
      <Separator />
      <LoadingIndicator color="primary" />
    </Wrapper>
  )
}

export default LoadingScreen;
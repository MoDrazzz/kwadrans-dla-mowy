import React from 'react';

import PropTypes from 'prop-types';

import { ImageWrapper, Image } from 'components/atoms/TitleImage/TitleImage.styles';

const TitleImage = ({src, alt}) => (
  <ImageWrapper>
    <Image src={src} alt={alt} />
  </ImageWrapper>
);

TitleImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default TitleImage;
import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;

  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    height: 35vw;
  }
  @media (min-width: 992px) {
    height: 27vw;
  }

  @media (min-width: 1200px) {
    height: 21vw;
  }
`;

export const Image = styled.img`
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 70vw;
  }

  @media (min-width: 992px) {
    max-width: 55vw;
  }

  @media (min-width: 1200px) {
    max-width: 45vw;
  }
`;
import styled from "styled-components";

const AboutImage = styled.img`
  margin-top: 15px;
  max-height: 150px;
  justify-self: end;

  @media (min-width: 576px) {
    max-height: 200px;
  }

  @media (min-width: 992px) {
    margin-top: 25px;
    max-height: 240px;
  }

  @media (min-width: 1200px) {
    max-height: 300px;
  }
`;

export default AboutImage;
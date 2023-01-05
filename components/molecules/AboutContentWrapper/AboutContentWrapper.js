import styled from "styled-components";

const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 5px;

  @media (min-width: 576px) {
    grid-template-columns: min-content 1fr;
  }
`;

export default AboutContentWrapper;
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdvantageWrapper = styled(Paragraph)`
  margin-top: 5px;

  @media (min-width: 992px) {
    margin-top: 10px;
  }
`;

export const AdvantageIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.green};
  margin-right: 10px;
`;
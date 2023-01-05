import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcon = styled(FontAwesomeIcon)`
grid-area: icon;
height: 100%;
max-width: 25px;
max-height: 25px;
justify-self: center;
color: ${({ theme }) => theme.colors.primary};

@media (min-width: 576px) {
  max-width: 30px;
  max-height: 30px;
}

@media (min-width: 768px) {
  max-width: 35px;
  max-height: 35px;
}

@media (min-width: 992px) {
  max-width: 40px;
  max-height: 40px;
}

@media (min-width: 1200px) {
  max-width: 45px;
  max-height: 45px;
}
`;

export default ContactIcon;
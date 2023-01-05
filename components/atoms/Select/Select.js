import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.fontSize[100]};
  padding-left: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 992px) {
    height: 45px;
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
    height: 50px;
  }
`;

export default Select;
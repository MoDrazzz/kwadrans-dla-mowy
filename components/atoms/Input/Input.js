import styled from "styled-components";

const Input = styled.input`
  width: ${({ phoneNumberInput }) => phoneNumberInput ? "calc(100% - 40px)" : "100%"};
  height: 40px;
  border-radius: ${({ phoneNumberInput }) => phoneNumberInput ? "0 10px 10px 0" : "10px"};
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.fontSize[100]};
  padding-left: 10px;
  ${({ phoneNumberInput }) => phoneNumberInput ? "margin-left: 40px;" : null}

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 992px) {
    height: 45px;
    ${({ phoneNumberInput }) => phoneNumberInput ? "margin-left: 45px;" : null}
    ${({ phoneNumberInput }) => phoneNumberInput ? "width: calc(100% - 45px);" : null}
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
    height: 50px;
    ${({ phoneNumberInput }) => phoneNumberInput ? "margin-left: 50px;" : null}
    ${({ phoneNumberInput }) => phoneNumberInput ? "width: calc(100% - 50px);" : null}
  }
`;

export default Input;
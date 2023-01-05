import styled from 'styled-components';

export const FormFieldWrapper = styled.div`
  width: 100%;
  &:nth-child(1) {
    grid-area: input1;
  }
  &:nth-child(2) {
    grid-area: input2;
  }
  &:nth-child(3) {
    grid-area: input3;
  }
  &:nth-child(4) {
    grid-area: input4;
  }
  &:nth-child(5) {
    grid-area: textarea;
  }
`;

export const PhoneInputSpan = styled.span`
  position: relative;
  display: block;

  &::after {
    content: '+48';
    text-align: center;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.lightGray};
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.dimmedWhite};
    width: 40px;
    border-radius: 10px 0 0 10px;
    font-size: ${({ theme }) => theme.fontSize[100]};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize[200]};
    }
    @media (min-width: 992px) {
      width: 45px;
      line-height: 45px;
    }
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.fontSize[300]};
      width: 50px;
      line-height: 50px;
    }
  }
`;
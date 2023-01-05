import styled from "styled-components";

export const ServiceWrapper = styled.div`
  border: 4px solid ${({ theme}) => theme.colors.dimmedWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child {
    border-radius: 10px 10px 0 0;
    border-bottom-width: 2px;
  }
  &:nth-child(2) {
    border-top-width: 2px;
    border-radius: 0 0 10px 10px;
  }
  &:only-child {
    border-width: 4px;
    border-radius: 10px;
  }

  padding: 15px;

  @media (min-width: 576px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    &:first-child {
      border-radius: 10px 0 0 10px;
      border-right-width: 2px;
      border-bottom-width: 4px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
      border-left-width: 2px;
      border-top-width: 4px;
    }
    &:only-child {
      border-radius: 10px;
      border-width: 4px;
    }
    padding: 15px;
  }

  @media (min-width: 992px) {
    padding: 25px;
  }

  @media (min-width: 1200px) {
    padding: 35px;
  }
`;
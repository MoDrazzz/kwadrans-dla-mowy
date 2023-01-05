import styled from 'styled-components';

const NavigationItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSize[100]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &:not(:last-child) {
    margin-right: 40px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme, headerActive }) => headerActive ? theme.colors.primary : theme.colors.white};
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: transform .2s ease-in-out;
  }

  @media (min-width: 576px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 768px) {
    color: ${({ theme, headerActive }) => headerActive ? theme.colors.primary : theme.colors.white};

    @media (hover: hover) {
      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
  @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.fontSize[200]};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize[300]};
  }
`;

export default NavigationItem;
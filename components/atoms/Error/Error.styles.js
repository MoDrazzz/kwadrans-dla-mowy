import styled from "styled-components";
import { AlertWrapper } from 'components/atoms/Alert/Alert.styles'

export const ErrorWrapper = styled(AlertWrapper)`
  background-color: ${({ theme }) => theme.colors.red};
`;
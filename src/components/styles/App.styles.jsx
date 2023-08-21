import styled from 'styled-components';

export const MainPage = styled.div`
  margin: 40px auto;
  padding: 16px;
  width: ${({ theme }) => theme.spacing(200)};
  background-color: rgba(253, 253, 253, 0.862);
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;

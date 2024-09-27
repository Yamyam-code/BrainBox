import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  const login = false;

  return (
    <Container>
      <Logo to={'/'}>생각창고</Logo>
      <Logo to={'/Auth'}>{login ? <FiLogOut /> : <FiLogIn />}</Logo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2%;

  font-size: ${theme.fontSizes.large};

  background-color: ${theme.colors.background};

  user-select: none;

  z-index: 1;
`;

const Logo = styled(Link)`
  padding: 0.5% 0;

  font-weight: 700;

  color: ${theme.colors.text};

  cursor: pointer;
`;

export default Header;

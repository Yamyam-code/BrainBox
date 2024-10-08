import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  const [loginLink, setLoginLink] = useState('/');
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      setLoginLink('/');
    } else {
      setLoginLink('/auth?type=login');
    }
  }, [user]);

  function logout() {
    if (user) {
      localStorage.removeItem('user');
      location.reload();
    }
  }

  return (
    <Container>
      <Logo to={'/'}>생각창고</Logo>
      <Logo to={loginLink} onClick={logout}>
        {loginLink === '/' ? <FiLogOut /> : <FiLogIn />}
      </Logo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 60px;

  padding: 0 2%;

  font-size: ${theme.fontSizes.large};

  background-color: ${theme.colors.background};

  user-select: none;

  z-index: 1;
`;

const Logo = styled(Link)`
  padding: 2% 0;

  font-weight: 700;

  color: ${theme.colors.text};

  cursor: pointer;
`;

export default Header;

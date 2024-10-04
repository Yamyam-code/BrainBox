import AuthForm from '@/components/Auth/AuthForm';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [searchParams]);

  function switchQuery() {
    if (isLogin) {
      searchParams.set('type', 'register');
      setSearchParams(searchParams);
    } else {
      searchParams.set('type', 'login');
      setSearchParams(searchParams);
    }
  }

  return (
    <Container>
      <AuthForm type={isLogin} />
      <FormChanger onClick={switchQuery}>
        {isLogin ? '회원가입' : '로그인'}을 하시려면 여기를 클릭해주세요
      </FormChanger>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  gap: 16px;
`;

const FormChanger = styled.p`
  color: ${theme.colors.text};

  user-select: none;

  cursor: pointer;
`;
export default Auth;

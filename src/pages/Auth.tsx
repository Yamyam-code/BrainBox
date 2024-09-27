import AuthForm from '@/components/Auth/AuthForm';
// import AuthFormChanger from '@/components/AuthFormChanger';
import styled from '@emotion/styled';
import { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      {/* <AuthFormChanger isLogin={isLogin} setIsLogin={setIsLogin} /> */}
      <AuthForm type={isLogin} />
      <FormChanger
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
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
  user-select: none;

  cursor: pointer;
`;
export default Auth;

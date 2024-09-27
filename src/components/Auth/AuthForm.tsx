import theme from '@/styles/theme';
import styled from '@emotion/styled';
import BigText from './BigText';
import AuthInputBox from './AuthInputBox';

interface Props {
  type: boolean;
}

function AuthForm({ type }: Props) {
  return (
    <Container>
      {type ? (
        <BigText label='로그인' color={theme.colors.textBlack} height='100px' />
      ) : (
        <BigText
          label='회원가입'
          color={theme.colors.textBlack}
          height='100px'
        />
      )}
      <InputForm>
        {!type && (
          <AuthInputBox header='이름' info='영어 소문자 및 숫자 가능합니다.' />
        )}
        <AuthInputBox header='이메일' info='영어 소문자 및 숫자 가능합니다.' />
        <AuthInputBox
          header='비밀번호'
          info='영어 대소문자 및 숫자 가능합니다.'
          type='password'
        />
      </InputForm>
      <SubmitBtn>{type ? '로그인' : '회원가입'}</SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 450px;
  max-width: 90%;
  min-height: 550px;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.textBlack};

  border-radius: 15px;
  box-shadow: ${theme.boxShadow.normal};
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex: 1;

  width: 100%;
`;

const SubmitBtn = styled.button`
  width: 6em;
  height: 3.75em;

  background-color: ${theme.colors.secondo};
  color: ${theme.colors.text};

  margin: 30px 0;

  border: none;
  border-radius: 10px;

  font-size: 0.8rem;
  font-weight: 700;

  box-shadow: ${theme.boxShadow.button};

  transition: ${theme.transition.button};

  :hover {
    scale: ${theme.scale.btnHover};
  }

  :active {
    scale: ${theme.scale.btnActive};
  }
`;

export default AuthForm;

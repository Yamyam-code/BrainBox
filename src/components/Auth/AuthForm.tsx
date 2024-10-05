import theme from '@/styles/theme';
import styled from '@emotion/styled';
import BigText from './BigText';
import AuthInputBox from './AuthInputBox';
import { signIn, signUp } from '@/utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthForm } from '@/hooks/useAuthForm';

interface Props {
  isLogin: boolean;
}

function AuthForm({ isLogin }: Props) {
  const { form, handleChange, errors, duplicates, validate, handleDuplicate } =
    useAuthForm(isLogin);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!validate()) {
      alert('잘 입력했는지 확인해주세요');
      return;
    }

    if (!isLogin) {
      if (!duplicates.닉네임 || !duplicates.이메일) {
        alert('닉네임 또는 이메일 중복확인을 해주세요');
        return;
      }
    }

    if (isLogin) {
      const success = await signIn(form.email, form.password);
      if (success) {
        navigate('/');
        location.reload();
      }
    } else {
      const success = await signUp(form.email, form.password, form.nickname);
      if (success) {
        navigate('/auth?type=login');
      }
    }
  };

  return (
    <Container>
      {isLogin ? (
        <BigText label='로그인' color={theme.colors.textBlack} height='100px' />
      ) : (
        <BigText
          label='회원가입'
          color={theme.colors.textBlack}
          height='100px'
        />
      )}
      <InputForm>
        {!isLogin && (
          <AuthInputBox
            header='닉네임'
            info='3~10자의 영어, 한글, 숫자만 입력 가능합니다.'
            isLogin={isLogin}
            value={form.nickname}
            onChange={handleChange('nickname')}
            error={errors.nickname}
            onDuplicate={handleDuplicate}
            duplicateStatus={duplicates.닉네임}
          />
        )}
        <AuthInputBox
          header='이메일'
          info='이메일 형식에 맞춰 입력해주세요.'
          type='email'
          isLogin={isLogin}
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
          onDuplicate={handleDuplicate}
          duplicateStatus={duplicates.이메일}
        />
        <AuthInputBox
          header='비밀번호'
          info='8~12자 영소문자, 숫자, 특수문자를 포함해야 합니다.'
          isLogin={isLogin}
          type='password'
          value={form.password}
          onChange={handleChange('password')}
          error={errors.password}
        />
        {!isLogin && (
          <AuthInputBox
            header='비밀번호 확인'
            info='비밀번호와 같게 입력해주세요'
            isLogin={isLogin}
            type='password'
            value={form.confirmPassword}
            onChange={handleChange('confirmPassword')}
            error={errors.confirmPassword}
          />
        )}
      </InputForm>
      <SubmitBtn onClick={handleSubmit}>
        {isLogin ? '로그인' : '회원가입'}
      </SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 450px;
  max-width: 90%;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.textBlack};

  border-radius: 15px;
  box-shadow: ${theme.boxShadow.normal};
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  width: 100%;
`;

const SubmitBtn = styled.button`
  width: 6em;
  height: 3.75em;

  background-color: ${theme.colors.secondo};
  color: ${theme.colors.text};

  margin: 30px 0;

  border-radius: 10px;

  font-size: 0.8rem;
  font-weight: 700;

  box-shadow: ${theme.boxShadow.button};

  cursor: pointer;
`;

export default AuthForm;

import theme from '@/styles/theme';
import styled from '@emotion/styled';
import BigText from './BigText';
import AuthInputBox from './AuthInputBox';
import { useEffect, useState } from 'react';
import { signIn, signUp } from '@/utils/firebase';
import { useNavigate } from 'react-router-dom';
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from '@/utils/auth';

interface Props {
  type: boolean;
}

function AuthForm({ type }: Props) {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickNameDuplicate, setNickNameDuplicate] = useState('');
  const [emailDuplicate, setEmailDuplicate] = useState('');
  const [errors, setErrors] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const nav = useNavigate();

  useEffect(() => {
    setNickname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNickNameDuplicate('');
    setEmailDuplicate('');
  }, [type]);

  const validateConfirmPassword = (confirm: string) => {
    if (password !== confirm) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  };

  // 제출 시 유효성 검사 실행
  const handleSubmit = async () => {
    const nicknameError = !type ? validateNickname(nickname) : '';
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmError = !type ? validateConfirmPassword(confirmPassword) : '';

    if (!type && !nickNameDuplicate) {
      alert('닉네임 중복확인을 해주세요');
      return;
    }

    if (!type && !emailDuplicate) {
      alert('이메일 중복확인을 해주세요');
      return;
    }

    // 에러가 있을 경우 상태에 저장
    setErrors({
      nickname: nicknameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmError,
    });

    // 에러가 없을 경우 콘솔에 출력 (실제론 폼 제출 동작)
    if (!nicknameError && !emailError && !passwordError && !confirmError) {
      console.log(
        '유효성 검사 통과:',
        nickname,
        email,
        password,
        confirmPassword
      );
      if (type) {
        const isSucces = await signIn(email, password);
        if (isSucces) nav('/');
      } else {
        const isSucces = await signUp(email, password, nickname);
        if (isSucces) nav('/auth?type=login');
      }
    } else {
      alert('잘 입력했는지 확인해주세요');
      console.log('유효성 검사 실패:', errors);
    }
  };

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
          <AuthInputBox
            header='닉네임'
            info='3~10자의 영어, 한글, 숫자만 입력 가능합니다.'
            isLogin={type}
            dup={nickNameDuplicate}
            set={setNickname}
            setDup={setNickNameDuplicate}
            validate={validateNickname}
          />
        )}
        <AuthInputBox
          header='이메일'
          info='이메일 형식에 맞춰 입력해주세요.'
          isLogin={type}
          dup={emailDuplicate}
          set={setEmail}
          setDup={setEmailDuplicate}
          validate={validateEmail}
        />
        <AuthInputBox
          header='비밀번호'
          info='8~12자 영소문자, 숫자, 특수문자를 포함해야 합니다.'
          isLogin={type}
          type='password'
          set={setPassword}
          validate={validatePassword}
        />
        {!type && (
          <AuthInputBox
            header='비밀번호 확인'
            info='비밀번호와 같게 입력해주세요'
            isLogin={type}
            type='password'
            set={setConfirmPassword}
            validate={validateConfirmPassword}
          />
        )}
      </InputForm>
      <SubmitBtn onClick={handleSubmit}>
        {type ? '로그인' : '회원가입'}
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

// 유효성 검사 함수들
const validateNickname = (nickname: string) => {
  const nicknameRegex = /^[a-zA-Z가-힣0-9]{3,10}$/;
  if (!nicknameRegex.test(nickname)) {
    return '3~10자의 영어, 한글, 숫자만 입력 가능합니다.';
  }
  return '';
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return '유효한 이메일 형식이 아닙니다.';
  }
  return '';
};

const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
  if (!passwordRegex.test(password)) {
    return '8~12자 영소문자, 숫자, 특수문자를 포함해야 합니다.';
  }
  return '';
};

export { validateEmail, validateNickname, validatePassword };

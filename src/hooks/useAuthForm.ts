// useAuthForm.ts
import { useEffect, useState } from 'react';
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from '@/utils/auth';
import { duplicate } from '@/utils/firebase';

export const useAuthForm = (isLogin: boolean) => {
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [duplicates, setDuplicates] = useState({
    nickname: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    nickname: 'error',
    email: 'error',
    password: 'error',
    confirmPassword: 'error',
  });

  const clearState = () => {
    setForm({
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setDuplicates({
      nickname: '',
      email: '',
    });
    setErrors({
      nickname: 'error',
      email: 'error',
      password: 'error',
      confirmPassword: 'error',
    });
  };

  const errorLoginMode = () => {
    setErrors({
      nickname: '',
      email: 'error',
      password: 'error',
      confirmPassword: '',
    });
  };

  const handleChange = (field: keyof typeof form) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (field === 'nickname') {
      const nicknameError = validateNickname(value);
      setErrors((prevErrors) => ({ ...prevErrors, nickname: nicknameError }));
    } else if (field === 'email') {
      const emailError = validateEmail(value);
      setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
    } else if (field === 'password') {
      const passwordError = validatePassword(value);
      setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
    } else if (field === 'confirmPassword') {
      const confirmPasswordError =
        form.password !== value ? '비밀번호가 일치하지 않습니다.' : '';
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: confirmPasswordError,
      }));
    }
  };

  const validate = () => {
    console.log(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleDuplicate =
    (field: string) =>
    async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      value: string
    ) => {
      e.preventDefault();

      if (field === 'email' || field === 'nickname')
        if (!duplicates[field] && setDuplicates) {
          const isExist = await duplicate(field, value);
          console.log(isExist);

          setDuplicates({ ...duplicates, [field]: isExist });
        }
    };

  useEffect(() => {
    clearState();
    if (isLogin) errorLoginMode();
  }, [isLogin]);

  return {
    form,
    clearState,
    errorLoginMode,
    handleChange,
    errors,
    duplicates,
    validate,
    handleDuplicate,
  };
};

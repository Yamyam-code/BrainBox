import theme from '@/styles/theme';
import { duplicate } from '@/utils/firebase';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';

interface Props {
  header: string;
  info: string;
  type?: string;
  dup?: string;
  isLogin: boolean;
  set: React.Dispatch<React.SetStateAction<string>>;
  setDup?: React.Dispatch<React.SetStateAction<string>>;
  validate?: (info: string) => string;
  confirm?: (confirm: string) => '' | '비밀번호가 일치하지 않습니다.';
}

function AuthInputBox({
  header,
  info,
  type = 'text',
  isLogin,
  dup = '',
  set,
  validate,
  confirm,
  setDup,
}: Props) {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState('a');
  const needDuplicate =
    header === '닉네임' ? true : header === '이메일' ? true : false;

  useEffect(() => {
    setValue('');
  }, [isLogin]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);
    set(value);
    if (validate) {
      const confirmed = validate(value);
      setValid(confirmed);
    } else if (confirm) {
      const confirmed = confirm(value);
      setValid(confirmed);
    }
  }

  async function valDup(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (!dup && setDup) {
      const isExist = await duplicate(header, value);
      setDup(isExist);
    }
  }

  return (
    <Container>
      <Header>{header}</Header>
      <PositionBox>
        <Input
          type={type}
          onChange={onChangeHandler}
          valid={valid}
          value={value}
        />
        {!valid && needDuplicate && !isLogin && (
          <DuplicateBtn dup={dup} onClick={valDup}>
            {dup ? <IoCheckmarkOutline /> : '중복확인'}
          </DuplicateBtn>
        )}
      </PositionBox>
      {valid && <Info>{info}</Info>}
      {!valid && !dup && !isLogin && needDuplicate && (
        <Info>중복확인 해주세요.</Info>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;

  padding: 10px 10%;

  box-sizing: border-box;
`;

const Input = styled.input<{ valid: string }>`
  width: 100%;
  height: 30px;

  padding: 0 5px;

  border-radius: 5px;

  font-size: 1rem;

  box-sizing: border-box;

  &:focus {
    border: ${(props) => (!props.valid ? '1px solid blue' : '1px solid red')};
  }
`;

const Header = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
`;

const Info = styled.p`
  font-size: ${theme.fontSizes.small};
`;

const DuplicateBtn = styled.button<{ dup: string }>`
  position: absolute;
  top: 50%;
  right: 1%;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 25px;

  font-size: ${(props) => (props.dup ? '1.2rem' : '0.6rem')};

  background-color: ${(props) =>
    props.dup ? theme.colors.secondo : theme.colors.secondo};
  color: ${(props) => (props.dup ? '#00ff62' : theme.colors.text)};

  border-radius: 5px;

  transform: translateY(-50%);

  cursor: ${(props) => (props.dup ? 'auto' : 'pointer')};
`;

const PositionBox = styled.div`
  position: relative;
`;

export default AuthInputBox;

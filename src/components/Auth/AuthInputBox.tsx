import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { IoCheckmarkOutline } from 'react-icons/io5';

interface Props {
  header: string;
  type?: string;
  value: string;
  error: string;
  info?: string;
  duplicateStatus?: string;
  isLogin: boolean;
  onChange: (value: string) => void;
  onDuplicate?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    field: string,
    value: string
  ) => void;
}

function AuthInputBox({
  header,
  type,
  value,
  error,
  info,
  duplicateStatus = '',
  isLogin,
  onChange,
  onDuplicate,
}: Props) {
  const needDuplicate =
    header === '닉네임' ? true : header === '이메일' ? true : false;

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    onChange(value);
  }

  return (
    <Container>
      <Header>{header}</Header>
      <PositionBox>
        <Input
          type={type}
          onChange={onChangeHandler}
          error={error}
          value={value}
        />
        {!error && needDuplicate && !isLogin && onDuplicate && (
          <DuplicateBtn
            dup={duplicateStatus}
            onClick={(e) => {
              onDuplicate(e, header, value);
            }}
          >
            {duplicateStatus ? <IoCheckmarkOutline /> : '중복확인'}
          </DuplicateBtn>
        )}
      </PositionBox>
      {error && <Info>{info}</Info>}
      {!error && !duplicateStatus && !isLogin && needDuplicate && (
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

const Input = styled.input<{ error: string }>`
  width: 100%;
  height: 30px;

  padding: 0 5px;

  border-radius: 5px;

  font-size: 1rem;

  box-sizing: border-box;

  &:focus {
    border: ${(props) => (!props.error ? '1px solid blue' : '1px solid red')};
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

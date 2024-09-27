import theme from '@/styles/theme';
import styled from '@emotion/styled';

interface Props {
  header: string;
  info: string;
  type?: string;
}

function AuthInputBox({ header, info, type = 'text' }: Props) {
  return (
    <Container>
      <Header>{header}</Header>
      <Input type={type} />
      <Info>{info}</Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;

  padding: 0 10%;

  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;

  padding: 0 5px;

  border-radius: 5px;

  font-size: 16px;

  box-sizing: border-box;
`;

const Header = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
`;

const Info = styled.p`
  font-size: ${theme.fontSizes.small};
`;

export default AuthInputBox;

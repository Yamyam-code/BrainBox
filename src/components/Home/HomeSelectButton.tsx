import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface PropsType {
  label: string;
  Icon: IconType;
  link: string;
}

function HomeSelectButton({ label, Icon, link }: PropsType) {
  return (
    <Link to={link}>
      <Container>
        <IconBox>
          <Icon />
        </IconBox>
        <p>{label}</p>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  width: 400px;
  max-width: 100vw;
  height: 400px;
  max-height: 100vw;

  padding: 40px;

  color: ${theme.colors.text};
  background-color: ${theme.colors.secondo};

  font-size: ${theme.fontSizes.large};
  font-weight: 700;

  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: ${theme.boxShadow.normal};

  cursor: pointer;

  transition: ${theme.transition.button};

  :hover {
    scale: ${theme.scale.btnHover};
  }

  :active {
    scale: ${theme.scale.btnActive};
  }
`;

const IconBox = styled.div`
  font-size: 50px;
`;

export default HomeSelectButton;

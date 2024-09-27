import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { EmotionJSX } from 'node_modules/@emotion/react/types/jsx-namespace';

interface Props {
  onClick: () => void;
  id: string;
  menuOpen: boolean;
  Icon: EmotionJSX.Element;
}

function HomeMenuIcon({ onClick, id, menuOpen, Icon }: Props) {
  return (
    <Container onClick={onClick} id={id}>
      <IconBox menuOpen={menuOpen}>{Icon}</IconBox>
      <IconLabel className='iconLabel'>{id}</IconLabel>
    </Container>
  );
}

const Container = styled.div`
  &:hover .iconLabel {
    height: ${theme.fontSizes.small};
    scale: 1;
  }
`;

const IconBox = styled.div<{ menuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.menuOpen ? '60px' : '0')};
  height: ${(props) => (props.menuOpen ? '60px' : '0')};

  font-size: ${theme.fontSizes.large};

  scale: ${(props) => (props.menuOpen ? 1 : 0)};
  transition: all 0.2s ease-in-out;
`;

const IconLabel = styled.p`
  height: 0;

  font-size: ${theme.fontSizes.small};
  text-align: center;

  scale: 0;
  transition: all 0.2s ease-in-out;
`;
export default HomeMenuIcon;

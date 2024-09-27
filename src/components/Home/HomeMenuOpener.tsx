import theme from '@/styles/theme';
import styled from '@emotion/styled';

interface Props {
  menuOpen: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

function HomeMenuOpener({ menuOpen, set }: Props) {
  return (
    <Container
      onClick={() => {
        set(!menuOpen);
      }}
    >
      <HambergerLine
        style={{
          transform: menuOpen ? 'rotate(45deg)' : 'none',
          marginTop: menuOpen ? '3px' : '0',
        }}
      />
      <HambergerLine style={{ scale: menuOpen ? '0' : '1' }} />
      <HambergerLine
        style={{
          transform: menuOpen ? 'rotate(-45deg)' : 'none',
          marginTop: menuOpen ? '-18px' : '0',
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 60px;
  height: 60px;
`;

const HambergerLine = styled.div`
  width: 35px;
  height: 3px;

  background-color: ${theme.colors.text};

  transition: all 0.2s ease-in-out;
`;
export default HomeMenuOpener;

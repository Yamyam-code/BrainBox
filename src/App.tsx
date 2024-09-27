import styled from '@emotion/styled';
import Header from './components/Header';
import Router from './Router';
import theme from './styles/theme';

function App() {
  return (
    <Container>
      <Header />
      <Router />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  min-height: 100vh;

  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
`;

export default App;

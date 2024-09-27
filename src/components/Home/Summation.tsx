import theme from '@/styles/theme';
import styled from '@emotion/styled';

interface Props {
  header: string;
  label: string;
}

function Summation({ header, label }: Props) {
  return (
    <Container>
      <SummationHeader>{header}</SummationHeader>
      <SummationPreview>{label}</SummationPreview>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: ${theme.colors.textBlack};
  background-color: ${theme.colors.primary};

  padding: 0 10px;
  padding-bottom: 10px;

  border-radius: 5px;
  box-sizing: border-box;

  box-shadow: ${theme.boxShadow.normal};
  box-sizing: border-box;

  user-select: none;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 95%;
    min-width: 95%;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 45%;
    min-width: 45%;
  }

  @media (min-width: 1001px) and (max-width: 1500px) {
    width: 30%;
    min-width: 30%;
  }

  @media (min-width: 1501px) {
    width: 18%;
    min-width: 18%;
  }
`;

const SummationHeader = styled.p`
  height: 50px;

  border-bottom: 1px solid ${theme.colors.textBlack};
  box-sizing: border-box;

  line-height: 50px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SummationPreview = styled.p`
  box-sizing: border-box;
  overflow: hidden;

  display: -webkit-box;
  text-overflow: ellipsis;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
`;

export default Summation;

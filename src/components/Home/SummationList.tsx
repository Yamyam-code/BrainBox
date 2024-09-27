import styled from '@emotion/styled';
import Summation from './Summation';

interface Think {
  header: string;
  label: string;
}

interface Props {
  thinks: Think[];
}

function SummationList({ thinks }: Props) {
  return (
    <Container>
      {thinks.map((think, i) => (
        <Summation
          header={think.header}
          label={think.label}
          key={i + think.header}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;

  padding: 20px 0;

  border-radius: 5px;

  box-sizing: border-box;
`;

export default SummationList;

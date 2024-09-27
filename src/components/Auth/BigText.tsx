import theme from '@/styles/theme';
import styled from '@emotion/styled';

interface Props {
  label: string;
  color?: string;
  height?: string;
}

function BigText({ label, color = theme.colors.text, height = '0' }: Props) {
  return (
    <Container style={{ color: color, height: height, lineHeight: height }}>
      {label}
    </Container>
  );
}

const Container = styled.p`
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
  text-align: center;
`;

export default BigText;

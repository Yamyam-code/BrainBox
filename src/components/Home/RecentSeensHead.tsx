import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { FaArrowUpShortWide } from 'react-icons/fa6';
import { FaArrowDownShortWide } from 'react-icons/fa6';

interface Props {
  isDown: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

function RecentSeensHead({ isDown, set }: Props) {
  return (
    <Container
      onClick={() => {
        set(!isDown);
      }}
    >
      <p>최근 본 생각</p>
      <PlusIcon>
        {isDown ? <FaArrowUpShortWide /> : <FaArrowDownShortWide />}
      </PlusIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  font-size: ${theme.fontSizes.medium};

  user-select: none;
  cursor: pointer;
`;

const PlusIcon = styled.p`
  cursor: pointer;
`;

export default RecentSeensHead;

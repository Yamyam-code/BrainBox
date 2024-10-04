import theme from '@/styles/theme';
import styled from '@emotion/styled';
import RecentSeensHead from './RecentSeensHead';
import { useState } from 'react';

function LikedStocks() {
  const [isDown, setIsDown] = useState(false);

  return (
    <Container>
      <RecentSeensHead isDown={isDown} set={setIsDown} />
      {isDown && (
        <SeensList>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
          <Seen>제목입니다.</Seen>
        </SeensList>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;

  background-color: ${theme.colors.secondo};

  padding: 10px 15px;

  border-radius: 5px;

  box-shadow: ${theme.boxShadow.normal};
  box-sizing: border-box;
`;

const SeensList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  width: 100%;
`;

const Seen = styled.p`
  background-color: ${theme.colors.background};

  padding: 0.5em 1em;

  border-radius: 5px;

  font-size: ${theme.fontSizes.small};

  user-select: none;
  cursor: pointer;
`;

export default LikedStocks;

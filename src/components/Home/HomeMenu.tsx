import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { FaArrowUp } from 'react-icons/fa6';
import { FaPencilAlt } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import HomeMenuIcon from './HomeMenuIcon';
import { useState } from 'react';
import HomeMenuOpener from './HomeMenuOpener';
import { useNavigate } from 'react-router-dom';

function HomeMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuIcons = [
    {
      name: '맨 위로',
      icon: <FaArrowUp />,
      onClick: () => {
        scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      name: '글쓰기',
      icon: <FaPencilAlt />,
      onClick: () => {
        navigate('/write');
      },
    },
    {
      name: '검색',
      icon: <BsSearch />,
      onClick: () => {
        navigate('/search');
      },
    },
  ];

  return (
    <Container>
      {menuIcons.map((icon) => (
        <HomeMenuIcon
          onClick={icon.onClick}
          id={icon.name}
          menuOpen={menuOpen}
          Icon={icon.icon}
          key={icon.name}
        />
      ))}
      <HomeMenuOpener menuOpen={menuOpen} set={setMenuOpen} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 60px;
  background-color: ${theme.colors.secondo};

  box-shadow: ${theme.boxShadow.normal};

  cursor: pointer;
`;

export default HomeMenu;

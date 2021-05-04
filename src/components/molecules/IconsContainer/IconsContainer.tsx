import React, { useContext } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { AiFillGithub } from 'react-icons/ai';
import { Wrapper } from './IconsContainer.styles';
import { WindowWidthContext } from '../../../providers/WindowWidthProvider';
const IconsContainer = () => {
  const { windowWidth } = useContext(WindowWidthContext);
  return (
    <Wrapper>
      <a target="_blank" href="https://github.com/kamilwolanski?tab=repositories" rel="noopener noreferrer">
        <Icon iconSize={windowWidth <= 550 ? 19 : 23}>
          <AiFillGithub />
        </Icon>
      </a>
    </Wrapper>
  );
};

export default IconsContainer;

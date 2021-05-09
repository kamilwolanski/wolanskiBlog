import { AboutAuthorWrapper } from './AboutAuthor.styles';
import authorImg from '../../../assets/images/IMG_20210509_113454.jpg';
import Button from '../../atoms/Button/Button';
import { FontSizesButton } from '../../atoms/Button/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WindowWidthContext } from '../../../providers/WindowWidthProvider';

const AboutAuthor = () => {
  const { windowWidth } = useContext(WindowWidthContext);
  return (
    <AboutAuthorWrapper>
      <h3>o autorze</h3>
      <div className="author-portrait">
        <img src={authorImg} alt="" />
      </div>
      <p>
        Hej! Nazywam się Kamil Wolański i zamierzam zostać programistą. Moim głównym zainteresowaniem są technologie webowe na ścieżce frontendu, a
        używaną biblioteką React JS.
      </p>
      <Link to="/about-me">
        <Button fontSize={windowWidth >= 1800 ? FontSizesButton.M : FontSizesButton.SM} margintb={20}>
          dowiedz się więcej
        </Button>
      </Link>
    </AboutAuthorWrapper>
  );
};

export default AboutAuthor;

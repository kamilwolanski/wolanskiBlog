import React from 'react';
import { WrapperAside } from './Aside.styles';
import AboutAuthor from '../../molecules/AboutAuthor/AboutAuthor';
import RecentPosts from '../RecentPosts/RecentPosts';
import ContactAside from '../../molecules/ContactAside/ContactAside';

const Aside = () => {
  return (
    <WrapperAside>
      <AboutAuthor />
      <RecentPosts />
      <ContactAside />
    </WrapperAside>
  );
};

export default Aside;

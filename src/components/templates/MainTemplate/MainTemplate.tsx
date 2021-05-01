import React, { ReactNode, useContext, useEffect } from 'react';
import { Wrapper, Footer } from './MainTemplate.styles';
import Navigation from '../../organisms/Navigation/Navigation';
import HeroSection from '../../molecules/HeroSection/HeroSection';
import Aside from '../../organisms/Aside/Aside';
import { Redirect, Route, Switch } from 'react-router';
import Contact from '../../../views/Contact';
import { NavContext } from '../../../providers/NavProvider';
import AboutMe from '../../../views/AboutMe';
import Main from '../../organisms/Main/Main';
import Search from '../../molecules/Search/Search';
import WindowWidthProvider from '../../../providers/WindowWidthProvider';
import { Queries } from '../../../Queries/basicQuery';
import { renderMetaTags } from 'react-datocms';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import Pagination from '../../molecules/Pagination/Pagination';
import { PostsContext } from '../../../providers/PostsProviders';

const MainTemplate: React.FC = ({ children }: { children?: ReactNode }) => {
  const { isOpen } = useContext(NavContext);
  const { numberOfPages } = useContext(PostsContext);

  const queries = new Queries();

  return (
    <WindowWidthProvider>
      <Wrapper className="xxx">
        <Navigation />
        {isOpen && <div className="overlay" style={{ width: '100%', height: '100vh', position: 'fixed', left: '0', top: '0', zIndex: 1 }}></div>}
        <Switch>
          <Route path="/posts">
            <Switch>
              <Route exact path="/posts/:page/">
                <HeroSection />
              </Route>
              <Route exact path="/posts">
                <HeroSection />
              </Route>
            </Switch>

            <Main blur={isOpen ? true : false}>
              <Switch>
                <Route exact path="/posts">
                  <Search />
                  {children}
                  {/* <Pagination /> */}
                  <Aside />
                </Route>
                <Route exact path="/posts/:page">
                  <Search />
                  {children}
                  {/* <Pagination /> */}

                  {/* {numberOfPages ? numberOfPages.length > 1 && <Pagination /> : null} */}
                  <Aside />
                </Route>
                <Route path="/posts/post/">
                  {children}
                  <Aside />
                </Route>
              </Switch>
            </Main>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route>
            <Redirect to="/posts" />
          </Route>
        </Switch>
        <Footer blur={isOpen ? true : false}>
          <p>2021 WolanskiBlog - Wszelkie prawa zastrzeżone</p>
        </Footer>
      </Wrapper>
    </WindowWidthProvider>
  );
};

export default MainTemplate;

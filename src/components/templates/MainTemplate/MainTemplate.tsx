import React, { ReactNode, useContext } from 'react';
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

const MainTemplate: React.FC = ({ children }: { children?: ReactNode }) => {
  const { isOpen } = useContext(NavContext);
  return (
    <WindowWidthProvider>
      <Wrapper className="xxx">
        <Navigation />
        {isOpen && <div className="overlay" style={{ width: '100%', height: '100vh', position: 'fixed', left: '0', top: '0', zIndex: 1 }}></div>}
        <Switch>
          <Route path="/posts">
            <Switch>
              <Route path="/posts">
                <Route exact path="/posts">
                  <HeroSection />
                </Route>
                <Route exact path="/posts/:page">
                  <HeroSection />
                </Route>
                <Main blur={isOpen ? true : false}>
                  <Route exact path="/posts">
                    <Search />
                  </Route>
                  <Route exact path="/posts/:page">
                    <Search />
                  </Route>
                  {children}
                  <Aside />
                </Main>
              </Route>
            </Switch>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          {/* <Route>
            <Redirect to="/posts" />
          </Route> */}
        </Switch>
        <Footer blur={isOpen ? true : false}>
          <p>2021 WolanskiBlog - Wszelkie prawa zastrzeżone</p>
        </Footer>
      </Wrapper>
    </WindowWidthProvider>
  );
};

export default MainTemplate;

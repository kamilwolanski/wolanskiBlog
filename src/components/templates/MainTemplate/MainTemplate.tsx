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

const MainTemplate: React.FC = ({ children }: { children?: ReactNode }) => {
  const { isOpen } = useContext(NavContext);
  const queries = new Queries();
  // const { data } = useQuery(queries.favicon);
  // useEffect(() => {
  //   if (data) {
  //     console.log(data._site.faviconMetaTags);
  //   }
  // }, [data]);

  return (
    <WindowWidthProvider>
      {/* {data && <Helmet>{renderMetaTags(data._site.faviconMetaTags)}</Helmet>} */}

      <Wrapper className="xxx">
        <Navigation />
        {isOpen && <div className="overlay" style={{ width: '100%', height: '100vh', position: 'fixed', left: '0', top: '0', zIndex: 1 }}></div>}
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/">
            <Switch>
              <Route path="/">
                <Route exact path="/">
                  <HeroSection />
                </Route>
                <Route exact path="/:page">
                  <HeroSection />
                </Route>
                <Main blur={isOpen ? true : false}>
                  <Route exact path="/">
                    <Search />
                  </Route>
                  <Route exact path="/:page">
                    <Search />
                  </Route>
                  {children}
                  <Aside />
                </Main>
              </Route>
            </Switch>
          </Route>

          <Route>
            <Redirect to="/" />
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

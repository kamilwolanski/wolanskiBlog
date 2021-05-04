import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Posts from '../components/organisms/Posts/Posts';
import PostsProviders from '../providers/PostsProviders';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../api/apolloClient';
import FullPost from '../components/molecules/FullPost/FullPost';
import NavProvider from '../providers/NavProvider';
import ScrollToTop from '../helpers/ScrollToTop';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ScrollToTop />
          <PostsProviders>
            <NavProvider>
              <Route exact path="/">
                <Redirect to="/posts/" />
              </Route>
              <MainTemplate>
                <Switch>
                  <Route path="/posts/post/:id">
                    <FullPost />
                  </Route>
                  <Route path="/posts">
                    <Posts />
                  </Route>
                </Switch>
              </MainTemplate>
            </NavProvider>
          </PostsProviders>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
};

export default App;

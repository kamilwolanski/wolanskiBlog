import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Posts from '../components/organisms/Posts/Posts';
import PostsProviders, { PostsContext } from '../providers/PostsProviders';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../api/apolloClient';
import FullPost from '../components/molecules/FullPost/FullPost';
import NavProvider from '../providers/NavProvider';
import ScrollToTop from '../helpers/ScrollToTop';
import Pagination from '../components/molecules/Pagination/Pagination';
const App = () => {
  const { numberOfPages } = useContext(PostsContext);

  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ScrollToTop />
          {/* <Navigation /> */}
          <PostsProviders>
            <NavProvider>
              <MainTemplate>
                <Switch>
                  <Route path="/posts/post/:id">
                    <FullPost />
                  </Route>
                  <Route path="/posts">
                    <Posts />
                    {numberOfPages ? numberOfPages.length > 1 && <Pagination /> : null}
                  </Route>
                  <Route path="/">
                    <Redirect to="/posts" />
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

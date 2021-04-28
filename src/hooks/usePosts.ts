import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { PostsResponseI } from '../providers/PostsProviders';
import { useCallback } from 'react';
import { Queries } from '../Queries/basicQuery';
import { usePagination } from './usePagination';
import useMeta from './useMeta';

export const usePosts = (postsOnPage: number, searchValue: string) => {
  let location = useLocation();
  let history = useHistory();
  const setInitialCurrentBtn = useCallback(() => {
    const lastChar = location.pathname.substr(location.pathname.length - 1);
    if (location.pathname !== `/posts` && !isNaN(Number(lastChar))) {
      console.log('przeszło');
      // console.log(lastChar);
      // console.log(isNaN(Number(lastChar)));
      return Number(lastChar);
    } else {
      console.log('ustawia na 1');
      return 1;
    }
  }, [location.pathname]);
  const [skipNumber, setSkipNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState<(string | number)[]>([]);
  const queries = new Queries(postsOnPage, skipNumber, searchValue);
  const { loading, error, data: posts } = useQuery<PostsResponseI>(searchValue ? queries.queryFiltered : queries.query1);
  const [currentBtn, setCurrentBtn] = useState<number>(setInitialCurrentBtn());
  const { handleCurrentBtn, setBtnByOne, arrOfCurrButtons } = usePagination(
    posts,
    loading,
    postsOnPage,
    setNumberOfPages,
    numberOfPages,
    currentBtn,
    setCurrentBtn
  );
  const { data } = useMeta();
  useEffect(() => {
    if (data) {
      console.log(data.allPosts[0]._seoMetaTags);
    }
  }, [data]);
  useEffect(() => {
    setSkipNumber((currentBtn - 1) * postsOnPage);
  }, [currentBtn, postsOnPage]);

  useEffect(() => {
    // console.log(history.location.pathname);
    if (!history.location.pathname.includes('posts/post') && history.location.pathname.includes('')) {
      history.push(currentBtn > 1 ? `/posts/${currentBtn}` : history.location.pathname);
    }
  }, [currentBtn]);

  useEffect(() => {
    if (location.pathname.includes(`/posts/`) || location.pathname === `/posts`) {
      setCurrentBtn(setInitialCurrentBtn());
    }
  }, [numberOfPages.length, location.pathname, setInitialCurrentBtn]);

  useEffect(() => {
    if (posts && currentBtn > numberOfPages.length) {
      console.log('nowy ustawil na 1');
      setCurrentBtn(1);
    }
  }, [currentBtn, numberOfPages.length]);

  return { loading, posts, paginationArray: arrOfCurrButtons, handleCurrentBtn, currentBtn, setBtnByOne, setCurrentBtn, numberOfPages };
};

import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { PostsResponseI } from '../providers/PostsProviders';
import { useCallback } from 'react';
import { Queries } from '../Queries/postsQueries';
import { usePagination } from './usePagination';

export const usePosts = (postsOnPage: number, searchValue: string) => {
  let location = useLocation();
  let history = useHistory();
  const setInitialCurrentBtn = useCallback(() => {
    const lastChar = location.pathname.substr(location.pathname.length - 1);
    if (location.pathname !== `/posts` && !isNaN(Number(lastChar))) {
      return Number(lastChar);
    } else {
      return 1;
    }
  }, [location.pathname]);
  const [skipNumber, setSkipNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState<(string | number)[]>([]);
  const queries = new Queries(postsOnPage, skipNumber, searchValue);
  const { loading, data: posts } = useQuery<PostsResponseI>(searchValue ? queries.queryFiltered : queries.query1);
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

  useEffect(() => {
    setSkipNumber((currentBtn - 1) * postsOnPage);
  }, [currentBtn, postsOnPage]);

  useEffect(() => {
    if (!history.location.pathname.includes('posts/post') && history.location.pathname.includes('posts')) {
      history.push(currentBtn > 1 ? `/posts/${currentBtn}` : '/posts');
    }
  }, [currentBtn]);

  useEffect(() => {
    if (location.pathname.includes(`/posts/`) || location.pathname === `/posts`) {
      setCurrentBtn(setInitialCurrentBtn());
    }
  }, [numberOfPages.length, location.pathname, setInitialCurrentBtn]);

  useEffect(() => {
    if (posts && currentBtn > numberOfPages.length) {
      setCurrentBtn(1);
    }
  }, [currentBtn, numberOfPages.length]);

  return { loading, posts, paginationArray: arrOfCurrButtons, handleCurrentBtn, currentBtn, setBtnByOne, setCurrentBtn, numberOfPages };
};

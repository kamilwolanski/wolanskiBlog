import React, { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../../providers/PostsProviders';
import Pagination from '../../molecules/Pagination/Pagination';
import Post from '../../molecules/Post/Post';
import { Wrapper } from './Posts.styles';

const Posts: React.FC = () => {
  const { allPosts, numberOfPages } = useContext(PostsContext);

  return (
    <Wrapper>
      {allPosts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      {allPosts?.length === 0 && <p>Nie znaleziono artykułu o podanym tytule</p>}
    </Wrapper>
  );
};

export default Posts;

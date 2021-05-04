import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PostsContext } from '../../../providers/PostsProviders';
import Post from '../../molecules/Post/Post';
import { Wrapper } from './Posts.styles';

const Posts: React.FC = () => {
  const { allPosts } = useContext(PostsContext);

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

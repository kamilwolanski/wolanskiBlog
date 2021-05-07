import React, { useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { PostsContext } from '../../../providers/PostsProviders';
import Post from '../../molecules/Post/Post';
import { Wrapper } from './Posts.styles';
import { css } from '@emotion/core';

const override = css`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Posts: React.FC = () => {
  const { allPosts, loading } = useContext(PostsContext);

  return (
    <Wrapper>
      {allPosts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      {allPosts?.length === 0 && <p>Nie znaleziono artykułu o podanym tytule</p>}
      {loading && (
        <div className="loader">
          <ClipLoader css={override} loading={loading} size={150} />
        </div>
      )}
    </Wrapper>
  );
};

export default Posts;

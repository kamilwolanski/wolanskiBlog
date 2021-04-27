import { gql, useQuery } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirstPosts } from '../../../hooks/useFirstPosts';
import { initialStateModel, PostsContext } from '../../../providers/PostsProviders';
import RecentPost from '../../molecules/RecentPost/RecentPost';
import { RecentPostsWrapper } from './RecentPosts.styles';

const RecentPosts: React.FC = () => {
  const { posts } = useFirstPosts(4);
  console.log(posts?.allPosts);
  return (
    <RecentPostsWrapper>
      <h3 style={{ textAlign: 'center' }}>Ostatnie wpisy</h3>
      <ul>
        {posts?.allPosts?.map((post) => (
          <RecentPost key={post.id} {...post} />
        ))}
      </ul>
    </RecentPostsWrapper>
  );
};

export default RecentPosts;

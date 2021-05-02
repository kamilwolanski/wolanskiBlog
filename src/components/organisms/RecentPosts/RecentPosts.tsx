import React from 'react';
import { useFirstPosts } from '../../../hooks/useFirstPosts';
import RecentPost from '../../molecules/RecentPost/RecentPost';
import { RecentPostsWrapper } from './RecentPosts.styles';

const RecentPosts: React.FC = () => {
  const { posts } = useFirstPosts(4);
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

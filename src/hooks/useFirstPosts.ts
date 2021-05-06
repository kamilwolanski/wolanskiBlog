import { useQuery, gql } from '@apollo/client';

import { PostsResponseI } from '../providers/PostsProviders';

export const useFirstPosts = (numberOfPosts: number) => {
  const query = gql`
    {
      allPosts(orderBy: [createdAt_DESC], first: "${numberOfPosts}") {
        id
        title
        slug
        _createdAt
      }
    }
  `;
  const { loading, error, data: posts } = useQuery<PostsResponseI>(query);

  return { posts, loading, error };
};

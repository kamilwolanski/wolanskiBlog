import { useQuery, gql } from '@apollo/client';
import { PostsResponseI } from '../providers/PostsProviders';

export const useSinglePost = (slug: string) => {
  const query = gql`
    {
      allPosts(filter: { slug: { in: ["${slug}"] } }) {
        id
        title
        _seoMetaTags {tag, attributes, content}
        content {
          value
          blocks {
            __typename
            ... on MyblockRecord {
              __typename
              id
              image {
                id
                responsiveImage(imgixParams: {fit: crop, auto: format}) {
                  srcSet
                  webpSrcSet
                  sizes
                  src
                  width
                  height
                  aspectRatio
                  alt
                  title
                  base64
              }
            }
            }
          }
        }
        image {
          url
        }
        _createdAt
      }
    }
  `;

  const { loading, error, data: post } = useQuery<PostsResponseI>(query);

  return { post, loading, error };
};

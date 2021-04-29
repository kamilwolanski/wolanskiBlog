import { DocumentNode, gql } from '@apollo/client';

export class Queries {
  public query1: DocumentNode;
  public queryFiltered: DocumentNode;
  public meta: DocumentNode;
  constructor(postsOnPage?: number, skipNumber?: number, searchValue?: string) {
    this.query1 = gql`
    {
      allPosts(first: ${postsOnPage}, skip: ${skipNumber}) {
        id
        title
        slug
        content {
          value
          blocks {
            __typename
            ... on MyblockRecord {
              __typename
              id
            }
          }
        }
        image {
          url
        }
        _createdAt
      }
      _allPostsMeta {
        count
      }
    }
  `;
    this.queryFiltered = gql`
    {
      allPosts(first: ${postsOnPage}, skip: ${skipNumber}, filter: { title: { matches: { pattern: "${searchValue}" } } }) {
        id
        title
        slug
        content {
          value
          blocks {
            __typename
            ... on MyblockRecord {
              __typename
              id
              image {
                id
                responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
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
      _allPostsMeta(filter: { title: { matches: { pattern: "${searchValue}" } } }) {
        count
      }
    }
  `;

    this.meta = gql`
      {
        allPosts(first: 2) {
          title
          _seoMetaTags {
            tag
            attributes
            content
          }
        }
      }
    `;
  }
}

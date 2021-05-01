import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSinglePost } from '../../../hooks/useSinglePost';
import Post from '../../molecules/Post/Post';
import { Wrapper } from '../../organisms/Posts/Posts.styles';
import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderWrapper } from './FullPost.styles';
const FullPost: React.FC = () => {
  const history = useHistory();
  let paramId: { id: string } = useParams();
  const { post, loading } = useSinglePost(paramId.id);

  useEffect(() => {
    if (!post?.allPosts?.length && !loading) {
      console.log('replcae');
      history.replace('');
    }
  }, [history, loading, post?.allPosts?.length]);

  return (
    <Wrapper>
      {loading && (
        <LoaderWrapper>
          <ClipLoader loading={loading} size={150} />
        </LoaderWrapper>
      )}
      {post?.allPosts?.length && !loading && <Post key={post.allPosts[0]?.id} {...post?.allPosts[0]} isFull={true} loading={loading} />}
    </Wrapper>
  );
};

export default FullPost;

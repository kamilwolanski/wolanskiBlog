import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSinglePost } from '../../../hooks/useSinglePost';
import Post from '../../molecules/Post/Post';
import { Wrapper } from '../../organisms/Posts/Posts.styles';

const COMMENTS_ID = 'graphcomment';

const FullPost: React.FC = () => {
  const history = useHistory();
  let paramId: { id: string } = useParams();
  console.log(paramId.id);
  const { post, loading } = useSinglePost(paramId.id);
  console.log('zaladowal sie full post');
  useEffect(() => {
    window.gc_params = {
      graphcomment_id: 'wolanskiblog',
      fixed_header_height: 0,
    };
    console.log('graphComment')
    const script = document.createElement('script');
    script.src = 'https://graphcomment.com/js/integration.js?' + Date.now();
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);
    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, [paramId]);

  useEffect(() => {
    if (!post?.allPosts?.length && !loading) {
      console.log('replcae')
      history.replace('');
    }
  }, [history, loading, post?.allPosts?.length]);

  return (
    <Wrapper>
      {post?.allPosts?.length && !loading && <Post key={post.allPosts[0]?.id} {...post?.allPosts[0]} isFull={true} />}
      <div id="graphcomment"></div>
    </Wrapper>
  );
};

export default FullPost;

import React, { useEffect } from 'react';

const Comments: React.FC = () => {
  const COMMENTS_ID = 'graphcomment';

  useEffect(() => {
    window.gc_params = {
      graphcomment_id: 'wolanskiblog',
      fixed_header_height: 0,
    };
    console.log('graphComment');
    const script = document.createElement('script');
    script.src = 'https://graphcomment.com/js/integration.js?' + Date.now();
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) {
      console.log(comments);
      console.log('comments są');
      comments.appendChild(script);
    } else {
      window.gc_params = {
        graphcomment_id: 'wolanskiblog',
        fixed_header_height: 0,
      };

      console.log('commentów nie ma');
    }
    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, []);

  return <div id="graphcomment"></div>;
};
export default Comments;

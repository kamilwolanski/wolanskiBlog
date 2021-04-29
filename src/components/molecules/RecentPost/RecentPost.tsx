import React from 'react';
import { Link } from 'react-router-dom';
import { useDate } from '../../../hooks/useDate';
import { PostType } from '../../../providers/PostsProviders';
import { RecentPostWrapper } from './RecentPost.styles';
import { BiTimeFive } from 'react-icons/bi';

const RecentPost: React.FC<PostType> = ({ title, _createdAt, slug }) => {
  const date = new Date(_createdAt);
  const {
    dateInPolish: { day, month, year },
  } = useDate(date);
  return (
    <Link
      to={{
        pathname: `/post/${slug}`,
      }}
    >
      <RecentPostWrapper>
        <p className="recentPost-title">{title}</p>
        <p className="recentPost-data">
          <span>
            <BiTimeFive />
          </span>
          {`${day} ${month} ${year}`}
        </p>
      </RecentPostWrapper>
    </Link>
  );
};

export default RecentPost;

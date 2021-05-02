import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <NavLink
      to={{
        pathname: `/posts/post/${slug}`,
      }}
      activeClassName="activePost"
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
    </NavLink>
  );
};

export default RecentPost;

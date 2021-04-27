import React, { useContext } from 'react';
import { PostsContext } from '../../../providers/PostsProviders';
import { PaginationBtn, PrevNextBtn } from './Pagination.styles';
import { PaginationWrapper } from './Pagination.styles';

const Pagination: React.FC = () => {
  const { paginationArray, handleCurrentBtn, currentBtn, setBtnByOne } = useContext(PostsContext);

  return (
    <PaginationWrapper>
      <PrevNextBtn onClick={() => setBtnByOne('left')}>{`Lewo`}</PrevNextBtn>
      {paginationArray?.map((item, i) => (
        <PaginationBtn key={i} disabled={item === currentBtn ? true : false} onClick={(e) => handleCurrentBtn(e, i)} value={item}>
          {item}
        </PaginationBtn>
      ))}
      <PrevNextBtn onClick={() => setBtnByOne('right')}>{`Prawo`}</PrevNextBtn>
    </PaginationWrapper>
  );
};

export default Pagination;

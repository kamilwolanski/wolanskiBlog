import React, { useContext, useEffect, useRef } from 'react';
import { SearchWrapper } from './Search.styles';
import { GoSearch } from 'react-icons/go';
import { PostsContext } from '../../../providers/PostsProviders';
import { InputStyled } from '../../atoms/Input/Input.styles';
import { WindowWidthContext } from '../../../providers/WindowWidthProvider';
import { ClipLoader } from 'react-spinners';
import { LoaderWrapper } from '../FullPost/FullPost.styles';

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm, setCurrentBtn, loading, debouncedSearchTerm } = useContext(PostsContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { windowWidth } = useContext(WindowWidthContext);

  useEffect(() => {
    if ((debouncedSearchTerm || debouncedSearchTerm === '') && searchTerm) {
      setCurrentBtn(1);
    } else {
      return;
    }
  }, [debouncedSearchTerm, searchTerm, setCurrentBtn]);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <SearchWrapper>
        <div className="search">
          <GoSearch onClick={handleFocus} style={{ cursor: 'pointer' }} />
          <InputStyled
            ref={inputRef}
            type="text"
            placeholder="Podaj tytuł szukanego artykułu"
            paddingtb={3}
            paddinglr={5}
            marginlr={20}
            fontSize={windowWidth >= 1800 ? 20 : 15}
            width={30}
            borderWeight={2}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </SearchWrapper>
    </>
  );
};

export default Search;

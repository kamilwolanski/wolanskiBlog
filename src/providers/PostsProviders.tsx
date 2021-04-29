import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useDebounce } from '../hooks/useDebounce';
import { StructuredText } from 'datocms-structured-text-utils';
import { SeoMetaTagType, StructuredTextDocument } from 'react-datocms';

const articlesOnAPage = 3;

export type PostType = {
  id: string;
  title: string;
  image: { url: string };
  content: any;
  _createdAt: string;
  slug: string;
  _seoMetaTags: SeoMetaTagType[];
};

export interface PostsResponseI {
  allPosts?: PostType[];
  loading: boolean;
  _allPostsMeta?: { count: number };
}
export interface initialStateModel extends PostsResponseI {
  paginationArray: (number | string)[];
  handleCurrentBtn: (e: React.MouseEvent<HTMLButtonElement>, i: number) => void;
  currentBtn: number;
  setBtnByOne: (direction: string) => void;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setCurrentBtn: Dispatch<SetStateAction<number>>;
  debouncedSearchTerm: string;
  numberOfPages: (string | number)[];
}
const initialState: initialStateModel = {
  loading: false,
  allPosts: [],
  _allPostsMeta: { count: 0 },
  paginationArray: [],
  handleCurrentBtn: () => {},
  currentBtn: 1,
  setBtnByOne: () => {},
  searchTerm: '',
  setSearchTerm: () => dispatchEvent,
  setCurrentBtn: () => dispatchEvent,
  debouncedSearchTerm: '',
  numberOfPages: [],
};
export const PostsContext = React.createContext<initialStateModel>(initialState);

const PostsProviders: React.FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { loading, posts, paginationArray, handleCurrentBtn, currentBtn, setBtnByOne, setCurrentBtn, numberOfPages } = usePosts(
    articlesOnAPage,
    debouncedSearchTerm
  );
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <PostsContext.Provider
      value={{
        loading,
        allPosts: posts?.allPosts,
        paginationArray,
        handleCurrentBtn,
        currentBtn,
        setBtnByOne,
        searchTerm,
        setSearchTerm,
        setCurrentBtn,
        debouncedSearchTerm,
        numberOfPages,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProviders;

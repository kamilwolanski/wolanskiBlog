import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import handleNumbersOfButton from '../helpers/handleNumbersOfButton';
import { PostsResponseI, PostType } from '../providers/PostsProviders';

export const LEFT = 'left';
export const RIGHT = 'right';

export const usePagination = (
  posts: PostsResponseI | undefined,
  loading: boolean,
  postsOnPage: number,
  setNumberOfPages: Dispatch<SetStateAction<(string | number)[]>>,
  numberOfPages: any,
  currentBtn: number,
  setCurrentBtn: Dispatch<SetStateAction<number>>
) => {
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<(string | number)[]>([]);

  useEffect(() => {
    if (!loading && posts) {
      const array = [];

      for (let i = 1; i <= handleNumbersOfButton(posts?._allPostsMeta?.count, postsOnPage); i++) {
        array.push(i);
      }
      setNumberOfPages(array);
    }
  }, [loading, posts, postsOnPage]);

  let dotsInitial = '...';
  let dotsLeft = '... ';
  let dotsRight = ' ...';
  useEffect(() => {
    let tempNumberOfPages: (string | number)[] = [...arrOfCurrButtons];

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentBtn >= 1 && currentBtn <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentBtn === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentBtn > 4 && currentBtn < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentBtn - 2, currentBtn); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentBtn, currentBtn + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentBtn > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    }
    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentBtn, numberOfPages]);

  const handleCurrentBtn = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    if (e.currentTarget.value === dotsInitial) {
      setCurrentBtn(Number(arrOfCurrButtons[arrOfCurrButtons.length - 3]) + 1);
    } else if (e.currentTarget.value === dotsLeft) {
      setCurrentBtn(Number(arrOfCurrButtons[3]) - 2);
    } else if (e.currentTarget.value === dotsRight) {
      setCurrentBtn(Number(arrOfCurrButtons[3]) + 2);
    } else {
      setCurrentBtn(Number(e.currentTarget.value));
    }
  };

  const setBtnByOne = (direction: string) => {
    switch (direction) {
      case LEFT: {
        setCurrentBtn((prev) => (prev - 1 < 1 ? prev : prev - 1));
        break;
      }
      case RIGHT: {
        setCurrentBtn((prev) => (prev >= numberOfPages.length ? prev : prev + 1));
        break;
      }
      default: {
        return;
      }
    }
  };

  return { handleCurrentBtn, setBtnByOne, arrOfCurrButtons };
};

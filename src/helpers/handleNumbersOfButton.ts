const handleNumbersOfButton = (allPosts: number = 0, postsOnPage: number) => {
  return Math.ceil(allPosts / postsOnPage);
};

export default handleNumbersOfButton;

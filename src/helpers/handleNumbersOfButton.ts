const handleNumbersOfButton = (allPosts: number = 0, postsOnPage: number) => {
  console.log(allPosts);
  return Math.ceil(allPosts / postsOnPage);
};

export default handleNumbersOfButton;

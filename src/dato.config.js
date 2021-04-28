// dato.config.js
const htmlTag = require('html-tag');
// The `toHtml` function below helps transforming an array of structured objects like this:
// { tagName: 'meta', attributes: { name: 'description', content: 'foobar' } }
// into proper HTML tags:
// <meta name="description" content="foobar" />
const toHtml = (tags) => tags.map(({ tagName, attributes, content }) => htmlTag(tagName, attributes || {}, content)).join('');
module.exports = (dato, root, i18n) => {
  root.createPost(`content/about.md`, 'yaml', {
    frontmatter: {
      title: dato.aboutPage.title,
      type: 'about',
      seoMetaTags: toHtml(dato.aboutPage.seoMetaTags),
    },
    content: dato.aboutPage.content,
  });
};

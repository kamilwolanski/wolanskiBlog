import React, { useEffect, useRef } from 'react';
import { PostType } from '../../../providers/PostsProviders';
import { Wrapper, ImageWrapper, ContentWrapper, ButtonWrapper } from './Post.styles';
import { useDate } from '../../../hooks/useDate';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import { StructuredText, Image, ResponsiveImageType } from 'react-datocms';
// import { render } from 'datocms-structured-text-to-plain-text';
import { render, renderRule } from 'datocms-structured-text-to-html-string';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isHeading } from 'datocms-structured-text-utils';
import Interweave from 'interweave';
import { renderMetaTags } from 'react-datocms';
import { Helmet } from 'react-helmet';

function truncate(str: any, n: number) {
  // console.log(str);
  return str.length > n ? `${str.substr(0, n - 1)}...` : str;
}

type PostAdditionalType = {
  isFull?: boolean;
};

const Post: React.FC<PostType & PostAdditionalType> = ({ id, title, image, _createdAt, content, slug, _seoMetaTags, isFull = false }) => {
  const date = new Date(_createdAt);
  const {
    dateInPolish: { day, month, year },
  } = useDate(date);

  useEffect(() => {
    console.log(isFull);
    console.log(_seoMetaTags);
  }, [_seoMetaTags]);
  const wrapper = useRef<any>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (wrapper) {
      const elements = wrapper.current;
      gsap.fromTo(
        elements,
        { y: '+=30', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          // stagger: 1,
          duration: 1,
          scrollTrigger: {
            trigger: wrapper.current,
            // start: 'top 90%',
            end: 'bottom 20%',
          },
        }
      );
    }
  }, []);

  const options = {
    renderBlock({}) {
      return null;
    },
    renderText: (text: string) => text.replace(/Hello/, 'Howdy'),
    customRules: [
      renderRule(isHeading, ({ adapter: { renderNode }, node, children, key }) => {
        return renderNode(`h${node.level}`, { key }, children);
      }),
    ],
  };

  return (
    <Wrapper ref={wrapper}>
      {isFull && <Helmet>{renderMetaTags(_seoMetaTags)}</Helmet>}
      <ImageWrapper>
        <img src={image.url} alt="" />
      </ImageWrapper>
      <div className="post-info">
        <div className="post-info__published-date">
          <span className="post-info__day">{day} </span>
          <span className="post-info__month">{month}</span>
          <span className="post-info__year">{year}</span>
        </div>
        <h2 className="post-info__title">{title}</h2>
      </div>
      <ContentWrapper>
        {/* <div dangerouslySetInnerHTML={{ __html: render(content, options) }} /> */}
        {!isFull && <Interweave content={truncate(render(content, options), 320)} />}
        <StructuredText
          data={isFull ? content : null}
          renderBlock={({ record }) => {
            if (record.__typename === 'MyblockRecord' && isFull) {
              return <Image data={(record.image as any).responsiveImage} />;
            } else {
              return null;
            }
          }}
        />
      </ContentWrapper>
      <ButtonWrapper>
        {!isFull && (
          <Link
            to={{
              pathname: `/posts/post/${slug}`,
            }}
          >
            <Button>
              <span>Czytaj dalej</span>
            </Button>
          </Link>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Post;

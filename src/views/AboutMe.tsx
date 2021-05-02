import React, { useContext } from 'react';
import { AboutMeWrapper } from './AboutMe.styles';
import Main from '../components/organisms/Main/Main';
import { NavContext } from '../providers/NavProvider';
import { Helmet } from 'react-helmet';

const AboutMe: React.FC = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <>
      <Main blur={isOpen ? true : false}>
        <Helmet>
          {/* <meta charSet="utf-8" /> */}
          <title>To jest podstrona o mnie</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta name="description" content="Kamil wolanski coś tam coś tam" data-react-helmet="true" />
        </Helmet>
        <AboutMeWrapper>
          <h2>Więcej o mnie</h2>
          <p>
            Hej! Nazywam się Kamil Wolański i zamierzam zostać programistą. Moim głównym zainteresowaniem są technologie webowe na ścieżce frontendu,
            a używaną biblioteką React JS.
          </p>
          <p>
            Naukę programowania zacząłem na początku kwietnia 2020 roku natrafiając na filmik Bartosza Borowczyka (znanego w internecie pod pseudoniem
            Samuraj Programowania), gdzie prezentował jak zrobić podstawową stronę w oparciu o html i css. Początkowe, nieśmiałe zainteresowanie
            szybko zamieniło się w prawdziwą pasję na którą przeznaczam codziennie przynajmniej kilka solidnych godzin.
          </p>
          <p>
            Oprócz nowej pasji odkryłem, że lubię się uczyć nowych rzeczy. Branża IT zapewnia wydawołoby się nieskończoną ilość materiału do nauki,
            więc jestem szczęśliwy :D. Używanym przeze mnie frameworkiem frontendowym jest React JS którego lubię i cenię. w przyszłości chciałbym
            poznać zyskującego na popularności Vue JS, a może i nawet Angulara, jednak nie od razu. Zdążyłem się przekonać jak dużo czasu potrzeba na
            naukę programowania jak i na poznanie narzędzi potrzebnych do pracy programisty, dlatego staram się planować swój rozwój stopniowo. Dopóki
            nie poznam jakiejś techologii na zadawalojącym poziomie nie przechodzę do kolejnej.
          </p>
          <ul>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Context api + hooks</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>StyledComponents</li>
            <li>BEM</li>
            <li>RWD</li>
          </ul>
          <h2>Czemu blog?</h2>
          <p>
            Blog ma służyć jako przestrzeń do prezentowania moich projektów. Jest to miejsce dla potencjalnych pracodawców którzy będą mogli obejrzeć
            moje pracę, dowiedzieć się nieco o mnie, a także skontaktować się ze mną. Początkowo miałem tworzyć zwykły landing page który miałby być
            wizytówką, jednak pomyślałem, że tworząc bloga więcej się nauczę, a w przyszłości może zostanę blogerem.
          </p>
        </AboutMeWrapper>
      </Main>
    </>
  );
};

export default AboutMe;

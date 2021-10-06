import { ThemeProvider } from 'styled-components';
import Link from 'next/link';

import theme from '../../styles/theme';
import PageLayout from '../../components/PageLayout';

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='about_container'>
          <div className='about_nav'>
            <div>
              <h2 style={{ fontFamily: 'Signifier Italic' }}>
                3rd Curatorial Forum Becoming Local
              </h2>
            </div>
            <div>
              <Link href='/about/program'>
                <h2>Program</h2>
              </Link>
            </div>
            <div>
              <Link href='/about/past_events'>
                <h2>Past Events</h2>
              </Link>
            </div>
          </div>
          <div className='about_content'>
            <h3>Why is Becoming Local?</h3>
            <div className='about_content_1'>
              <p>
                Why is Becoming Local? When you hear about this word ‘local’,
                you immediately think of other words such as global, rural,
                culture, minor, site, space, place etc. Also you realize that
                all places can be local, as well as the place where you are now.
                This is why we choose this term ‘local’ as the theme.
              </p>
              <p>
                The local, which refers to the actual space, is also important
                but it should be started from the point that the local is
                conceptually variable. In other words, the local does not
                already exist a priori. Instead, the complex social relations
                and various practices are intertwined when we refer to the
                local. In the process of entanglement, the local is fluid and
                constantly produced/reproduced within countless networks.
                Therefore, how to construct the local becomes important, and it
                is bound to resonate in some way with the present of
                researchers, artists, etc.
              </p>
              <p>
                COVID-19 pandemic means that the current situation is global
                scale. In this situation, “what can be done here where an
                individual is stepping on two feet” is the most important
                question. Through the concept of local, we ask group of artists
                to consider this question. Avoiding a single conclusion,
                participants will integrate events and phenomena within
                segmented time and space to capture the differences in various
                aspects of hereness. Through this, we try to lay the groundwork
                for critically thinking about the current dominant discourses.
                In the end, we are asking a fundamental question about the
                attitude we need to maintain right now through the Corona era.
              </p>
              <p>
                Based on the artistic research, group of artists are
                collaborating to run this project. Concentrating on aspects of
                the theme ‘local’, participants choose the method of research.
                The method of research can be varied by the intention of each
                participant, but the result of project will be the collaboration
                of artists.
              </p>
            </div>
            <div className='about_content_2'>
              <div>
                <span>Period</span>
                <span>September 2020 - May 2021</span>
              </div>
              <div>
                <span>Organized by</span>
                <span>GyeongGi-do, GeyongGi Cultural Foundation</span>
              </div>
              <div>
                <span>Curated by</span>
                <span>Asian Artist Moving Image Platform</span>
              </div>
              <div>
                <span>Participating Artists and Writers</span>
                <span>
                  KIM Minjung, Sabina Hyoju AHN,<br></br>
                  SHIN Wonjung(Diana Band),<br></br>
                  John TORRES,<br></br>
                  Taiki SAKPISIT,<br></br>
                  AAMP(KIM Eunjung, PHEE Hun, CHO Inhan),<br></br>
                  Lukas BRASISKIS,<br></br>
                  Selina BONELLI,<br></br>
                  PARK Sohyun,<br></br>
                  JEONG Jidon<br></br>
                </span>
              </div>
              <div>
                <span>Programmers</span>
                <span>
                  Artist Workshop Project Online Archival Exhibition e-journal
                  <br></br>
                  Online Archival Exhibition
                </span>
              </div>
              <div className='center'>
                <p>
                  3rd Curatorial Forum 2020-2021 is organized by <br></br>
                  GyeongGi Cultural Foundation, and developed and <br></br>
                  curated by Asian Artist Moving Image Platform(AAMP).<br></br>{' '}
                  Artists Workshop Project and e-journal<br></br> in
                  collaboration with all members of participating artists and
                  writers
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default About;

import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import theme from '../../styles/theme';
import PageLayout from '../../components/PageLayout';

const PastEvents = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='about_container'>
          <div className='about_nav'>
            <div>
              <Link href='/about'>
                <h2>3rd Curatorial Forum Becoming Local</h2>
              </Link>
            </div>
            <div>
              <Link href='/about/program'>
                <h2>Program</h2>
              </Link>
            </div>
            <div>
              <Link href='/about/past_events'>
                <h2 style={{ fontStyle: 'italic' }}>Past Events</h2>
              </Link>
            </div>
          </div>
          <div className='about_content'>
            <div className='about_content_1'>
              <div>
                <span>Artist Wrokshop Project</span>
                <span>Work In Progress</span>
                <span>Thailand, Philippine, Korea</span>
                <p>
                  The Asian Artist Moving Image Platform is working on artistic
                  research about historical events and phenomena that penetrate
                  the contemporary, starting with the concept of “local” as the
                  theme of the 3rd forum in 2020-2021. This research work is a
                  one-year workshop project with eight artists from three Asian
                  countries, and the final results will be introduced in April
                  2021. In the workshop project, we critically think about
                  existing dominant concepts and discourses, and try to practice
                  the possibility of new collectiveness through the process of
                  becoming local. This online forum consists of presentations
                  and discussions centered on the responses of participating
                  artists to this possibility and the practical methodology of
                  “Becoming Local”.
                </p>
              </div>
              <div className='title_bar'>
                <span>November 28, 2020</span>
              </div>
              <div>
                <span>Artist Wrokshop Project</span>
                <span>Work In Progress</span>
                <span>Thailand, Philippine, Korea</span>
                <p>
                  The Asian Artist Moving Image Platform is working on artistic
                  research about historical events and phenomena that penetrate
                  the contemporary, starting with the concept of “local” as the
                  theme of the 3rd forum in 2020-2021. This research work is a
                  one-year workshop project with eight artists from three Asian
                  countries, and the final results will be introduced in April
                  2021. In the workshop project, we critically think about
                  existing dominant concepts and discourses, and try to practice
                  the possibility of new collectiveness through the process of
                  becoming local. This online forum consists of presentations
                  and discussions centered on the responses of participating
                  artists to this possibility and the practical methodology of
                  “Becoming Local”.
                </p>
              </div>
              <div>
                <span>Taiki Sakpisit</span>
                <span>Reverie</span>
                <p>
                  In Reverie, I have started out to investigate the cultural and
                  sociological aspects evolving around Mor lam Phi Fa, a female
                  spiritualist who treats physical illness through the forms of
                  ritual practices, in an ancient city in northeastern Thailand
                  named Khon Sawan village. As I have engaged in the present
                  life of the villagers and learned about their personal
                  memories and dreams, I have become more intrigued by the dark
                  supernatural forces manifested in the myths of Phi Pop, the
                  human and animal possessed entities who devour the internal
                  organs and raw meat. Reverie is a poetic meditation on the
                  lingering darkness above the surface of spiritual landscape
                  and like the spirit searching to possess the host it is an
                  oneiric voyage into eternal damnation.
                </p>
              </div>
              <div className='title_bar'>
                <span>December 5, 2020</span>
              </div>
              <div>
                <span>Artist Wrokshop Project</span>
                <span>Work In Progress</span>
                <span>Thailand, Philippine, Korea</span>
                <p>
                  The Asian Artist Moving Image Platform is working on artistic
                  research about historical events and phenomena that penetrate
                  the contemporary, starting with the concept of “local” as the
                  theme of the 3rd forum in 2020-2021. This research work is a
                  one-year workshop project with eight artists from three Asian
                  countries, and the final results will be introduced in April
                  2021. In the workshop project, we critically think about
                  existing dominant concepts and discourses, and try to practice
                  the possibility of new collectiveness through the process of
                  becoming local. This online forum consists of presentations
                  and discussions centered on the responses of participating
                  artists to this possibility and the practical methodology of
                  “Becoming Local”.
                </p>
              </div>
              <div>
                <span>Taiki Sakpisit</span>
                <span>Reverie</span>
                <p>
                  In Reverie, I have started out to investigate the cultural and
                  sociological aspects evolving around Mor lam Phi Fa, a female
                  spiritualist who treats physical illness through the forms of
                  ritual practices, in an ancient city in northeastern Thailand
                  named Khon Sawan village. As I have engaged in the present
                  life of the villagers and learned about their personal
                  memories and dreams, I have become more intrigued by the dark
                  supernatural forces manifested in the myths of Phi Pop, the
                  human and animal possessed entities who devour the internal
                  organs and raw meat. Reverie is a poetic meditation on the
                  lingering darkness above the surface of spiritual landscape
                  and like the spirit searching to possess the host it is an
                  oneiric voyage into eternal damnation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default PastEvents;

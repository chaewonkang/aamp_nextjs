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
              <span>Becoming-Local</span>
              <p>
                The current situation of a rise in neo-fascism alongside the
                COVID-19 pandemic is the result of the era of neoliberal
                capitalism. This social atmosphere leads us to refocus on the
                idea of ‘becoming’ in a way that indicates that the epistemology
                of the world is not fixed and determined. Therefore, the status
                quo needs to be re-imagined, challenging us to constantly exist,
                act and think in new ways in response to sudden unexpected
                changes in the world.
              </p>
              <p>
                The artistic workshop
                <span class='text-style-2'>Becoming-Local</span>suggests
                epistemological changes to discourses about what the idea of
                “local” means under the centre/periphery model that is
                internalized in our daily lives. Moreover, it is concerned with
                how artists’ practice can respond to these crises and changes in
                a socially distanced society.
              </p>
              <p>
                <span class='text-style-3'>Becoming-Local</span>is a ‘Public
                Sphere’ in which the interplay of heterogeneous and hybrid
                elements is revealed in multi-layers around the concept of the
                local. Breaking away from the traditional geographical
                understanding of the concept of 'local', it becomes a place
                where the many different viewpoints and methodologies of
                participating artists cross, collide, and converge. The purpose
                is to enable the local subject to actively participate in the
                process of subjectivisation in a complex and multi-layered
                manner.
              </p>
              <p>
                This practice-led research workshop will examine the possibility
                that participating artists understand it as a process of
                becoming, and change their habitual way of thinking and
                construction of ideas through artistic responses and repetition.
                Moreover, the artists as co-agents affect each other and will
                participate in the workshop by individually witnessing
                performative practice and its process. We expect this workshop
                to constantly reconstruct multiple and diverse performative
                discourse with both the direct and indirect participation of a
                number of artists.
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default PastEvents;

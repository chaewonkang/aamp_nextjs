import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='keyword_container'>
          <div>
            <span>Abject</span>
            <span>Ai</span>
            <span>Air</span>
            <span>Akademies</span>
            <span>
              Alchemical
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transmutation
            </span>
            <span>Artist</span>
            <span>Badvibes</span>
            <span>Border</span>
            <span>Caring</span>
            <span>Connected</span>
            <span>Covid19</span>
            <span>Daily Life</span>
            <span>Denvicky</span>
            <span>Dialog</span>
            <span>Digital</span>
          </div>
          <div>
            <span>Digital</span>
            <span>Disembodiment</span>
            <span>Divination</span>
            <span>Entanglement</span>
            <span>Ergliffenheit</span>
            <span>Eschatology</span>
            <span>Findings</span>
            <span>Forest</span>
            <span>Foresta</span>
            <span>Germany</span>
            <span>Gesture</span>
            <span>Interaction</span>
            <span>Interlock</span>
            <span>Intro2barter</span>
            <span>Learning</span>
            <span>Local</span>
          </div>
          <div>
            <span>Lockdown</span>
            <span>Machine</span>
            <span>Minority</span>
            <span>Language</span>
            <span>Mountain</span>
            <span>Mysticism</span>
            <span>Narratives</span>
            <span>Native</span>
            <span>Network</span>
            <span>Non-Verbal</span>
            <span>Noting</span>
            <span>Onta</span>
            <span>Patkay</span>
            <span>Phantasmagoria</span>
            <span>Residency</span>
            <span>Roam</span>
          </div>
          <div>
            <span>Schloss</span>
            <span>Sensory Stimulus</span>
            <span>Settle Down</span>
            <span>Shady</span>
            <span>Solitude</span>
            <span>Sound</span>
            <span>Spectrality</span>
            <span>Stress</span>
            <span>Stuttgart</span>
            <span>Thing-In-Itself</span>
            <span>Tide</span>
            <span>Touch The Ground</span>
            <span>Waiting</span>
            <span>Walk</span>
            <span>Xeo</span>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Index;

import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

const imgArray = [
  '../static/images/example.png',
  '../static/images/example2.png',
];

const Index = () => {
  const [artist1, setArtist1] = useState(false);
  const [artist2, setArtist2] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, [artist1, artist2, loading]);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <>
          <PageLayout>
            {artist1 && (
              <div className='thumbnail_container'>
                <img id='thumbnail' src={imgArray[0]}></img>
              </div>
            )}
            {artist2 && (
              <div className='thumbnail_container'>
                <img id='thumbnail' src={imgArray[1]}></img>
              </div>
            )}
            <div className='keyword_container'>
              <div>
                <span
                  onMouseEnter={() => {
                    setArtist1(true);
                    console.log(`onMouseEnter: ${artist1}`);
                  }}
                  onMouseLeave={() => {
                    setArtist1(false);
                    console.log(`onMouseAway: ${artist1}`);
                  }}
                  style={artist1 ? { fontStyle: 'italic' } : null}
                >
                  Abject
                </span>
                <span
                  onMouseEnter={() => {
                    setArtist2(true);
                    console.log(`onMouseEnter: ${artist1}`);
                  }}
                  onMouseLeave={() => {
                    setArtist2(false);
                    console.log(`onMouseAway: ${artist1}`);
                  }}
                  style={artist2 ? { fontStyle: 'italic' } : null}
                >
                  Ai
                </span>
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
            <div className='footer_container'>
              <span>Becoming-Local</span>
            </div>
          </PageLayout>
        </>
      )}
    </ThemeProvider>
  );
};

export default Index;

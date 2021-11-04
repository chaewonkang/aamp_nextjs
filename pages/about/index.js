import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';

import theme from '../../styles/theme';
import PageLayout from '../../components/PageLayout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const About = ({ locale }) => {
  const { t } = useTranslation('about');

  const [mode, setMode] = useState(t('mode'));

  useEffect(() => {
    if (t('mode') == 'en') {
      setMode('en');
      console.log("t('mode')");
      console.log(t('mode'));
      console.log(`mode is ${mode}`);
    } else {
      setMode('ko');
      console.log(`mode is ${mode}`);
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='about_container'>
          <div className='about_nav'>
            <div>
              <h2 style={{ fontFamily: 'Signifier Italic' }}>
                {t('subject1')}
              </h2>
            </div>
            <div>
              <Link href='/about/program'>
                <h2>{t('subject2')}</h2>
              </Link>
            </div>
            <div>
              <Link href='/about/past_events'>
                <h2>{t('subject3')}</h2>
              </Link>
            </div>
          </div>
          <div className='about_content'>
            <h3>{t('title1')}</h3>
            <div className='about_content_1'>
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
              <p>{t('p4')}</p>
            </div>
            <div className='about_content_2'>
              <div>
                <span>{t('title2')}</span>
                <span>{t('p5')}</span>
              </div>
              <div>
                <span>{t('title6')}</span>
                <span>{t('p6')}</span>
              </div>
              <div>
                <span>{t('title7')}</span>
                <span>{t('p7')}</span>
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
                  curated by Asian Artist Moving Image Platform(AAMP).
                  <br></br> Artists Workshop Project and e-journal<br></br> in
                  collaboration with all members of participating artists and
                  writers
                </p>
              </div>
            </div>
          </div>
          <div className='sponsor'>
            <img src='../../static/images/sponsor.png'></img>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => {
  console.log('locale of getStaticProps', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
    },
  };
};

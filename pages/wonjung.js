import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SlideShow from '../components/SlideShow';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const slideArr = [
  '../static/images/wonjung/slide1.jpg',
  '../static/images/wonjung/slide2.jpg',
  '../static/images/wonjung/slide3.jpg',
];

const soundObj = [
  {
    title: 'aluminum_tunnel01',
    img: '../static/images/wonjung/aluminum_tunnel01-min.jpg',
    sound: [
      '../static/images/wonjung/aluminum_tunner01_01.mp3',
      '../static/images/wonjung/aluminum_tunner01_02.mp3',
      '../static/images/wonjung/aluminum_tunner01_03.mp3',
      '../static/images/wonjung/aluminum_tunner01_04.mp3',
    ],
    soundName: [
      'aluminum_tunner01_01',
      'aluminum_tunner01_02',
      'aluminum_tunner01_03',
      'aluminum_tunner01_04',
    ],
  },
  {
    title: 'aluminum_tunnel02',
    img: '../static/images/wonjung/aluminum_tunnel02-min.jpg',
    sound: [
      '../static/images/wonjung/aluminum_tunner02_01.mp3',
      '../static/images/wonjung/aluminum_tunner02_02.mp3',
      '../static/images/wonjung/aluminum_tunner02_03.mp3',
      '../static/images/wonjung/aluminum_tunner02_04.mp3',
    ],
    soundName: [
      'aluminum_tunner02_01',
      'aluminum_tunner02_02',
      'aluminum_tunner02_03',
      'aluminum_tunner02_04',
    ],
  },
  {
    title: 'barrel',
    img: '../static/images/wonjung/barrel-min.jpg',
    sound: [
      '../static/images/wonjung/barrel01.mp3',
      '../static/images/wonjung/barrel02.mp3',
      '../static/images/wonjung/barrel03.mp3',
      '../static/images/wonjung/barrel04.mp3',
    ],
    soundName: ['barrel01', 'barrel02', 'barrel03', 'barrel04'],
  },
  {
    title: 'bongbong',
    img: '../static/images/wonjung/bongbong-min.jpg',
    sound: [
      '../static/images/wonjung/bongbong01.mp3',
      '../static/images/wonjung/bongbong02.mp3',
      '../static/images/wonjung/bongbong03.mp3',
      '../static/images/wonjung/bongbong04.mp3',
    ],
    soundName: ['bongbong01', 'bongbong02', 'bongbong03', 'bongbong04'],
  },
  {
    title: 'copper',
    img: '../static/images/wonjung/copper-min.jpg',
    sound: [
      '../static/images/wonjung/copper01.mp3',
      '../static/images/wonjung/copper02.mp3',
      '../static/images/wonjung/copper03.mp3',
      '../static/images/wonjung/copper04.mp3',
    ],
    soundName: ['copper01', 'copper02', 'copper03', 'copper04'],
  },
  {
    title: 'drawer',
    img: '../static/images/wonjung/drawer-min.jpg',
    sound: [
      '../static/images/wonjung/drawer01.mp3',
      '../static/images/wonjung/drawer02.mp3',
      '../static/images/wonjung/drawer03.mp3',
      '../static/images/wonjung/drawer04.mp3',
    ],
    soundName: ['drawer01', 'drawer02', 'drawer03', 'drawer04'],
  },
  {
    title: 'funnel',
    img: '../static/images/wonjung/funnel-min.jpg',
    sound: [
      '../static/images/wonjung/funnel01.mp3',
      '../static/images/wonjung/funnel02.mp3',
      '../static/images/wonjung/funnel03.mp3',
      '../static/images/wonjung/funnel04.mp3',
    ],
    soundName: ['funnel01', 'funnel02', 'funnel03', 'funnel04'],
  },
  {
    title: 'gas_cylinder',
    img: '../static/images/wonjung/gas_cylinder-min.jpg',
    sound: [
      '../static/images/wonjung/gas_cylinder01.mp3',
      '../static/images/wonjung/gas_cylinder02.mp3',
      '../static/images/wonjung/gas_cylinder03.mp3',
      '../static/images/wonjung/gas_cylinder04.mp3',
    ],
    soundName: [
      'gas_cylinder01',
      'gas_cylinder02',
      'gas_cylinder03',
      'gas_cylinder04',
    ],
  },
  {
    title: 'hose',
    img: '../static/images/wonjung/hose-min.jpg',
    sound: [
      '../static/images/wonjung/hose01.mp3',
      '../static/images/wonjung/hose02.mp3',
      '../static/images/wonjung/hose03.mp3',
      '../static/images/wonjung/hose04.mp3',
    ],
    soundName: ['hose01', 'hose02', 'hose03', 'hose04'],
  },
  {
    title: 'suitcase',
    img: '../static/images/wonjung/suitcase-min.jpg',
    sound: [
      '../static/images/wonjung/suitcase01.mp3',
      '../static/images/wonjung/suitcase02.mp3',
      '../static/images/wonjung/suitcase03.mp3',
      '../static/images/wonjung/suitcase04.mp3',
    ],
    soundName: ['suitcase01', 'suitcase02', 'suitcase03', 'suitcase04'],
  },
  {
    title: 'tissue',
    img: '../static/images/wonjung/tissue-min.jpg',
    sound: [
      '../static/images/wonjung/tissue01.mp3',
      '../static/images/wonjung/tissue02.mp3',
      '../static/images/wonjung/tissue03.mp3',
      '../static/images/wonjung/tissue04.mp3',
    ],
    soundName: ['tissue01', 'tissue02', 'tissue03', 'tissue04'],
  },
  {
    title: 'yellow',
    img: '../static/images/wonjung/yellow-min.jpg',
    sound: [
      '../static/images/wonjung/yellow01.mp3',
      '../static/images/wonjung/yellow02.mp3',
      '../static/images/wonjung/yellow03.mp3',
      '../static/images/wonjung/yellow04.mp3',
    ],
    soundName: ['yellow01', 'yellow02', 'yellow03', 'yellow04'],
  },
];

const slides = [
  '../static/images/wonjung/slide1.jpg',
  '../static/images/wonjung/slide2.jpg',
  '../static/images/wonjung/slide3.jpg',
];

const dataSet = [
  {
    index: 0,
    flag: 'taiki',
    artist: 'Taiki Sakpisit',
    keyword: [
      'alchemical transmutation',
      'mysticism',
      'phantasmagoria',
      'disembodiment',
      'sensory stimulus',
      'eschatology',
      'spectrality',
    ],
    thumb: '../static/images/taiki.jpg',
  },
  {
    index: 1,
    flag: 'wonjung',
    artist: 'Wonjung Shin',
    keyword: [
      'gesture',
      'sounda',
      'network',
      'abject',
      'non-verbal',
      'dialog',
      'stress',
      'thing-in-itself',
      'noting',
    ],
    thumb: '../static/images/wonjung.jpg',
  },
  {
    index: 2,
    flag: 'sabina',
    artist: 'Sabina Hyoju AHN',
    keyword: [
      'covid19',
      'ai',
      'machine learning',
      'daily life',
      'soundb',
      'local',
      'digital',
      'artist',
      'residency',
      'air',
      'germany',
      'stuttgart',
      'akademies',
      'schloss',
      'solitude',
      'forest',
      'walk',
      'lockdown',
    ],
    thumb: '../static/images/sabina.png',
  },
  {
    index: 3,
    flag: 'aamp',
    artist: 'AAMP',
    keyword: [
      'onta',
      'caring',
      'ergliffenheit',
      'minority language',
      'xeo',
      'mountain',
      'foresta',
      'entanglement',
      'touch the ground',
    ],
    thumb: '../static/images/aamp.png',
  },
  {
    index: 4,
    flag: 'minjung',
    artist: 'Minjung Kim',
    keyword: [
      'connected',
      'border',
      'interaction',
      'settle down',
      'interlock',
      'tide',
      'native',
      'roam',
    ],
    thumb: '../static/images/minjung.jpg',
  },
  {
    index: 5,
    flag: 'john',
    artist: 'John Torres',
    keyword: [
      'intro2barter',
      'denvicky',
      'findings',
      'felicity',
      'patkay',
      'shady',
      'waiting',
      'badvibes',
      'narratives',
    ],
    thumb: '../static/images/john.png',
  },
];

const Index = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [thumbUrl, setThumbUrl] = useState(false);
  const [flag, setFlag] = useState('');
  const [isKeyClicked, setIsKeyClicked] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('wonjung');
  const locale = router.locale;

  let keywordArr = [].concat.apply(
    [],
    dataSet.map((item) => item.keyword)
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);

    const spanTarget = [...document.getElementsByClassName('keyword')];

    spanTarget
      .filter((item) => {
        if (!item.className.includes('wonjung')) return item;
      })
      .map((item) => (item.style.opacity = '0'));

    const italicTarget = [...document.getElementsByClassName('wonjung')];
    italicTarget.map((item) => (item.style.fontFamily = 'Signifier Italic'));
  }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <>
          <PageLayout>
            {thumbUrl && (
              <div className='thumbnail_container'>
                <img id='thumbnail' src={thumbUrl}></img>
              </div>
            )}
            <div id='mobileOnly' className='mobile_keyword_container'>
              <div>
                {dataSet[1].keyword.map((item) => {
                  return <span>{item}</span>;
                })}
              </div>
            </div>
            <div className='keyword_container_wrapper'>
              <div
                className='keyword_container'
                onMouseOut={() => {
                  setIsItalic(false);
                }}
              >
                <div>
                  {keywordArr &&
                    keywordArr
                      .sort()
                      .slice(0, 15)
                      .map((item, index) => {
                        if (item.includes(' ') && item.length > 5) {
                          const idx = item.indexOf(' ');
                          return (
                            <>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                key={item}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                              >
                                {item.slice(0, idx)}
                              </span>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                                style={{ paddingLeft: 30 }}
                              >
                                {item.slice(idx, item.length)}
                              </span>
                            </>
                          );
                        }
                        return (
                          <span
                            className={`${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })} keyword`}
                            key={item}
                            onMouseOver={() => {
                              if (!isKeyClicked) {
                                setTimeout(() => setIsItalic(true), 100);
                                setKeyword(item);
                              }
                            }}
                            onMouseOut={() => {
                              setIsItalic(false);
                              setIsKeyClicked(false);
                            }}
                          >
                            {item}
                          </span>
                        );
                      })}
                </div>
                <div>
                  {keywordArr &&
                    keywordArr
                      .sort()
                      .slice(15, 31)
                      .map((item, index) => {
                        if (item.includes(' ') && item.length > 5) {
                          const idx = item.indexOf(' ');
                          return (
                            <>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                key={item}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                              >
                                {item.slice(0, idx)}
                              </span>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                                style={{ paddingLeft: 30 }}
                              >
                                {item.slice(idx, item.length)}
                              </span>
                            </>
                          );
                        }
                        return (
                          <span
                            className={`${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })} keyword`}
                            key={item}
                            onMouseOver={() => {
                              setTimeout(() => setIsItalic(true), 100);
                              setKeyword(item);
                            }}
                            onMouseOut={() => {
                              setIsItalic(false);
                              setIsKeyClicked(false);
                            }}
                          >
                            {item}
                          </span>
                        );
                      })}
                </div>
                <div>
                  {keywordArr &&
                    keywordArr
                      .sort()
                      .slice(31, 46)
                      .map((item, index) => {
                        if (item.includes(' ') && item.length > 5) {
                          const idx = item.indexOf(' ');
                          return (
                            <>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                key={item}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                              >
                                {item.slice(0, idx)}
                              </span>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                                style={{ paddingLeft: 30 }}
                              >
                                {item.slice(idx, item.length)}
                              </span>
                            </>
                          );
                        }
                        return (
                          <span
                            className={`${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })} keyword`}
                            key={item}
                            onMouseOver={() => {
                              setTimeout(() => setIsItalic(true), 100);
                              setKeyword(item);
                            }}
                            onMouseOut={() => {
                              setIsItalic(false);
                              setIsKeyClicked(false);
                            }}
                          >
                            {item}
                          </span>
                        );
                      })}
                </div>
                <div>
                  {keywordArr &&
                    keywordArr
                      .sort()
                      .slice(46, 61)
                      .map((item, index) => {
                        if (item.includes(' ') && item.length > 5) {
                          const idx = item.indexOf(' ');
                          return (
                            <>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                key={item}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                              >
                                {item.slice(0, idx)}
                              </span>
                              <span
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                onMouseOver={() => {
                                  if (!isKeyClicked) {
                                    setTimeout(() => setIsItalic(true), 100);
                                    setKeyword(item);
                                  }
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                                style={{ paddingLeft: 30 }}
                              >
                                {item.slice(idx, item.length)}
                              </span>
                            </>
                          );
                        }
                        if (item === 'sounda' || item === 'soundb')
                          return (
                            <span
                              key={item}
                              className={`${dataSet
                                .map((el) => {
                                  if (el.keyword.includes(item)) return el.flag;
                                })
                                .filter((el) => {
                                  if (el != ',') return el;
                                })} keyword`}
                              onMouseOver={() => {
                                setTimeout(() => setIsItalic(true), 100);
                                setKeyword(item);
                              }}
                              onMouseOut={() => {
                                setIsItalic(false);
                                setIsKeyClicked(false);
                              }}
                            >
                              {item.slice(0, 5)}
                            </span>
                          );
                        return (
                          <span
                            key={item}
                            className={`${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })} keyword`}
                            onMouseOver={() => {
                              setTimeout(() => setIsItalic(true), 100);
                              setKeyword(item);
                            }}
                            onMouseOut={() => {
                              setIsItalic(false);
                              setIsKeyClicked(false);
                            }}
                          >
                            {item}
                          </span>
                        );
                      })}
                </div>
              </div>
            </div>
            <div
              className={
                locale === 'en'
                  ? 'content_container'
                  : 'ko_type content_container'
              }
            >
              <div className='title_container'>
                <div className='left_arrow'>
                  <span>◀︎</span>
                </div>
                <div>
                  <span>{t('title')}</span>
                  <span>{t('artist')}</span>
                </div>
                <div className='right_arrow'>
                  <span>▶︎</span>
                </div>
              </div>
              <div className='description_container'>
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>{t('p4')}</p>
                <p>{t('p5')}</p>
              </div>
              <div className='video_container'>
                <SlideShow imgPath={slideArr}></SlideShow>
              </div>
              <div className='module_container'>
                <div className='module_row'>
                  {soundObj &&
                    soundObj.map((sound) => {
                      return (
                        <div className='module'>
                          <div className='image_row'>
                            <span>{sound.title}</span>
                            <img src={sound.img}></img>
                          </div>
                          <div className='sound_row'>
                            <div>
                              <span>►</span>
                              {sound.soundName[0]}
                            </div>
                            <div>
                              <span>►</span>
                              {sound.soundName[1]}
                            </div>
                            <div>
                              <span>►</span>
                              {sound.soundName[2]}
                            </div>
                            <div>
                              <span>►</span>
                              {sound.soundName[3]}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className='artist_info_container'>
                <div>{t('artist')}</div>
                <div>
                  <p>{t('artistInfo')}</p>
                </div>
              </div>
            </div>

            <div className='keyword_span'>
              <Link href='/'>
                <span>Keywords</span>
              </Link>
            </div>
          </PageLayout>
        </>
      )}
    </ThemeProvider>
  );
};

export default Index;

export const getStaticProps = async ({ locale }) => {
  console.log('locale of getStaticProps', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['wonjung'])),
    },
  };
};

import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';
import playBtn from '../static/images/playbutton.png';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


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
    thumb: '../static/images/aamp.jpg',
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
  const { t } = useTranslation('aamp');
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
        if (!item.className.includes('aamp')) return item;
      })
      .map((item) => (item.style.opacity = '0'));

    const italicTarget = [...document.getElementsByClassName('aamp')];
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
                  <Link href='/minjung'>
                    <span>◀︎</span>
                  </Link>
                </div>
                <div>
                  <span>{t('artist')}</span>
                  <span>{t('title')}</span>
                </div>
                <div className='right_arrow'>
                  <Link href='/john'>
                    <span>▶︎</span>
                  </Link>
                </div>
              </div>
              <div className='description_container'>
                <p>
                  {t('text1')}
                </p>
                <p>
                  {t('text2')}
                </p>
				<p>
                  {t('subtext')}
                </p>
              </div>
              <div className='video_container'>
                <img src={dataSet[3].thumb} />
              </div>
              <div className='artist_info_container'>
                <div>{t("artist")}</div>
                <div>
                  <p>
                   {t("artistInfo")}
                  </p>
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
		...(await serverSideTranslations(locale, ['aamp'])),
	  },
	};
  };

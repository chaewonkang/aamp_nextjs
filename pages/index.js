import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SlideShow from '../components/SlideShow';

const delay = 5000;

const thumbArr = [
  { img: '../static/images/taiki.jpg', artist: 'taiki' },
  { img: '../static/images/wonjung.jpg', artist: 'wonjung' },
  { img: '../static/images/aamp.jpg', artist: 'aamp' },
  { img: '../static/images/john.jpg', artist: 'john' },
  { img: '../static/images/sabina.jpg', artist: 'sabina' },
  { img: '../static/images/minjung.jpg', artist: 'minjung' },
];

const dataSet = [
  {
    index: 0,
    flag: 'taiki',
    artist: 'Taiki Sakpisit',
    keyword: [
      'alchemical Transmutation',
      'mysticism',
      'phantasmagoria',
      'disembodiment',
      'sensory Stimulus',
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
    thumb: '../static/images/sabina.jpg',
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
    thumb: '../static/images/john.jpg',
  },
];

const Index = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [thumbUrl, setThumbUrl] = useState('');
  const [flag, setFlag] = useState('');
  const [curIdx, setCurIdx] = useState(0);
  const [isKeyClicked, setIsKeyClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === dataSet.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  let keywordArr = [].concat.apply(
    [],
    dataSet.map((item) => item.keyword)
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);

    const spanTarget = [...document.getElementsByClassName('keyword')];

    isKeyClicked
      ? spanTarget
          .filter((item) => {
            if (!item.className.includes(flag)) return item;
          })
          .map((item) => (item.style.opacity = '0'))
      : null;

    dataSet.map((item) => {
      if (!isKeyClicked && item.keyword.includes(keyword)) {
        setFlag(item.flag);
        setThumbUrl(item.thumb);
      } else return null;
    });

    const italicTarget = [...document.getElementsByClassName(flag)];

    isItalic
      ? italicTarget.map((item) => (item.style.fontFamily = 'Signifier Italic'))
      : italicTarget.map(
          (item) => (item.style.fontFamily = 'Signifier Regular')
        );
  }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked, curIdx]);

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
            <div className='mobile_thumbnail_container'>
              <SlideShow isMobile={true} imgPath={thumbArr}></SlideShow>
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
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                            </>
                          );
                        }
                        return (
                          <Link
                            href={`/${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })}`}
                          >
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
                                  setTimeout(() => setIsItalic(true), 50);
                                  setKeyword(item);
                                }
                              }}
                              onMouseOut={() => {
                                setIsItalic(false);
                                setIsKeyClicked(false);
                              }}
                              onClick={() => {
                                setIsKeyClicked(true);
                              }}
                            >
                              {item}
                            </span>
                          </Link>
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
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                            </>
                          );
                        }
                        return (
                          <Link
                            href={`/${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })}`}
                          >
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
                                setTimeout(() => setIsItalic(true), 50);
                                setKeyword(item);
                              }}
                              onMouseOut={() => {
                                setIsItalic(false);
                                setIsKeyClicked(false);
                              }}
                              onClick={() => {
                                setIsKeyClicked(true);
                              }}
                            >
                              {item}
                            </span>
                          </Link>
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
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>{' '}
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                            </>
                          );
                        }
                        return (
                          <Link
                            href={`/${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })}`}
                          >
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
                                setTimeout(() => setIsItalic(true), 50);
                                setKeyword(item);
                              }}
                              onMouseOut={() => {
                                setIsItalic(false);
                                setIsKeyClicked(false);
                              }}
                              onClick={() => {
                                setIsKeyClicked(true);
                              }}
                            >
                              {item}
                            </span>
                          </Link>
                        );
                      })}
                </div>
                <div>
                  {keywordArr &&
                    keywordArr
                      .sort()
                      .slice(46, 61)
                      .map((item, index) => {
                        if (item === 'sounda' || item === 'soundb')
                          return (
                            <Link
                              href={`/${dataSet
                                .map((el) => {
                                  if (el.keyword.includes(item)) return el.flag;
                                })
                                .filter((el) => {
                                  if (el != ',') return el;
                                })}`}
                            >
                              <span
                                key={item}
                                className={`${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })} keyword`}
                                onMouseOver={() => {
                                  setTimeout(() => setIsItalic(true), 50);
                                  setKeyword(item);
                                }}
                                onMouseOut={() => {
                                  setIsItalic(false);
                                  setIsKeyClicked(false);
                                }}
                                onClick={() => {
                                  setIsKeyClicked(true);
                                }}
                              >
                                {item.slice(0, 5)}
                              </span>
                            </Link>
                          );
                        if (item.includes(' ') && item.length > 5) {
                          const idx = item.indexOf(' ');
                          return (
                            <>
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                              <Link
                                href={`/${dataSet
                                  .map((el) => {
                                    if (el.keyword.includes(item))
                                      return el.flag;
                                  })
                                  .filter((el) => {
                                    if (el != ',') return el;
                                  })}`}
                              >
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
                                      setTimeout(() => setIsItalic(true), 50);
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
                              </Link>
                            </>
                          );
                        }
                        return (
                          <Link
                            href={`/${dataSet
                              .map((el) => {
                                if (el.keyword.includes(item)) return el.flag;
                              })
                              .filter((el) => {
                                if (el != ',') return el;
                              })}`}
                          >
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
                                setTimeout(() => setIsItalic(true), 50);
                                setKeyword(item);
                              }}
                              onMouseOut={() => {
                                setIsItalic(false);
                                setIsKeyClicked(false);
                              }}
                              onClick={() => {
                                setIsKeyClicked(true);
                              }}
                            >
                              {item}
                            </span>
                          </Link>
                        );
                      })}
                </div>
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

export const getStaticProps = async ({ locale }) => {
  console.log('locale of getStaticProps', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'minjung'])),
    },
  };
};

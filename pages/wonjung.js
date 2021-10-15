import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

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
                      .slice(31, 47)
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
                      .slice(47, 65)
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
            <div className='content_container'>
              <div className='title_container'>
                <div className='left_arrow'>
                  <span>◀︎</span>
                </div>
                <div>
                  <span>Untitled</span>
                  <span>Wonjung Shin</span>
                </div>
                <div className='right_arrow'>
                  <span>▶︎</span>
                </div>
              </div>
              <div className='description_container'>
                <p>
                  Dawn Vision meditates on the religious theme park Keoku
                  Pavilion and its mythic creator Luang Pu Bunleua Sulilat
                  (1932-1996) who led a mysterious and perplexing life.{' '}
                </p>
                <p>
                  Bunleua’s beginning reads like Joseph Campbell’s The Hero With
                  a Thousand Faces. At a young age, Bunleua ran away from his
                  home in Nong Khai, Thailand. He then fell into a cave and met
                  the hermit, master Keoku, who became his spiritual mentor.
                  Having great reverence for his teacher, Bunleua named his
                  life’s work, Keoku Pavilion, after his master. It is believed
                  that Bunleua was the reincarnation of Naga, who forbade him
                  from becoming a monk, which led him on other spiritual paths.
                  Bunleua later moved to Vientiane, Laos, and became a secular
                  man. In 1958 he started the construction of Buddha Park (also
                  known as Xiong Khuan). He was incarcerated in Vientiane for
                  unspecified reasons and fled back to Nong Khai after the city
                  fell to the Pathet Lao—a communist political movement—in 1975.
                </p>
                <p>
                  Bunleua began construction of Sala Keoku in 1978 with the help
                  of devoted followers. All of the hundred large-scale, complex
                  and elaborate sculptures came purely from Bunleua’s dreams and
                  visions. Bunleua himself has never been trained in art,
                  engineering and architecture, and yet, he played an integral
                  role in guiding his followers in the construction and
                  completion of Sala Keoku.
                </p>
                <p>
                  As many considered him to be insane, Bunleua was often
                  troubled by the authorities and was incarcerated again for
                  reasons unknown. He died in 1996 from a strange illness.
                  Following his wishes, his embalmed body rests inside a glass
                  hemisphere. It is alleged that his spirit is still wandering
                  around his beloved creation.
                </p>
              </div>
              <div className='video_container'>
                <img src={dataSet[3].thumb} />
              </div>
              <div className='module_container'>
                <div className='module_row'>
                  <div className='module'>
                    <div className='image_row'>
                      <span>Index 1</span>
                      <img src={dataSet[4].thumb}></img>
                    </div>
                    <div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                    </div>
                  </div>
                  <div className='module'>
                    <div className='image_row'>
                      <span>Index 1</span>
                      <img src={dataSet[0].thumb}></img>
                    </div>
                    <div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                    </div>
                  </div>
                  <div className='module'>
                    <div className='image_row'>
                      <span>Index 1</span>
                      <img src={dataSet[3].thumb}></img>
                    </div>
                    <div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                      <div>
                        <span>►</span>expression 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='artist_info_container'>
                <div>Wonjung Shin</div>
                <div>
                  <p>
                    Wonjung Shin is an artist engaging with various media
                    represented through auditory perception, tactile sense,
                    visual elements and a mixture of digital and analog
                    technology. Her research seeks to find hidden rules and
                    patterns in natural elements and multi-layered relationships
                    between human and non-human sentient beings by translating
                    imperceptible data in natural elements into different
                    perceptual experiences. In her work, biological materials
                    are often used, combined or connected to machines, and
                    transformed. Her recent research focuses on the physical
                    nature of the human perceptional system driven by a
                    post-digital media concept and applying a contemporary
                    scientific and artistic research method. Her works have been
                    shown in various places including Piksel Festival (NO),
                    Transmediale Vorspiel (DE), Mediamatic (NL), Athens Digital
                    Arts Festival (GR), AMRO (AT), Lab 30 (DE), Art Center Nabi
                    (KR), ACT Festival (KR), Daechung Chungjoo City Museum of
                    Art (KR), V2 (NL), TADAEX festival (IR), WRO Media Art
                    Biennale (PL) and she has been awarded NIME (New Interface
                    for Musical Expression (2017) Best Sound Performance.
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

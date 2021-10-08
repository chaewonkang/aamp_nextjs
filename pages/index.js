import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';

const dataSet = [
  {
    index: 0,
    flag: 'taiki',
    artist: 'Taiki Sakpisit',
    keyword: [
      'Alchemical Transmutation',
      'Disembodiment',
      'Divination',
      'Eschatology',
      'Mysticism',
      'Phantasmagoria',
      'Sensory Stimulus',
      'Spectrality',
    ],
    thumb: '../static/images/example1.png',
  },
  {
    index: 1,
    flag: 'wonjung',
    artist: 'Wonjung Shin',
    keyword: [
      'Abject',
      'Dialog',
      'Gesture',
      'Network',
      'Non-Verbal',
      'Noting',
      'Stress',
      'Thing-In-Itself',
    ],
    thumb: '../static/images/example2.png',
  },
  {
    index: 2,
    flag: 'sabina',
    artist: 'Sabina Hyoju AHN',
    keyword: [
      'Ai',
      'Air',
      'Akademies',
      'Covid19',
      'Daily Life',
      'Digital',
      'Forest',
      'Germany',
      'Learning',
      'Local',
      'Lockdown',
      'Machine',
      'Residency',
      'Schloss',
      'Solitude',
      'Stuttgart',
      'Walk',
    ],
    thumb: '../static/images/example3.png',
  },
  {
    index: 3,
    flag: 'aamp',
    artist: 'AAMP',
    keyword: [
      'Badvibes',
      'Denvicky',
      'Findings',
      'Intro2barter',
      'Narratives',
      'Patkay',
      'Shady',
      'Waiting',
    ],
    thumb: '../static/images/example4.png',
  },
  {
    index: 4,
    flag: 'minjung',
    artist: 'Minjung Kim',
    keyword: [
      'Afforest',
      'Becalm',
      'Blithesome',
      'Buffoonish',
      'Causerie',
      'Chivalrous',
      'Congratulatory',
      'Dapper',
      'Whisper',
    ],
    thumb: '../static/images/example5.png',
  },
  {
    index: 5,
    flag: 'john',
    artist: 'John Torres',
    keyword: [
      'Apple',
      'Extremum',
      'Featherbrained',
      'Felicity',
      'Ism',
      'Indefinite',
      'Nuance',
      'Majestic',
      'Sappy',
      'Spiffy',
      'Timbre',
      'Zippy',
    ],
    thumb: '../static/images/example2.png',
  },
];

const Index = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [thumbUrl, setThumbUrl] = useState('');
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

    // console.log(`IsItalic: ${isItalic}`);
    // console.log(`keyword: ${keyword}`);
    // console.log(`thumbUrl: ${thumbUrl}`);
    // console.log(`flag: ${flag}`);

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
      ? italicTarget.map((item) => (item.style.fontStyle = 'italic'))
      : italicTarget.map((item) => (item.style.fontStyle = 'normal'));
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
                          onClick={() => {
                            setIsKeyClicked(true);
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
                          onClick={() => {
                            setIsKeyClicked(true);
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
                          onClick={() => {
                            setIsKeyClicked(true);
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
                          onClick={() => {
                            setIsKeyClicked(true);
                          }}
                        >
                          {item}
                        </span>
                      );
                    })}
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

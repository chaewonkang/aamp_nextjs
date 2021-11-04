import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';
import playBtn from '../static/images/playbutton.png';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const johnImgArr = [
  '../static/images/john/john_1.jpeg',
  '../static/images/john/john_2.jpg',
  '../static/images/john/john_3.jpg',
  '../static/images/john/john_4.jpg',
  '../static/images/john/john_5.jpeg',
  '../static/images/john/john_6.jpg',
  '../static/images/john/john_7.jpeg',
  '../static/images/john/john_8.jpg',
  '../static/images/john/john_9.jpg',
  '../static/images/john/john_10.png',
  '../static/images/john/john_11.png',
  '../static/images/john/john_12.jpeg',
  '../static/images/john/john_13.jpeg',
  '../static/images/john/john_14.jpeg',
  '../static/images/john/john_15.jpeg',
  '../static/images/john/john_16.jpeg',
  '../static/images/john/john_17.jpeg',
  '../static/images/john/john_18.png',
  '../static/images/john/john_19.png',
  '../static/images/john/john_20.png',
  '../static/images/john/john_21.png',
  '../static/images/john/john_22.png',
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

  const { t } = useTranslation('john');

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
        if (!item.className.includes('john')) return item;
      })
      .map((item) => (item.style.opacity = '0'));

    const italicTarget = [...document.getElementsByClassName('john')];
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
            <div className='content_container'>
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
              <div className='description_container title'>
                <p>1 {t('intro2barter')}</p>
              </div>
              <div className='description_container'>
                <p>{t('intro2barter0')}</p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>{t('intro2barter1')}</p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[0]} />
              </div>
              <div className='description_container title'>
                <p>2 {t('denvicky')}</p>
              </div>
              <div className='description_container'>
                <p>
                  <span className='italic'>{t('italic0')}</span>{' '}
                  {t('denvicky0')}
                </p>
                <p>{t('denvicky1')}</p>
                <br />
                <span>{t('denvicky2')}</span>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[1]} />
              </div>
              <div className='video_container'>
                <img src={johnImgArr[2]} />
              </div>
              <div className='description_container'>
                <span>{t('denvicky3')}</span>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[3]} />
              </div>
              <div className='video_container'>
                <img src={johnImgArr[4]} />
              </div>
              <div className='description_container'>
                <span>{t('denvicky4')}</span>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[5]} />
              </div>
              <div className='video_container'>
                <img src={johnImgArr[6]} />
              </div>
              <div className='description_container'>
                <span>{t('denvicky5')}</span>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[7]} />
              </div>
              <div className='description_container title'>
                <p>3 {t('findings')}</p>
              </div>
              <div className='description_container'>
                <p className='center'>{t('findings0')}</p>
                <p style={{ textIndent: 0 }}>{t('findings1')}</p>
                <p>{t('findings2')}</p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[8]} />
              </div>
              <div className='description_container'>
                <p>
                  {t('findings3')}
                  <span className='italic'>{t('italic1')}</span>,
                  {t('findings4')}
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[9]} />
              </div>
              <div className='description_container'>
                <p>{t('findings5')}</p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>{t('findings6')}</p>
              </div>
              <div className='description_container'>
                <p className='center'>Unexpected things I did</p>
                <p style={{ textIndent: 0 }}>
                  I did count how long Den waited and gave up on a reply from
                  someone. It was amusing to feel more of her world just by
                  waiting with her for a reply.
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>Unexpectedly, I saw I was on mute. Ouch!</p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[10]} />
              </div>
              <div className='description_container title'>
                <p>4 PATKAY</p>
              </div>
              <div className='description_container'>
                <p>Here's a Pat Kay.</p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[11]} />
              </div>
              <div className='description_container'>
                <p>
                  “This collection is more on my former interests fromhigh
                  school. I used to be really into classic rocklike Queen,
                  LedZeppelin, Bob Dylan, that kinda stuff. But I’ve outgrowna
                  lot of it because of the values that the bandshold and
                  thecontent of their music doesn’t really resonate withme as
                  much anymore. This was a huge part of my identitybackthen in
                  high school but not anymore!"
                </p>
                <p>
                  Pat Kaymakes me feel old. She was my student yearsback, and
                  she was a brilliant artist even then.Pat Kay, whose character
                  and heart shone unmistakablyin the classroom. Which was, for
                  me, a spacethat I remember filled with students who conform,in
                  uniform, and are pressured to fit in. Pat Kay
                  wasunapologetically Pat Kay. And I wish I was Pat Kaywhen I
                  was in school. But I was a spoiled, shelteredteenager who
                  wanted to play games all the time. Imissed out on a lot of
                  things, and Pat Kay would havebeen a role model for me if we
                  were in school together.
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[12]} />
              </div>
              <div className='video_container'>
                <img src={johnImgArr[13]} />
              </div>
              <div className='video_container'>
                <img src={johnImgArr[14]} />
              </div>
              <div className='video_container'>
                <img src={johnImgArr[15]} />
              </div>
              <div className='description_container'>
                <p className='center'>Useful shit</p>
                <p style={{ textIndent: 0 }}>
                  Pat Kay found it hard to exchange her Led Zeppelinalbum for
                  Mariah Carey merch, which was all shereally wanted. “I don’t
                  know, I don’t want random shit in my house.” She thinks older
                  people don’t use Facebook, whereshe posts her barter items.
                  And in barter groupsthere, she sees that people want useful
                  things. Householditems, grocery, food. And for a time, Pat Kay
                  tried that out.
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[16]} />
              </div>
              <div className='description_container'>
                <p>
                  She said there were specific groups for barteringitems. Barter
                  for Music items, CDs, for example. Still,noone wanted her
                  shit, she said.
                </p>
              </div>
              <div className='description_container title'>
                <p>5 SHADY</p>
              </div>
              <div className='description_container'>
                <p className='center'>Shady Meet-ups</p>
                <p style={{ textIndent: 0 }}>
                  Against my instructions, Pat Kay did meet-ups insteadof
                  deliveries via riders to do the negotiation andexchange. She
                  said they wanted to save on shippingfee, especially if they
                  both lived close to eachother.“I also don’t want to get
                  scammed.”
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[17]} />
              </div>
              <div className='description_container'>
                <p>
                  To which, Den added that sometimes things are already too
                  digital that you crave for human presence.
                </p>
                <p>
                  Pat Kay recalled dealing with onetito, slang foruncle, who
                  wanted to meet up for the Beatles CD barter.He sent her a
                  selfie wearing a Pink Floyd shirt, andshe didn’t know why. She
                  went in on the details,herhaving to lie about her age, him
                  telling her he’sgoing to the cemetery to visit family.
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>
                  I had to soft scold Pat Kay. The man proposed to meether at
                  her place because she was nearby.Thankfully, nothing happened.
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[18]} />
              </div>
              <div className='description_container'>
                <p>
                  Image sent to Pat Kay after making the handshake deal.Rock on?
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>
                  “Where’s Pink Floyd?” “It’s there.” “Okay, check it.” “It’s
                  good.” (inaudible) “Okay? Take care. Happy weekend.” Siren of
                  a police car passing by. “Thank God, it was such a short
                  interaction. I thoughthe was still gonna try andtalk to me.”
                </p>
              </div>
              <div className='description_container'>
                <p className='center'>Riders</p>
                <p style={{ textIndent: 0 }}>
                  For much of the pandemic, we could sometimes onlyhear
                  motorcycles passing by. During the strictlockdowns, no one was
                  allowed to roam except for ridersdelivering goods to
                  households.
                </p>
                <p>
                  Here, Den exchanges the bird for a turtle via Grab,a logistics
                  carrier.
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container title'>
                <p>6 WAITING</p>
              </div>
              <div className='description_container'>
                <p className='center'>Waiting</p>
                <p style={{ textIndent: 0 }}>
                  While waiting for her next exchange, for the turtlethis time,
                  Den turned to her space and found thingstodo. Not only did the
                  space change (nesting?), shehad quite a transformation, Den.
                  Den was always veryshy to document herself in front of the
                  camera, soto do this was quite a surprise.
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p className='center'>Better Place</p>
                <p style={{ textIndent: 0 }}>
                  In doing the exchange, Den really just wanted to helpthe
                  object find a better place. According to her,shewanted the
                  person to treasure it. In giving the firstobject she bartered,
                  the bird, to Kat, an artistsheknows, she wanted to sense that
                  the bird found a goodhome.
                </p>
                <p>
                  She is still in touch with Kat, and she still wants to, in a
                  way, still, look out for the bird she let go. Shechecks her IG
                  to see how the bird is doing. She, too,posts things about the
                  turtle, which is the barteritem she got from Kat, who got it
                  from a past relationship.
                </p>
                <p>
                  Den looked up the spiritual symbolism of the turtleonline and
                  found this: a turtle is something you“carry true home with
                  you”. She had told Kat thatshe wished for her “to see new
                  places, for new thingsto come to her”.
                </p>
                <p>
                  As I wrote, I see myself in Den. How she senses theinvisible
                  narratives and storylines of objects. Istilloften rely a lot
                  on sign posts and other text, numbersthat surround me to guide
                  me through decisionsand paths in life. Like Den, I see myself
                  facilitatingexchanges to continue these felt stories around
                  me.
                </p>
                <p>
                  I asked Den, “Do you think you’re a halfway housefor objects
                  to find their better place?” “Yes.”
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>
                  Turtle - Rock from the Dead Sea - Plant called “Kilala” (“To
                  know”)
                </p>
              </div>
              <div className='description_container title'>
                <p>7 BADVIBES</p>
              </div>
              <div className='description_container'>
                <p className='center'>Bad Energy</p>
                <p style={{ textIndent: 0 }}>
                  Pat Kay thinks of the bad energy during an exchange. When
                  asked, she didn’t want to give away her Ifugaowooden carvings.
                  These are indigenous woodcarvings, stylized representations of
                  people guardingrice crops in the Northern Philippines, thought
                  tocarry ancestral spirits. Although people might wantthe item,
                  Pat Kay didn’t want to do any harm bypassing on the bad energy
                  to them. So she threw thecarvings away.
                </p>
              </div>
              <div className='description_container'>
                <p className='center'>Knowing yourself through rejections</p>
                <p style={{ textIndent: 0 }}>
                  “(The item you barter) It reflects your personality,right?” “I
                  didn’t realize my personality is hard to market.”
                </p>
                <p>
                  Pat Kay and D Jay laugh.“What do people want?” “A mirror.”
                  “Okay, I have to find more basic shit.” Pat Kay thinks she
                  doesn’t know how to market her items, and her personality.
                  But, it’s okay, she believesshe will get to know more of
                  herself in the process,just the same --“I’ll find out through
                  rejections.”
                </p>
              </div>
              <div className='description_container'>
                <p className='center'>Getting rid of former identity</p>
                <p style={{ textIndent: 0 }}>
                  D Jay asks her if she’s merely bartering useless thingsto get
                  something valuable in return. Pat Kay says it’s weird for her
                  to be getting itemsthat her “former identity” consumes. She
                  just wantstoget something new, something her present self
                  likes. “Den was telling me about her exchanges, and I
                  don’tknow, but her exchanges areso poetic, versus mine.
                  (laughs)... But it’s okay. Ithink the comparison can showthat
                  I’m trash, and she’s an artist.”
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p className='center'>No local interest</p>
                <p style={{ textIndent: 0 }}>
                  Den was a bit sad that no one wanted to barter fora work she
                  did, a print. She felt there was no interestin her projects
                  locally. Which is probably why, shethought, no one wanted it.
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[19]} />
              </div>
              <div className='description_container'>
                <p>
                  She realized later on, talking to someone, that peoplemight
                  have had interest in her work but justcouldn’t find a thing of
                  equal value to it. I think she felt a bit better since then.
                </p>
              </div>
              <div className='description_container title'>
                <p>8 NARRATIVES</p>
              </div>
              <div className='description_container'>
                <p className='center'>Jueteng Lords</p>
                <p style={{ textIndent: 0 }}>
                  While Pat Kay and D Jay talked about a proposed exchangefor
                  the Beyonce CD,juetengwas discussedbecause of the
                  filmKubrador(Bet Collector), a filmby Jeffrey
                  Jeturian.Juetengis an illegal numbersgame, a lotto-type game
                  where bet collectors go door-to-doorto take bets from the
                  community. It is asource of corruption. Jueteng has caused the
                  downfallof many politicians. Former President JosephEstrada
                  got in trouble because of it; he was forcedout of office. It
                  was big news during “my time”,and Iwrite this only because I
                  saw D Jay and Pat Kay talkingaboutjuetengto themselves, and it
                  was amusingthat they had to Google it. This was the talk of
                  thenation then.
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p className='center'>Continuing narratives</p>
                <p style={{ textIndent: 0 }}>
                  From the turtle that came from a past relationship,Den passed
                  the turtle on to Jas in Berlin. Jas hadaturtle from her own
                  childhood that her mother gaveaway without her permission. And
                  which she neversaw again. When she saw the turtle from Den’s
                  feed,she wanted to barter with her.
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[20]} />
              </div>
              <div className='description_container'>
                <p>
                  In doing the exchange, Jas and Den agreed to document things
                  for me, including the path-to-home ofobjects. Interestingly,
                  the package that came fromBerlin was a collection of goodies
                  to send to herfriends and family in the Philippines.
                </p>
                <p>
                  Den was getting a rock from the Dead Sea. But
                  becauseinternational shipping is expensive, Jas thoughtof
                  sending a box to fill to accompany the rock, away to maximize
                  shipping fee so more people benefit.
                </p>
                <p>
                  This term “pasabuy”, a word play on “passing on” and“buy” --
                  groups of people send items they buyoverseas to a single
                  address, to be packed and consolidatedin a single box, for
                  them to split shippingfees. It is anotherbalikbayanbox, a box
                  full ofsouvenirs orpasalubongto families in the
                  Philippines.Overseas Filipino workers come home carrying
                  thesebig cargo boxes all the time.
                </p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p className='center'>Plant and Cookies</p>
                <p style={{ textIndent: 0 }}>
                  In their last barters, Den got a plant in exchangefor a rock
                  from the Dead Sea. Pat Kay got cookiesinexchange for some
                  graduation photos.
                </p>
              </div>
              <div className='video_container'>
                <img src={johnImgArr[21]} />
              </div>

              <div className='description_container'>
                <p>Pat Kay ate the cookie. And, last I heard, the plantdied.</p>
              </div>
              <div className='audio_player'>
                <div className='player'>
                  <img src={playBtn} />
                </div>
              </div>
              <div className='description_container'>
                <p>
                  In the meantime, I’m editing the piece as a proposalfor a
                  documentary project: Local things exchangedthrough bartering
                  during a pandemic. The show, madein the Philippines, hopes to
                  be sold to an onlinechannel “near you” as online content to be
                  consumedinternationally.
                </p>
                <p>What does that tell you about me?</p>
              </div>
              {/* Artist Info */}
              {/* Artist Info */}
              {/* Artist Info */}
              {/* Artist Info */}
              {/* Artist Info */}
              <div className='artist_info_container'>
                <div>John Torres</div>
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

export const getStaticProps = async ({ locale }) => {
  console.log('locale of getStaticProps', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['john'])),
    },
  };
};

import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import dataSet from "../constants/dataSet";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import sabinaData from "../constants/sabinaData";

const Index = () => {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isItalic, setIsItalic] = useState(false);
    const [thumbUrl, setThumbUrl] = useState(false);
    const [flag, setFlag] = useState("");
    const [isKeyClicked, setIsKeyClicked] = useState(false);
    const router = useRouter();
    const { t } = useTranslation("sabina");
    const locale = router.locale;
    const [keywordArr, setKeywordArr] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef(null);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (router.locale === "en") {
            setKeywordArr(
                [].concat.apply(
                    [],
                    dataSet.map(item => item.keyword),
                ),
            );
        } else if (router.locale === "ko") {
            setKeywordArr(
                [].concat.apply(
                    [],
                    dataSet.map(item => item.keywordKr),
                ),
            );
        }

        setTimeout(() => {
            setLoading(true);
        }, 500);

        const spanTarget = [...document.getElementsByClassName("keyword")];

        spanTarget
            .filter(item => {
                if (!item.className.includes("sabina")) return item;
            })
            .map(item => (item.style.opacity = "0"));

        const italicTarget = [...document.getElementsByClassName("sabina")];
        italicTarget.map(item => (item.style.fontFamily = "Signifier Italic"));
    }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

    useEffect(() => {}, [slideIndex]);

    if (locale === "ko" && keywordArr !== []) {
        useEffect(() => {
            let italicTarget = [...document.getElementsByClassName("sabina")];
            italicTarget.map(item => {
                item.style.fontFamily = "Noto Serif KR";
                item.style.fontStyle = "italic";
            });
        }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

        return (
            <ThemeProvider theme={theme}>
                {loading && (
                    <>
                        <PageLayout>
                            {thumbUrl && (
                                <div className="thumbnail_container">
                                    <img id="thumbnail" src={thumbUrl}></img>
                                </div>
                            )}
                            <div
                                id="mobileOnly"
                                className="mobile_keyword_container"
                            >
                                <div>
                                    {dataSet[2].keywordKr.map(item => {
                                        if (item === "soundb")
                                            return <span>sound</span>;
                                        return <span>{item}</span>;
                                    })}
                                </div>
                            </div>
                            <div className="keyword_container_wrapper">
                                <div
                                    className="keyword_container"
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
                                                                .map(el => {
                                                                    if (
                                                                        el.keywordKr.includes(
                                                                            item,
                                                                        )
                                                                    )
                                                                        return el.flag;
                                                                })
                                                                .filter(el => {
                                                                    if (
                                                                        el !=
                                                                        ","
                                                                    )
                                                                        return el;
                                                                })} keyword`}
                                                            key={item}
                                                            onMouseOver={() => {
                                                                if (
                                                                    !isKeyClicked
                                                                ) {
                                                                    setTimeout(
                                                                        () =>
                                                                            setIsItalic(
                                                                                true,
                                                                            ),
                                                                        100,
                                                                    );
                                                                    setKeyword(
                                                                        item,
                                                                    );
                                                                }
                                                            }}
                                                            onMouseOut={() => {
                                                                setIsItalic(
                                                                    false,
                                                                );
                                                                setIsKeyClicked(
                                                                    false,
                                                                );
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
                                                .slice(15, 30)
                                                .map((item, index) => {
                                                    if (
                                                        item === "소리1" ||
                                                        item === "소리2"
                                                    )
                                                        return (
                                                            <span
                                                                key={item}
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                onMouseOver={() => {
                                                                    setTimeout(
                                                                        () =>
                                                                            setIsItalic(
                                                                                true,
                                                                            ),
                                                                        100,
                                                                    );
                                                                    setKeyword(
                                                                        item,
                                                                    );
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                소리
                                                            </span>
                                                        );
                                                    return (
                                                        <span
                                                            className={`${dataSet
                                                                .map(el => {
                                                                    if (
                                                                        el.keywordKr.includes(
                                                                            item,
                                                                        )
                                                                    )
                                                                        return el.flag;
                                                                })
                                                                .filter(el => {
                                                                    if (
                                                                        el !=
                                                                        ","
                                                                    )
                                                                        return el;
                                                                })} keyword`}
                                                            key={item}
                                                            onMouseOver={() => {
                                                                setTimeout(
                                                                    () =>
                                                                        setIsItalic(
                                                                            true,
                                                                        ),
                                                                    100,
                                                                );
                                                                setKeyword(
                                                                    item,
                                                                );
                                                            }}
                                                            onMouseOut={() => {
                                                                setIsItalic(
                                                                    false,
                                                                );
                                                                setIsKeyClicked(
                                                                    false,
                                                                );
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
                                                .slice(30, 45)
                                                .map((item, index) => {
                                                    return (
                                                        <span
                                                            className={`${dataSet
                                                                .map(el => {
                                                                    if (
                                                                        el.keywordKr.includes(
                                                                            item,
                                                                        )
                                                                    )
                                                                        return el.flag;
                                                                })
                                                                .filter(el => {
                                                                    if (
                                                                        el !=
                                                                        ","
                                                                    )
                                                                        return el;
                                                                })} keyword`}
                                                            key={item}
                                                            onMouseOver={() => {
                                                                setTimeout(
                                                                    () =>
                                                                        setIsItalic(
                                                                            true,
                                                                        ),
                                                                    100,
                                                                );
                                                                setKeyword(
                                                                    item,
                                                                );
                                                            }}
                                                            onMouseOut={() => {
                                                                setIsItalic(
                                                                    false,
                                                                );
                                                                setIsKeyClicked(
                                                                    false,
                                                                );
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
                                                .slice(45, 60)
                                                .map((item, index) => {
                                                    return (
                                                        <span
                                                            key={item}
                                                            className={`${dataSet
                                                                .map(el => {
                                                                    if (
                                                                        el.keyword.includes(
                                                                            item,
                                                                        )
                                                                    )
                                                                        return el.flag;
                                                                })
                                                                .filter(el => {
                                                                    if (
                                                                        el !=
                                                                        ","
                                                                    )
                                                                        return el;
                                                                })} keyword`}
                                                            onMouseOver={() => {
                                                                setTimeout(
                                                                    () =>
                                                                        setIsItalic(
                                                                            true,
                                                                        ),
                                                                    100,
                                                                );
                                                                setKeyword(
                                                                    item,
                                                                );
                                                            }}
                                                            onMouseOut={() => {
                                                                setIsItalic(
                                                                    false,
                                                                );
                                                                setIsKeyClicked(
                                                                    false,
                                                                );
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
                                    locale === "en"
                                        ? "content_container"
                                        : "ko_type content_container"
                                }
                            >
                                {" "}
                                <div className="title_container">
                                    <div className="left_arrow">
                                        <Link href="/sabina">
                                            <span>◀︎</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <span>{t("title")}</span>
                                        <span>{t("artist")}</span>
                                    </div>
                                    <div className="right_arrow">
                                        <Link href="/wonjung">
                                            <span>▶︎</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="description_container">
                                    <p>{t("text1")}</p>
                                    <p>{t("text2")}</p>
                                </div>
                                <div className="video_container embed-container">
                                    <iframe
                                        src={`${sabinaData[index].video}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;`}
                                        frameBorder="0"
                                        allow="fullscreen;playsinline;"
                                        allowfullscreen
                                        playsinline
                                        webkit-playsinline
                                        webkitallowfullscreen
                                        mozallowfullscreen
                                    ></iframe>
                                </div>
                                <div className="video_function_container">
                                    <div className="video_function">
                                        <div className="video_desc">
                                            <span>
                                                {locale === "en" ? (
                                                    <>
                                                        {" "}
                                                        {parse(
                                                            sabinaData[index]
                                                                .date,
                                                        )}
                                                        <br />
                                                        {parse(
                                                            sabinaData[index]
                                                                .textEn,
                                                        )}
                                                    </>
                                                ) : (
                                                    <>
                                                        {" "}
                                                        {parse(
                                                            sabinaData[index]
                                                                .date,
                                                        )}{" "}
                                                        <br />
                                                        {parse(
                                                            sabinaData[index]
                                                                .text,
                                                        )}
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                        <div className="refresh">
                                            <span
                                                className="clickable"
                                                onClick={() => {
                                                    setIndex(
                                                        Math.floor(
                                                            Math.random() *
                                                                sabinaData.length,
                                                        ),
                                                    );
                                                }}
                                            >
                                                Refresh
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="spectrum_container spectrum_desc">
                                    <span>Original</span>
                                </div>
                                <div className="spectrum_container embed-container-s">
                                    <iframe
                                        src={`${sabinaData[index].original}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;`}
                                        frameBorder="0"
                                        allow="autoplay;playsinline;"
                                        playsinline
                                        webkit-playsinline
                                        mozallowfullscreen
                                    ></iframe>
                                </div>
                                <div className="spectrum_container spectrum_desc">
                                    <span>Machine Learning</span>
                                </div>
                                <div className="spectrum_container embed-container-s">
                                    <iframe
                                        src={`${sabinaData[index].recon}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;`}
                                        frameBorder="0"
                                        allow="autoplay;playsinline;"
                                        playsinline
                                        webkit-playsinline
                                        mozallowfullscreen
                                    ></iframe>
                                </div>
                                <div className="module_container triple_container">
                                    <div className="arrowbox">
                                        <div>
                                            <span
                                                onClick={() => {
                                                    console.log(
                                                        "left button is clicked!",
                                                    );
                                                    console.log(
                                                        `slideIndex === ${Math.floor(
                                                            slideIndex,
                                                        )}`,
                                                    );

                                                    if (
                                                        slideIndex <
                                                        Math.floor(
                                                            sabinaData.length /
                                                                3,
                                                        )
                                                    )
                                                        setSlideIndex(
                                                            slideIndex - 1,
                                                        );
                                                    if (slideIndex == 0) {
                                                        setSlideIndex(
                                                            Math.floor(
                                                                sabinaData.length /
                                                                    3,
                                                            ) - 1,
                                                        );
                                                    }
                                                }}
                                            >
                                                ◀︎
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                onClick={() => {
                                                    console.log(
                                                        "right button is clicked!",
                                                    );
                                                    console.log(
                                                        `slideIndex === ${Math.floor(
                                                            slideIndex,
                                                        )}`,
                                                    );
                                                    if (
                                                        slideIndex <
                                                        Math.floor(
                                                            sabinaData.length /
                                                                3,
                                                        ) -
                                                            1
                                                    )
                                                        setSlideIndex(
                                                            slideIndex + 1,
                                                        );

                                                    if (
                                                        slideIndex ==
                                                        Math.floor(
                                                            sabinaData.length /
                                                                3,
                                                        ) -
                                                            1
                                                    )
                                                        setSlideIndex(0);
                                                }}
                                            >
                                                ▶︎
                                            </span>
                                        </div>
                                    </div>
                                    <div className="triple_row">
                                        <div
                                            className="slideshowSlider"
                                            style={{
                                                transform: `translate3d(${
                                                    -slideIndex * 100
                                                }%, 0, 0)`,
                                            }}
                                        >
                                            {sabinaData &&
                                                sabinaData.map(el => {
                                                    return (
                                                        <div className="module">
                                                            <div
                                                                className="image_row embed-container-xs"
                                                                onClick={() => {
                                                                    setIndex(
                                                                        el.id,
                                                                    );
                                                                }}
                                                            >
                                                                <iframe
                                                                    src={`${el.video}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;sidedock=0&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;`}
                                                                    frameBorder="0"
                                                                    allow="autoplay;fullscreen;playsinline;"
                                                                    allowfullscreen
                                                                    playsinline
                                                                    webkit-playsinline
                                                                    webkitallowfullscreen
                                                                    mozallowfullscreen
                                                                ></iframe>
                                                            </div>
                                                            <div
                                                                className="sound_row"
                                                                onClick={() => {
                                                                    setIndex(
                                                                        el.id,
                                                                    );
                                                                }}
                                                            >
                                                                <div
                                                                    className="clickable"
                                                                    onClick={() => {
                                                                        setIndex(
                                                                            el.id,
                                                                        );
                                                                    }}
                                                                >
                                                                    {el.date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                                <div className="artist_info_container">
                                    <div>{t("artist")}</div>
                                    <div>
                                        <p>{t("artistInfo")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="keyword_span clickable">
                                <Link href="/">
                                    <span className="clickable">Keywords</span>
                                </Link>
                            </div>
                        </PageLayout>
                    </>
                )}
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            {loading && (
                <>
                    <PageLayout>
                        {thumbUrl && (
                            <div className="thumbnail_container">
                                <img id="thumbnail" src={thumbUrl}></img>
                            </div>
                        )}
                        <div
                            id="mobileOnly"
                            className="mobile_keyword_container"
                        >
                            <div>
                                {dataSet[2].keyword.map(item => {
                                    if (item === "soundb")
                                        return <span>sound</span>;
                                    return <span>{item}</span>;
                                })}
                            </div>
                        </div>
                        <div className="keyword_container_wrapper">
                            <div
                                className="keyword_container"
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
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                key={item}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    0,
                                                                    idx,
                                                                )}
                                                            </span>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                                style={{
                                                                    paddingLeft: 30,
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    idx,
                                                                    item.length,
                                                                )}
                                                            </span>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <span
                                                        className={`${dataSet
                                                            .map(el => {
                                                                if (
                                                                    el.keyword.includes(
                                                                        item,
                                                                    )
                                                                )
                                                                    return el.flag;
                                                            })
                                                            .filter(el => {
                                                                if (el != ",")
                                                                    return el;
                                                            })} keyword`}
                                                        key={item}
                                                        onMouseOver={() => {
                                                            if (!isKeyClicked) {
                                                                setTimeout(
                                                                    () =>
                                                                        setIsItalic(
                                                                            true,
                                                                        ),
                                                                    100,
                                                                );
                                                                setKeyword(
                                                                    item,
                                                                );
                                                            }
                                                        }}
                                                        onMouseOut={() => {
                                                            setIsItalic(false);
                                                            setIsKeyClicked(
                                                                false,
                                                            );
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
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                key={item}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    0,
                                                                    idx,
                                                                )}
                                                            </span>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                                style={{
                                                                    paddingLeft: 30,
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    idx,
                                                                    item.length,
                                                                )}
                                                            </span>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <span
                                                        className={`${dataSet
                                                            .map(el => {
                                                                if (
                                                                    el.keyword.includes(
                                                                        item,
                                                                    )
                                                                )
                                                                    return el.flag;
                                                            })
                                                            .filter(el => {
                                                                if (el != ",")
                                                                    return el;
                                                            })} keyword`}
                                                        key={item}
                                                        onMouseOver={() => {
                                                            setTimeout(
                                                                () =>
                                                                    setIsItalic(
                                                                        true,
                                                                    ),
                                                                100,
                                                            );
                                                            setKeyword(item);
                                                        }}
                                                        onMouseOut={() => {
                                                            setIsItalic(false);
                                                            setIsKeyClicked(
                                                                false,
                                                            );
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
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                key={item}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    0,
                                                                    idx,
                                                                )}
                                                            </span>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                                style={{
                                                                    paddingLeft: 30,
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    idx,
                                                                    item.length,
                                                                )}
                                                            </span>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <span
                                                        className={`${dataSet
                                                            .map(el => {
                                                                if (
                                                                    el.keyword.includes(
                                                                        item,
                                                                    )
                                                                )
                                                                    return el.flag;
                                                            })
                                                            .filter(el => {
                                                                if (el != ",")
                                                                    return el;
                                                            })} keyword`}
                                                        key={item}
                                                        onMouseOver={() => {
                                                            setTimeout(
                                                                () =>
                                                                    setIsItalic(
                                                                        true,
                                                                    ),
                                                                100,
                                                            );
                                                            setKeyword(item);
                                                        }}
                                                        onMouseOut={() => {
                                                            setIsItalic(false);
                                                            setIsKeyClicked(
                                                                false,
                                                            );
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
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                key={item}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    0,
                                                                    idx,
                                                                )}
                                                            </span>
                                                            <span
                                                                className={`${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keyword.includes(
                                                                                item,
                                                                            )
                                                                        )
                                                                            return el.flag;
                                                                    })
                                                                    .filter(
                                                                        el => {
                                                                            if (
                                                                                el !=
                                                                                ","
                                                                            )
                                                                                return el;
                                                                        },
                                                                    )} keyword`}
                                                                onMouseOver={() => {
                                                                    if (
                                                                        !isKeyClicked
                                                                    ) {
                                                                        setTimeout(
                                                                            () =>
                                                                                setIsItalic(
                                                                                    true,
                                                                                ),
                                                                            100,
                                                                        );
                                                                        setKeyword(
                                                                            item,
                                                                        );
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    setIsItalic(
                                                                        false,
                                                                    );
                                                                    setIsKeyClicked(
                                                                        false,
                                                                    );
                                                                }}
                                                                style={{
                                                                    paddingLeft: 30,
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    idx,
                                                                    item.length,
                                                                )}
                                                            </span>
                                                        </>
                                                    );
                                                }
                                                if (
                                                    item === "sounda" ||
                                                    item === "soundb"
                                                )
                                                    return (
                                                        <span
                                                            key={item}
                                                            className={`${dataSet
                                                                .map(el => {
                                                                    if (
                                                                        el.keyword.includes(
                                                                            item,
                                                                        )
                                                                    )
                                                                        return el.flag;
                                                                })
                                                                .filter(el => {
                                                                    if (
                                                                        el !=
                                                                        ","
                                                                    )
                                                                        return el;
                                                                })} keyword`}
                                                            onMouseOver={() => {
                                                                setTimeout(
                                                                    () =>
                                                                        setIsItalic(
                                                                            true,
                                                                        ),
                                                                    100,
                                                                );
                                                                setKeyword(
                                                                    item,
                                                                );
                                                            }}
                                                            onMouseOut={() => {
                                                                setIsItalic(
                                                                    false,
                                                                );
                                                                setIsKeyClicked(
                                                                    false,
                                                                );
                                                            }}
                                                        >
                                                            {item.slice(0, 5)}
                                                        </span>
                                                    );
                                                return (
                                                    <span
                                                        key={item}
                                                        className={`${dataSet
                                                            .map(el => {
                                                                if (
                                                                    el.keyword.includes(
                                                                        item,
                                                                    )
                                                                )
                                                                    return el.flag;
                                                            })
                                                            .filter(el => {
                                                                if (el != ",")
                                                                    return el;
                                                            })} keyword`}
                                                        onMouseOver={() => {
                                                            setTimeout(
                                                                () =>
                                                                    setIsItalic(
                                                                        true,
                                                                    ),
                                                                100,
                                                            );
                                                            setKeyword(item);
                                                        }}
                                                        onMouseOut={() => {
                                                            setIsItalic(false);
                                                            setIsKeyClicked(
                                                                false,
                                                            );
                                                        }}
                                                    >
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                    <span style={{ opacity: "0" }}>none</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                locale === "en"
                                    ? "content_container"
                                    : "ko_type content_container"
                            }
                        >
                            {" "}
                            <div className="title_container">
                                <div className="left_arrow">
                                    <Link href="/sabina">
                                        <span>◀︎</span>
                                    </Link>
                                </div>
                                <div>
                                    <span>{t("title")}</span>
                                    <span>{t("artist")}</span>
                                </div>
                                <div className="right_arrow">
                                    <Link href="/wonjung">
                                        <span>▶︎</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="description_container">
                                <p>{t("text1")}</p>
                                <p>{t("text2")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src={`${sabinaData[index].video}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;`}
                                    frameBorder="0"
                                    allow="fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="video_function_container">
                                <div className="video_function">
                                    <div className="video_desc">
                                        <span>
                                            {locale === "en" ? (
                                                <>
                                                    {" "}
                                                    {parse(
                                                        sabinaData[index].date,
                                                    )}
                                                    <br />
                                                    {parse(
                                                        sabinaData[index]
                                                            .textEn,
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {" "}
                                                    {parse(
                                                        sabinaData[index].date,
                                                    )}{" "}
                                                    <br />
                                                    {parse(
                                                        sabinaData[index].text,
                                                    )}
                                                </>
                                            )}
                                        </span>
                                    </div>
                                    <div className="refresh">
                                        <span
                                            className="clickable"
                                            onClick={() => {
                                                setIndex(
                                                    Math.floor(
                                                        Math.random() *
                                                            sabinaData.length,
                                                    ),
                                                );
                                            }}
                                        >
                                            Refresh
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="spectrum_container spectrum_desc">
                                <span>Original</span>
                            </div>
                            <div className="spectrum_container embed-container-s">
                                <iframe
                                    src={`${sabinaData[index].original}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;`}
                                    frameBorder="0"
                                    allow="autoplay;playsinline;"
                                    playsinline
                                    webkit-playsinline
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="spectrum_container spectrum_desc">
                                <span>Machine Learning</span>
                            </div>
                            <div className="spectrum_container embed-container-s">
                                <iframe
                                    src={`${sabinaData[index].recon}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;`}
                                    frameBorder="0"
                                    allow="autoplay;playsinline;"
                                    playsinline
                                    webkit-playsinline
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="module_container triple_container">
                                <div className="arrowbox">
                                    <div>
                                        <span
                                            onClick={() => {
                                                console.log(
                                                    "left button is clicked!",
                                                );
                                                console.log(
                                                    `slideIndex === ${Math.floor(
                                                        slideIndex,
                                                    )}`,
                                                );

                                                if (
                                                    slideIndex <
                                                    Math.floor(
                                                        sabinaData.length / 3,
                                                    )
                                                )
                                                    setSlideIndex(
                                                        slideIndex - 1,
                                                    );
                                                if (slideIndex == 0) {
                                                    setSlideIndex(
                                                        Math.floor(
                                                            sabinaData.length /
                                                                3,
                                                        ) - 1,
                                                    );
                                                }
                                            }}
                                        >
                                            ◀︎
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            onClick={() => {
                                                console.log(
                                                    "right button is clicked!",
                                                );
                                                console.log(
                                                    `slideIndex === ${Math.floor(
                                                        slideIndex,
                                                    )}`,
                                                );
                                                if (
                                                    slideIndex <
                                                    Math.floor(
                                                        sabinaData.length / 3,
                                                    ) -
                                                        1
                                                )
                                                    setSlideIndex(
                                                        slideIndex + 1,
                                                    );

                                                if (
                                                    slideIndex ==
                                                    Math.floor(
                                                        sabinaData.length / 3,
                                                    ) -
                                                        1
                                                )
                                                    setSlideIndex(0);
                                            }}
                                        >
                                            ▶︎
                                        </span>
                                    </div>
                                </div>
                                <div className="triple_row">
                                    <div
                                        className="slideshowSlider"
                                        style={{
                                            transform: `translate3d(${
                                                -slideIndex * 100
                                            }%, 0, 0)`,
                                        }}
                                    >
                                        {sabinaData &&
                                            sabinaData.map(el => {
                                                return (
                                                    <div className="module">
                                                        <div
                                                            className="image_row embed-container-xs"
                                                            onClick={() => {
                                                                setIndex(el.id);
                                                            }}
                                                        >
                                                            <iframe
                                                                src={`${el.video}&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;sidedock=0&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;`}
                                                                frameBorder="0"
                                                                allow="autoplay;fullscreen;playsinline;"
                                                                allowfullscreen
                                                                playsinline
                                                                webkit-playsinline
                                                                webkitallowfullscreen
                                                                mozallowfullscreen
                                                            ></iframe>
                                                        </div>
                                                        <div
                                                            className="sound_row"
                                                            onClick={() => {
                                                                setIndex(el.id);
                                                            }}
                                                        >
                                                            <div
                                                                className="clickable"
                                                                onClick={() => {
                                                                    setIndex(
                                                                        el.id,
                                                                    );
                                                                }}
                                                            >
                                                                {el.date}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <div className="artist_info_container">
                                <div>{t("artist")}</div>
                                <div>
                                    <p>{t("artistInfo")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="keyword_span clickable">
                            <Link href="/">
                                <span className="clickable">Keywords</span>
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
    console.log("locale of getStaticProps", locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["sabina"])),
        },
    };
};

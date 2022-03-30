import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import dataSet from "../constants/dataSet";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const imgArr = [
    "../static/images/minjung/minjung1.png",
    "../static/images/minjung/minjung2.png",
    "../static/images/minjung/minjung3.png",
];

const Index = () => {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isItalic, setIsItalic] = useState(false);
    const [thumbUrl, setThumbUrl] = useState(false);
    const [flag, setFlag] = useState("");
    const [isKeyClicked, setIsKeyClicked] = useState(false);
    const router = useRouter();
    const { t } = useTranslation("minjung");
    const locale = router.locale;
    const [keywordArr, setKeywordArr] = useState([]);

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
                if (!item.className.includes("minjung")) return item;
            })
            .map(item => (item.style.opacity = "0"));

        const italicTarget = [...document.getElementsByClassName("minjung")];
        italicTarget.map(item => (item.style.fontFamily = "Signifier Italic"));
    }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

    if (locale === "ko" && keywordArr !== []) {
        useEffect(() => {
            let italicTarget = [...document.getElementsByClassName("minjung")];
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
                                className="ko_mobile_keyword_container"
                            >
                                <div>
                                    {dataSet[4].keywordKr.map(item => {
                                        if (
                                            item === "소리1" ||
                                            item === "소리2"
                                        )
                                            return <span>소리</span>;

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
                                        <Link href="/wonjung">
                                            <span>◀︎</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <span>{t("title")}</span>
                                        <span>{t("artist")}</span>
                                    </div>
                                    <div className="right_arrow">
                                        <Link href="/aamp">
                                            <span>▶︎</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="description_container title">
                                    <p>{t("ch1")}</p>
                                </div>
                                <div className="video_container">
                                    <img src={imgArr && imgArr[0]} />
                                </div>
                                <div className="description_container">
                                    <p>{t("p1")}</p>
                                </div>
                                <div className="video_container">
                                    <img src={imgArr && imgArr[2]} />
                                </div>
                                <div className="video_container embed-container">
                                    <iframe
                                        src="https://player.vimeo.com/video/609001790?h=28c83f2c2e&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                        frameBorder="0"
                                        allow="autoplay;fullscreen;playsinline;"
                                        allowfullscreen
                                        playsinline
                                        webkit-playsinline
                                        webkitallowfullscreen
                                        mozallowfullscreen
                                    ></iframe>
                                </div>
                                <div className="video_container">
                                    <img src={imgArr && imgArr[1]} />
                                </div>
                                <div className="description_container">
                                    <p className="exeption">{parse(t("p2"))}</p>
                                    <p className="exeption">{parse(t("p3"))}</p>
                                    <p>{t("p4")}</p>
                                    <p>{t("p5")}</p>
                                    <p>{t("p6")}</p>
                                    <p>{t("p7")}</p>
                                    <p>{t("p8")}</p>
                                </div>
                                <div className="video_container embed-container">
                                    <iframe
                                        src="https://player.vimeo.com/video/609003541?h=71e9647b49&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                        frameBorder="0"
                                        allow="autoplay;fullscreen;playsinline;"
                                        allowfullscreen
                                        playsinline
                                        webkit-playsinline
                                        webkitallowfullscreen
                                        mozallowfullscreen
                                    ></iframe>
                                </div>
                                <div className="artist_info_container">
                                    <div>{t("artist")}</div>
                                    <div>
                                        <p>{parse(t("artistInfo"))}</p>
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
                                {dataSet[4].keyword.map(item => {
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
                                    <Link href="/wonjung">
                                        <span>◀︎</span>
                                    </Link>
                                </div>
                                <div>
                                    <span>{t("title")}</span>
                                    <span>{t("artist")}</span>
                                </div>
                                <div className="right_arrow">
                                    <Link href="/aamp">
                                        <span>▶︎</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="description_container title">
                                <p>{t("ch1")}</p>
                            </div>
                            <div className="video_container">
                                <img src={imgArr && imgArr[0]} />
                            </div>
                            <div className="description_container">
                                <p>{t("p1")}</p>
                            </div>
                            <div className="video_container">
                                <img src={imgArr && imgArr[2]} />
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/609001790?h=28c83f2c2e&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="video_container">
                                <img src={imgArr && imgArr[1]} />
                            </div>
                            <div className="description_container">
                                <p className="exeption">{parse(t("p2"))}</p>
                                <p className="exeption">{parse(t("p3"))}</p>
                                <p>{t("p4")}</p>
                                <p>{t("p5")}</p>
                                <p>{t("p6")}</p>
                                <p>{t("p7")}</p>
                                <p>{t("p8")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/609003541?h=71e9647b49&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="artist_info_container">
                                <div>{t("artist")}</div>
                                <div>
                                    <p>{parse(t("artistInfo"))}</p>
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
            ...(await serverSideTranslations(locale, ["minjung"])),
        },
    };
};

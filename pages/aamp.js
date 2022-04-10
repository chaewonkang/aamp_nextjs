import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";

import { useRouter } from "next/router";
import parse from "html-react-parser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dataSet from "../constants/dataSet";

const Index = () => {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isItalic, setIsItalic] = useState(false);
    const [thumbUrl, setThumbUrl] = useState(false);
    const [flag, setFlag] = useState("");
    const [isKeyClicked, setIsKeyClicked] = useState(false);
    const router = useRouter();
    const { t } = useTranslation("aamp");
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
                if (!item.className.includes("aamp")) return item;
            })
            .map(item => (item.style.opacity = "0"));

        let italicTarget = [...document.getElementsByClassName("aamp")];

        italicTarget.map(item => (item.style.fontFamily = "Signifier Italic"));
    }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

    if (locale === "ko" && keywordArr !== []) {
        useEffect(() => {
            let italicTarget = [...document.getElementsByClassName("aamp")];
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
                                    {dataSet[3].keywordKr.map(item => {
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
                                                .map(item => {
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
                                <div className="title_container">
                                    <div className="left_arrow">
                                        <Link href="/minjung">
                                            <span>◀︎</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <span>{parse(t("subArtist"))}</span>
                                        <span>{parse(t("aamp"))}</span>
                                        <br />
                                        <span>{parse(t("title"))}</span>
                                    </div>
                                    <div className="right_arrow">
                                        <Link href="/john">
                                            <span>▶︎</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="video_container">
                                    <img
                                        src="/static/images/aamp.png"
                                        alt="aamp_thumbnail"
                                    />
                                                                     <p className="subtext">The Rocks in the forest of Bukhansan, Gugi-dong, Seoul, 2021</p>

                                </div>
                                <div className="description_container">
                                    <p style={{ textAlign: "right" }}>
                                        {parse(t("text1"))}
                                    </p>
                                    <br />
                                    <p
                                        className="exeption"
                                        style={{ textIndent: 0 }}
                                    >
                                        {parse(t("text2"))}
                                    </p>
                                    <p className="exeption">
                                        {parse(t("text3"))}
                                    </p>
                                    <p className="exeption">
                                        {parse(t("text4"))}
                                    </p>
                                    <p
                                        className="subtext exeption"
                                        style={{ textIndent: "0" }}
                                    >
                                        {parse(t("subtext"))}
                                    </p>
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
                                {dataSet[3].keyword.map(item => {
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
                            <div className="title_container">
                                <div className="left_arrow">
                                    <Link href="/minjung">
                                        <span>◀︎</span>
                                    </Link>
                                </div>
                                <div>
                                    <span>{parse(t("subArtist"))}</span>
                                    <span>{parse(t("aamp"))}</span>
                                    <br />
                                    <span>{parse(t("title"))}</span>
                                </div>
                                <div className="right_arrow">
                                    <Link href="/john">
                                        <span>▶︎</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="video_container">
                                <img
                                    src="/static/images/aamp.png"
                                    alt="aamp_thumbnail"
                                />
                                 <p className="subtext">The Rocks in the forest of Bukhansan, Gugi-dong, Seoul, 2021</p>
                            </div>
                         
                            <div className="description_container">
                                <p style={{ textAlign: "right" }}>
                                    {parse(t("text1"))}
                                </p>
                                <br />
                                <p
                                    className="exeption"
                                    style={{ textIndent: 0 }}
                                >
                                    {parse(t("text2"))}
                                </p>
                                <p className="exeption">{parse(t("text3"))}</p>
                                <p className="exeption">{parse(t("text4"))}</p>
                                <p
                                    className="subtext exeption"
                                    style={{ textIndent: "0" }}
                                >
                                    {parse(t("subtext"))}
                                </p>
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
            ...(await serverSideTranslations(locale, ["aamp"])),
        },
    };
};

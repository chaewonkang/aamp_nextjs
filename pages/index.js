import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SlideShow from "../components/SlideShow";
import dataSet from "../constants/dataSet";
import { useRouter } from "next/router";

const delay = 5000;

const thumbArr = [
    { img: "../static/images/taiki.jpg", artist: "taiki" },
    { img: "../static/images/wonjung.jpg", artist: "wonjung" },
    { img: "../static/images/aamp.jpg", artist: "aamp" },
    { img: "../static/images/john.jpg", artist: "john" },
    { img: "../static/images/sabina.jpg", artist: "sabina" },
    { img: "../static/images/minjung.jpg", artist: "minjung" },
];

const Index = () => {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isItalic, setIsItalic] = useState(false);
    const [thumbUrl, setThumbUrl] = useState("");
    const [flag, setFlag] = useState("");
    const [curIdx, setCurIdx] = useState(0);
    const [isKeyClicked, setIsKeyClicked] = useState(false);
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const [keywordArr, setKeywordArr] = useState([]);
    const router = useRouter();

    const locale = router.locale;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex(prevIndex =>
                    prevIndex === dataSet.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

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

        isKeyClicked
            ? spanTarget
                  .filter(item => {
                      if (!item.className.includes(flag)) return item;
                  })
                  .map(item => (item.style.opacity = "0"))
            : null;

        if (locale === "en") {
            dataSet.map(item => {
                if (!isKeyClicked && item.keyword.includes(keyword)) {
                    setFlag(item.flag);
                    setThumbUrl(item.thumb);
                } else return null;
            });
        } else if (locale === "ko") {
            dataSet.map(item => {
                if (!isKeyClicked && item.keywordKr.includes(keyword)) {
                    setFlag(item.flag);
                    setThumbUrl(item.thumb);
                } else return null;
            });
        }

        const italicTarget = [...document.getElementsByClassName(flag)];

        if (locale === "en") {
            isItalic
                ? italicTarget.map(
                      item => (item.style.fontFamily = "Signifier Italic"),
                  )
                : italicTarget.map(
                      item => (item.style.fontFamily = "Signifier Regular"),
                  );
        } else if (locale === "ko") {
            isItalic
                ? italicTarget.map(item => {
                      item.style.fontFamily = "Noto Serif KR";
                      item.style.fontStyle = "italic";
                  })
                : italicTarget.map(item => {
                      item.style.fontFamily = "Noto Serif KR";
                      item.style.fontStyle = "normal";
                  });
        }
    }, [
        keyword,
        thumbUrl,
        flag,
        isItalic,
        loading,
        isKeyClicked,
        curIdx,
        locale,
        keyword,
        router,
        router.locale,
    ]);

    if (locale === "ko") {
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
                            <div className="mobile_thumbnail_container">
                                <SlideShow
                                    isMobile={true}
                                    imgPath={thumbArr}
                                ></SlideShow>
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
                                                        <Link
                                                            href={`/${dataSet
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
                                                                })}`}
                                                        >
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
                                                                            50,
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
                                                                onClick={() => {
                                                                    setIsKeyClicked(
                                                                        true,
                                                                    );
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
                                                .slice(15, 30)
                                                .map((item, index) => {
                                                    if (
                                                        item === "소리1" ||
                                                        item === "소리2"
                                                    )
                                                        return (
                                                            <Link
                                                                href={`/${dataSet
                                                                    .map(el => {
                                                                        if (
                                                                            el.keywordKr.includes(
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    key={item}
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keywordKr.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                            50,
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
                                                                    onClick={() => {
                                                                        setIsKeyClicked(
                                                                            true,
                                                                        );
                                                                    }}
                                                                >
                                                                    소리
                                                                </span>
                                                            </Link>
                                                        );
                                                    return (
                                                        <Link
                                                            href={`/${dataSet
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
                                                                })}`}
                                                        >
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
                                                                    setTimeout(
                                                                        () =>
                                                                            setIsItalic(
                                                                                true,
                                                                            ),
                                                                        50,
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
                                                                onClick={() => {
                                                                    setIsKeyClicked(
                                                                        true,
                                                                    );
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
                                                .slice(30, 45)
                                                .map((item, index) => {
                                                    return (
                                                        <Link
                                                            href={`/${dataSet
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
                                                                })}`}
                                                        >
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
                                                                    setTimeout(
                                                                        () =>
                                                                            setIsItalic(
                                                                                true,
                                                                            ),
                                                                        50,
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
                                                                onClick={() => {
                                                                    setIsKeyClicked(
                                                                        true,
                                                                    );
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
                                                .slice(45, 60)
                                                .map((item, index) => {
                                                    return (
                                                        <Link
                                                            href={`/${dataSet
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
                                                                })}`}
                                                        >
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
                                                                        50,
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
                                                                onClick={() => {
                                                                    setIsKeyClicked(
                                                                        true,
                                                                    );
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
                            <div className="footer_container">
                                <span>Becoming Local</span>
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
                        <div className="mobile_thumbnail_container">
                            <SlideShow
                                isMobile={true}
                                imgPath={thumbArr}
                            ></SlideShow>
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
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <Link
                                                        href={`/${dataSet
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
                                                            })}`}
                                                    >
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
                                                                        50,
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
                                                            onClick={() => {
                                                                setIsKeyClicked(
                                                                    true,
                                                                );
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
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <Link
                                                        href={`/${dataSet
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
                                                            })}`}
                                                    >
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
                                                                    50,
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
                                                            onClick={() => {
                                                                setIsKeyClicked(
                                                                    true,
                                                                );
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
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>{" "}
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <Link
                                                        href={`/${dataSet
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
                                                            })}`}
                                                    >
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
                                                                    50,
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
                                                            onClick={() => {
                                                                setIsKeyClicked(
                                                                    true,
                                                                );
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
                                                if (
                                                    item === "sounda" ||
                                                    item === "soundb"
                                                )
                                                    return (
                                                        <Link
                                                            href={`/${dataSet
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
                                                                })}`}
                                                        >
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
                                                                        50,
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
                                                                onClick={() => {
                                                                    setIsKeyClicked(
                                                                        true,
                                                                    );
                                                                }}
                                                            >
                                                                {item.slice(
                                                                    0,
                                                                    5,
                                                                )}
                                                            </span>
                                                        </Link>
                                                    );
                                                if (
                                                    item.includes(" ") &&
                                                    item.length > 5
                                                ) {
                                                    const idx =
                                                        item.indexOf(" ");
                                                    return (
                                                        <>
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                            <Link
                                                                href={`/${dataSet
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
                                                                    )}`}
                                                            >
                                                                <span
                                                                    className={`${dataSet
                                                                        .map(
                                                                            el => {
                                                                                if (
                                                                                    el.keyword.includes(
                                                                                        item,
                                                                                    )
                                                                                )
                                                                                    return el.flag;
                                                                            },
                                                                        )
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
                                                                                50,
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
                                                            </Link>
                                                        </>
                                                    );
                                                }
                                                return (
                                                    <Link
                                                        href={`/${dataSet
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
                                                            })}`}
                                                    >
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
                                                                    50,
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
                                                            onClick={() => {
                                                                setIsKeyClicked(
                                                                    true,
                                                                );
                                                            }}
                                                        >
                                                            {item}
                                                        </span>
                                                    </Link>
                                                );
                                            })}

                                    <span style={{ opacity: "0" }}>none</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer_container">
                            <span>Becoming Local</span>
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
            ...(await serverSideTranslations(locale, ["common", "minjung"])),
        },
    };
};

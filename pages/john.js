import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import playBtn from "../static/images/playbutton.png";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const johnImgArr = [
    "../static/images/john/john_1.jpeg",
    "../static/images/john/john_2.jpg",
    "../static/images/john/john_3.jpg",
    "../static/images/john/john_4.jpg",
    "../static/images/john/john_5.jpeg",
    "../static/images/john/john_6.jpg",
    "../static/images/john/john_7.jpeg",
    "../static/images/john/john_8.jpg",
    "../static/images/john/john_9.jpg",
    "../static/images/john/john_10.png",
    "../static/images/john/john_11.png",
    "../static/images/john/john_12.jpeg",
    "../static/images/john/john_13.jpeg",
    "../static/images/john/john_14.jpeg",
    "../static/images/john/john_15.jpeg",
    "../static/images/john/john_16.jpeg",
    "../static/images/john/john_17.jpeg",
    "../static/images/john/john_18.png",
    "../static/images/john/john_19.png",
    "../static/images/john/john_20.png",
    "../static/images/john/john_21.png",
    "../static/images/john/john_22.png",
];

const dataSet = [
    {
        index: 0,
        flag: "taiki",
        artist: "Taiki Sakpisit",
        keyword: [
            "alchemical transmutation",
            "mysticism",
            "phantasmagoria",
            "disembodiment",
            "sensory stimulus",
            "eschatology",
            "spectrality",
        ],
        thumb: "../static/images/taiki.jpg",
    },
    {
        index: 1,
        flag: "wonjung",
        artist: "Wonjung Shin",
        keyword: [
            "gesture",
            "sounda",
            "network",
            "abject",
            "non-verbal",
            "dialog",
            "stress",
            "thing-in-itself",
            "noting",
        ],
        thumb: "../static/images/wonjung.jpg",
    },
    {
        index: 2,
        flag: "sabina",
        artist: "Sabina Hyoju AHN",
        keyword: [
            "covid19",
            "ai",
            "machine learning",
            "daily life",
            "soundb",
            "local",
            "digital",
            "artist",
            "residency",
            "air",
            "germany",
            "stuttgart",
            "akademies",
            "schloss",
            "solitude",
            "forest",
            "walk",
            "lockdown",
        ],
        thumb: "../static/images/sabina.png",
    },
    {
        index: 3,
        flag: "aamp",
        artist: "AAMP",
        keyword: [
            "onta",
            "caring",
            "ergliffenheit",
            "minority language",
            "xeo",
            "mountain",
            "foresta",
            "entanglement",
            "touch the ground",
        ],
        thumb: "../static/images/aamp.png",
    },
    {
        index: 4,
        flag: "minjung",
        artist: "Minjung Kim",
        keyword: [
            "connected",
            "border",
            "interaction",
            "settle down",
            "interlock",
            "tide",
            "native",
            "roam",
        ],
        thumb: "../static/images/minjung.jpg",
    },
    {
        index: 5,
        flag: "john",
        artist: "John Torres",
        keyword: [
            "intro2barter",
            "denvicky",
            "findings",
            "felicity",
            "patkay",
            "shady",
            "waiting",
            "badvibes",
            "narratives",
        ],
        thumb: "../static/images/john.png",
    },
];

const Index = () => {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isItalic, setIsItalic] = useState(false);
    const [thumbUrl, setThumbUrl] = useState(false);
    const [flag, setFlag] = useState("");
    const [isKeyClicked, setIsKeyClicked] = useState(false);
    const router = useRouter();
    const { t } = useTranslation("john");
    const locale = router.locale;
    const [isPlaying, setIsPlaying] = useState(false);

    const soundRef = useRef();

    let keywordArr = [].concat.apply(
        [],
        dataSet.map(item => item.keyword),
    );

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 500);

        const spanTarget = [...document.getElementsByClassName("keyword")];

        spanTarget
            .filter(item => {
                if (!item.className.includes("john")) return item;
            })
            .map(item => (item.style.opacity = "0"));

        const italicTarget = [...document.getElementsByClassName("john")];
        italicTarget.map(item => (item.style.fontFamily = "Signifier Italic"));
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
                                {dataSet[1].keyword.map(item => {
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
                                    <Link href="/aamp">
                                        <span>◀︎</span>
                                    </Link>
                                </div>
                                <div>
                                    <span>{t("title")}</span>
                                    <span>{t("artist")}</span>
                                </div>
                                <div className="right_arrow">
                                    <Link href="/taiki">
                                        <span>▶︎</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="description_container title">
                                <p>1 {t("intro2barter")}</p>
                            </div>
                            <div className="description_container">
                                <p>{t("intro2barter0")}</p>
                            </div>

                            <div className="description_container">
                                <p>{t("intro2barter1")}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[0]} />
                            </div>
                            <div className="description_container title">
                                <p>2 {t("denvicky")}</p>
                            </div>
                            <div className="description_container">
                                <p>
                                    <span className="italic">
                                        {t("italic0")}
                                    </span>{" "}
                                    {t("denvicky0")}
                                </p>
                                <p>{t("denvicky1")}</p>
                                <br />
                                <span>{t("denvicky2")}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[1]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[2]} />
                            </div>
                            <div className="description_container">
                                <span>{t("denvicky3")}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[3]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[4]} />
                            </div>
                            <div className="description_container">
                                <span>{t("denvicky4")}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[5]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[6]} />
                            </div>
                            <div className="description_container">
                                <span>{t("denvicky5")}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[7]} />
                            </div>
                            <div className="description_container title">
                                <p>3 {t("findings")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("findings0")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("findings1")}
                                </p>
                                <p>{t("findings2")}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[8]} />
                            </div>
                            <div className="description_container">
                                <p>
                                    {t("findings3")}
                                    <span className="italic">
                                        {t("italic1")}
                                    </span>
                                    ,{t("findings4")}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[9]} />
                            </div>
                            <div className="description_container">
                                <p>{t("findings5")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572100036?h=d276a18c1b&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p>{t("findings6")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("findings7")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("findings8")}
                                </p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572097742?h=0b97b892eb&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p>{t("findings9")}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[10]} />
                            </div>
                            <div className="description_container title">
                                <p>4 {t("patkay")}</p>
                            </div>
                            <div className="description_container">
                                <p>{t("patkay0")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572100879?h=20f5db5ec5&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                <img src={johnImgArr[11]} />
                            </div>
                            <div className="description_container">
                                <p>{t("patkay1")}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[12]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[13]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[14]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[15]} />
                            </div>
                            <div className="description_container">
                                <p>{t("patkay2")}</p>
                                <br />
                                <p className="center" style={{ textIndent: 0 }}>
                                    {t("patkay3")}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[16]} />
                            </div>
                            <div className="description_container">
                                <p>{t("patkay4")}</p>
                            </div>
                            <div className="description_container title">
                                <p>5 {t("shady")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("shady0")}</p>
                                <p style={{ textIndent: 0 }}>{t("shady1")}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[17]} />
                            </div>
                            <div className="description_container">
                                <p>{t("shady2")}</p>
                                <p>{t("shady3")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572102508?h=f93fd1f806&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p>{t("shady4")}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[18]} />
                            </div>
                            <div className="description_container">
                                <p>{t("shady5")}</p>
                            </div>
                            <div className="description_container">
                                <p
                                    className="sound_button"
                                    onClick={() => {
                                        setIsPlaying(!isPlaying);

                                        if (!isPlaying) {
                                            soundRef.current.play();
                                        } else {
                                            soundRef.current.pause();
                                            soundRef.current.currentTime = 0;
                                        }
                                    }}
                                >
                                    ►{" "}
                                    <span
                                        className="clcikable"
                                        style={
                                            !isPlaying
                                                ? null
                                                : {
                                                      fontFamily:
                                                          "Signifier Italic",
                                                  }
                                        }
                                    >
                                        {isPlaying ? "Sound off" : "Sound on"}
                                        (jojo.wav)
                                    </span>
                                </p>
                                <audio
                                    src="/static/sound/john/jojo.wav"
                                    ref={soundRef}
                                />
                            </div>
                            <div className="description_container">
                                <p>{t("shady6")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center"> {t("shady7")}</p>
                                <p style={{ textIndent: 0 }}>{t("shady8")}</p>
                                <p>{t("shady9")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572098721?h=ef265608ae&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container title">
                                <p>6 {t("waiting")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("waiting0")}</p>
                                <p style={{ textIndent: 0 }}>{t("waiting1")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572099318?h=23cc2e5b30&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p className="center"> {t("waiting2")}</p>
                                <p style={{ textIndent: 0 }}>{t("waiting3")}</p>
                                <p>{t("waiting4")}</p>
                                <p>{t("waiting5")}</p>
                                <p>{t("waiting6")}</p>
                                <p>{t("waiting7")}</p>
                            </div>
                            {/* <div className="audio_player">
                                <div className="player">
                                    <img src={playBtn} />
                                </div>
                            </div> */}
                            <div className="description_container">
                                <p>{t("waiting8")}</p>
                            </div>
                            <div className="description_container title">
                                <p>7 {t("badvibes")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("badvibes0")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("badvibes1")}
                                </p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("badvibes2")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("badvibes3")}
                                </p>
                                <p>{t("badvibes4")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("badvibes5")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("badvibes6")}
                                </p>
                            </div>
                            {/* <div className="audio_player">
                                <div className="player">
                                    <img src={playBtn} />
                                </div>
                            </div> */}
                            <div className="description_container">
                                <p className="center">{t("badvibes7")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("badvibes8")}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[19]} />
                            </div>
                            <div className="description_container">
                                <p>{t("badvibes9")}</p>
                            </div>
                            <div className="description_container title">
                                <p>8 {t("narratives")}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("narratives0")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("narratives1")}
                                </p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572101131?h=99d5d6d523&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("narratives2")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("narratives3")}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[20]} />
                            </div>
                            <div className="description_container">
                                <p>{t("narratives4")}</p>
                                <p>{t("narratives5")}</p>
                                <p>{t("narratives6")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572097817?h=76c427a3c1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p className="center">{t("plantandcookies")}</p>
                                <p style={{ textIndent: 0 }}>
                                    {t("plantandcookies0")}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[21]} />
                            </div>

                            <div className="description_container">
                                <p>{t("plantandcookies1")}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572100326?h=c18a74b359&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
                                    frameBorder="0"
                                    allow="autoplay;fullscreen;playsinline;"
                                    allowfullscreen
                                    playsinline
                                    webkit-playsinline
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                ></iframe>
                            </div>
                            <div className="description_container">
                                <p>{t("plantandcookies2")}</p>
                                <p>{t("plantandcookies3")}</p>
                            </div>
                            {/* Artist Info */}
                            {/* Artist Info */}
                            {/* Artist Info */}
                            {/* Artist Info */}
                            {/* Artist Info */}
                            <div className="artist_info_container">
                                <div> {t("artist")}</div>
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
            ...(await serverSideTranslations(locale, ["john"])),
        },
    };
};

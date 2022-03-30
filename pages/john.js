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
    const [keywordArr, setKeywordArr] = useState([]);

    const soundRef = useRef();

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
                if (!item.className.includes("john")) return item;
            })
            .map(item => (item.style.opacity = "0"));

        const italicTarget = [...document.getElementsByClassName("john")];
        italicTarget.map(item => (item.style.fontFamily = "Signifier Italic"));
    }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

    if (locale === "ko" && keywordArr !== []) {
        useEffect(() => {
            let italicTarget = [...document.getElementsByClassName("john")];
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
                                    {dataSet[5].keywordKr.map(item => {
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
                                <div className="title_container">
                                    <div className="left_arrow">
                                        <Link href="/aamp">
                                            <span>◀︎</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <span>{parse(t("title"))}</span>
                                        <span>{parse(t("artist"))}</span>
                                    </div>
                                    <div className="right_arrow">
                                        <Link href="/taiki">
                                            <span>▶︎</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="description_container title">
                                    <p>1 {parse(t("intro2barter"))}</p>
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("intro2barter0"))}</p>
                                    <p>{parse(t("intro2barter0-1"))}</p>
                                </div>
                                <div className="video_container embed-container">
                                    <iframe
                                        src="https://player.vimeo.com/video/688652963?h=b441808aa9&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                    <p>{parse(t("intro2barter1"))}</p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[0]} />
                                </div>
                                <div className="description_container title">
                                    <p>2 {parse(t("denvicky"))}</p>
                                </div>
                                <div className="description_container">
                                    <p>
                                        <span className="italic">
                                            {parse(t("italic0"))}
                                        </span>{" "}
                                        {parse(t("denvicky0"))}
                                    </p>
                                    <p>{parse(t("denvicky1"))}</p>
                                    <br />
                                    <span>{parse(t("denvicky2"))}</span>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[1]} />
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[2]} />
                                </div>
                                <div className="description_container">
                                    <span>{parse(t("denvicky3"))}</span>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[3]} />
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[4]} />
                                </div>
                                <div className="description_container">
                                    <span>{parse(t("denvicky4"))}</span>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[5]} />
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[6]} />
                                </div>
                                <div className="description_container">
                                    <span>{parse(t("denvicky5"))}</span>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[7]} />
                                </div>
                                <div className="description_container title">
                                    <p>3 {parse(t("findings"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("findings0"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("findings1"))}
                                    </p>
                                    <p>{parse(t("findings2"))}</p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[8]} />
                                </div>
                                <div className="description_container">
                                    <p>
                                        {parse(t("findings3"))}
                                        {parse(t("italic1"))}
                                        {parse(t("findings4"))}
                                    </p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[9]} />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("findings5"))}</p>
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
                                    <p>{parse(t("findings6"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("findings7"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("findings8"))}
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
                                    <p>{parse(t("findings9"))}</p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[10]} />
                                </div>
                                <div className="description_container title">
                                    <p>4 {parse(t("patkay"))}</p>
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("patkay0"))}</p>
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
                                    <p>{parse(t("patkay1"))}</p>
                                </div>
                                <div className="description_container">
                                    <p>
                                        {parse(t("italic2"))}
                                        {parse(t("patkay2"))}
                                    </p>
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
                                    <p
                                        className="center"
                                        style={{ textIndent: 0 }}
                                    >
                                        {parse(t("patkay3"))}
                                    </p>
                                    <br />
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("patkay4"))}
                                    </p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[16]} />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("patkay5"))}</p>
                                </div>
                                <div className="description_container title">
                                    <p>5 {parse(t("shady"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("shady0"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("shady1"))}
                                    </p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[17]} />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("shady2"))}</p>
                                    <p>{parse(t("shady3"))}</p>
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
                                    <p>{parse(t("shady4"))}</p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[18]} />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("shady5"))}</p>
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
                                            {isPlaying
                                                ? "Sound off"
                                                : "Sound on"}
                                            (jojo.wav)
                                        </span>
                                    </p>
                                    <audio
                                        src="/static/sound/john/jojo.wav"
                                        ref={soundRef}
                                    />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("shady6"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {" "}
                                        {parse(t("shady7"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("shady8"))}
                                    </p>
                                    <p>{parse(t("shady9"))}</p>
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
                                    <p>6 {parse(t("waiting"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("waiting0"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("waiting1"))}
                                    </p>
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
                                    <p className="center">
                                        {" "}
                                        {parse(t("waiting2"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("waiting3"))}
                                    </p>
                                    <p>{parse(t("waiting4"))}</p>
                                    <p>{parse(t("waiting5"))}</p>
                                    <p>{parse(t("waiting6"))}</p>
                                    <p>{parse(t("waiting7"))}</p>
                                </div>
                                <div className="video_container embed-container">
                                    <iframe
                                        src="https://player.vimeo.com/video/688653592?h=9094a76ca1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                    <p>{parse(t("waiting8"))}</p>
                                </div>
                                <div className="description_container title">
                                    <p>7 {parse(t("badvibes"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("badvibes0"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("badvibes1"))}
                                    </p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("badvibes2"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("badvibes3"))}
                                    </p>

                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("badvibes4"))}
                                    </p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("badvibes5"))}
                                    </p>
                                    <p>{parse(t("badvibes6"))}</p>
                                </div>
                                <div className="video_container embed-container">
                                    <iframe
                                        src="https://player.vimeo.com/video/572105633?h=2050d62024&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                    <p className="center">
                                        {parse(t("badvibes7"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("badvibes8"))}
                                    </p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[19]} />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("badvibes9"))}</p>
                                </div>
                                <div className="description_container title">
                                    <p>8 {parse(t("narratives"))}</p>
                                </div>
                                <div className="description_container">
                                    <p className="center">
                                        {parse(t("narratives0"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("narratives1"))}
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
                                    <p className="center">
                                        {parse(t("narratives2"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("narratives3"))}
                                    </p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[20]} />
                                </div>
                                <div className="description_container">
                                    <p>{parse(t("narratives4"))}</p>
                                    <p>{parse(t("narratives5"))}</p>
                                    <p>{parse(t("narratives6"))}</p>
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
                                    <p className="center">
                                        {parse(t("plantandcookies"))}
                                    </p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("plantandcookies0"))}
                                    </p>
                                </div>
                                <div className="video_container">
                                    <img src={johnImgArr[21]} />
                                </div>

                                <div className="description_container">
                                    <p>{parse(t("plantandcookies1"))}</p>
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
                                    <p>{parse(t("plantandcookies2"))}</p>
                                    <p style={{ textIndent: 0 }}>
                                        {parse(t("plantandcookies3"))}
                                    </p>
                                </div>
                                {/* Artist Info */}
                                {/* Artist Info */}
                                {/* Artist Info */}
                                {/* Artist Info */}
                                {/* Artist Info */}
                                <div className="artist_info_container">
                                    <div> {parse(t("artist"))}</div>
                                    <div>
                                        <p className="exeption">
                                            {parse(t("artistInfo"))}
                                        </p>
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
                                {dataSet[5].keyword.map(item => {
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
                                    <span>{parse(t("title"))}</span>
                                    <span>{parse(t("artist"))}</span>
                                </div>
                                <div className="right_arrow">
                                    <Link href="/taiki">
                                        <span>▶︎</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="description_container title">
                                <p>1 {parse(t("intro2barter"))}</p>
                            </div>
                            <div className="description_container">
                                <p>{parse(t("intro2barter0"))}</p>
                                <p>{parse(t("intro2barter0-1"))}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/688652963?h=b441808aa9&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                <p>{parse(t("intro2barter1"))}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[0]} />
                            </div>
                            <div className="description_container title">
                                <p>2 {parse(t("denvicky"))}</p>
                            </div>
                            <div className="description_container">
                                <p>
                                    <span className="italic">
                                        {parse(t("italic0"))}
                                    </span>{" "}
                                    {parse(t("denvicky0"))}
                                </p>
                                <p>{parse(t("denvicky1"))}</p>
                                <br />
                                <span>{parse(t("denvicky2"))}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[1]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[2]} />
                            </div>
                            <div className="description_container">
                                <span>{parse(t("denvicky3"))}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[3]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[4]} />
                            </div>
                            <div className="description_container">
                                <span>{parse(t("denvicky4"))}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[5]} />
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[6]} />
                            </div>
                            <div className="description_container">
                                <span>{parse(t("denvicky5"))}</span>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[7]} />
                            </div>
                            <div className="description_container title">
                                <p>3 {parse(t("findings"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">
                                    {parse(t("findings0"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("findings1"))}
                                </p>
                                <p>{parse(t("findings2"))}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[8]} />
                            </div>
                            <div className="description_container">
                                <p>
                                    {parse(t("findings3"))}
                                    <span className="italic">
                                        {parse(t("italic1"))}
                                    </span>
                                    ,{parse(t("findings4"))}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[9]} />
                            </div>
                            <div className="description_container">
                                <p>{parse(t("findings5"))}</p>
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
                                <p>{parse(t("findings6"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">
                                    {parse(t("findings7"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("findings8"))}
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
                                <p>{parse(t("findings9"))}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[10]} />
                            </div>
                            <div className="description_container title">
                                <p>4 {parse(t("patkay"))}</p>
                            </div>
                            <div className="description_container">
                                <p>{parse(t("patkay0"))}</p>
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
                                <p>{parse(t("patkay1"))}</p>
                            </div>
                            <div className="description_container">
                                <p>{parse(t("patkay2"))}</p>
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
                                <p className="center" style={{ textIndent: 0 }}>
                                    {parse(t("patkay3"))}
                                </p>
                                <br />
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("patkay4"))}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[16]} />
                            </div>
                            <div className="description_container">
                                <p>{parse(t("patkay5"))}</p>
                            </div>
                            <div className="description_container title">
                                <p>5 {parse(t("shady"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{parse(t("shady0"))}</p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("shady1"))}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[17]} />
                            </div>
                            <div className="description_container">
                                <p>{parse(t("shady2"))}</p>
                                <p>{parse(t("shady3"))}</p>
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
                                <p>{parse(t("shady4"))}</p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[18]} />
                            </div>
                            <div className="description_container">
                                <p>{parse(t("shady5"))}</p>
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
                                <p>{parse(t("shady6"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center"> {parse(t("shady7"))}</p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("shady8"))}
                                </p>
                                <p>{parse(t("shady9"))}</p>
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
                                <p>6 {parse(t("waiting"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">{parse(t("waiting0"))}</p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("waiting1"))}
                                </p>
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
                                <p className="center">
                                    {" "}
                                    {parse(t("waiting2"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("waiting3"))}
                                </p>
                                <p>{parse(t("waiting4"))}</p>
                                <p>{parse(t("waiting5"))}</p>
                                <p>{parse(t("waiting6"))}</p>
                                <p>{parse(t("waiting7"))}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/688653592?h=9094a76ca1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                <p>{parse(t("waiting8"))}</p>
                            </div>
                            <div className="description_container title">
                                <p>7 {parse(t("badvibes"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">
                                    {parse(t("badvibes0"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("badvibes1"))}
                                </p>
                            </div>
                            <div className="description_container">
                                <p className="center">
                                    {parse(t("badvibes2"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("badvibes3"))}
                                </p>
                                <br />
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("badvibes4"))}
                                </p>
                            </div>
                            <div className="description_container">
                                <p className="center">
                                    {parse(t("badvibes5"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("badvibes6"))}
                                </p>
                                <p>{parse(t("badvibes6-1"))}</p>
                            </div>
                            <div className="video_container embed-container">
                                <iframe
                                    src="https://player.vimeo.com/video/572105633?h=2050d62024&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=1&amp;sidedock=0&amp;loop=1&amp;muted=0&amp;"
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
                                <p className="center">
                                    {parse(t("badvibes7"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("badvibes8"))}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[19]} />
                            </div>
                            <div className="description_container">
                                <p>{parse(t("badvibes9"))}</p>
                            </div>
                            <div className="description_container title">
                                <p>8 {parse(t("narratives"))}</p>
                            </div>
                            <div className="description_container">
                                <p className="center">
                                    {parse(t("narratives0"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("narratives1"))}
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
                                <p className="center">
                                    {parse(t("narratives2"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("narratives3"))}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[20]} />
                            </div>
                            <div className="description_container">
                                <p>{parse(t("narratives4"))}</p>
                                <p>{parse(t("narratives5"))}</p>
                                <p>{parse(t("narratives6"))}</p>
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
                                <p className="center">
                                    {parse(t("plantandcookies"))}
                                </p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("plantandcookies0"))}
                                </p>
                            </div>
                            <div className="video_container">
                                <img src={johnImgArr[21]} />
                            </div>

                            <div className="description_container">
                                <p>{parse(t("plantandcookies1"))}</p>
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
                                <p>{parse(t("plantandcookies2"))}</p>
                                <p style={{ textIndent: 0 }}>
                                    {parse(t("plantandcookies3"))}
                                </p>
                            </div>
                            {/* Artist Info */}
                            {/* Artist Info */}
                            {/* Artist Info */}
                            {/* Artist Info */}
                            {/* Artist Info */}
                            <div className="artist_info_container">
                                <div> {parse(t("artist"))}</div>
                                <div>
                                    <p className="exeption">
                                        {parse(t("artistInfo"))}
                                    </p>
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

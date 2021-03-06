import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";

import theme from "../../styles/theme";
import PageLayout from "../../components/PageLayout";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser";

const About = () => {
    const { t } = useTranslation("about");
    const router = useRouter();
    const locale = router.locale;

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>
                <div
                    className={
                        locale === "en"
                            ? "about_container"
                            : "ko_type about_container"
                    }
                >
                    <div className="about_nav">
                        <div>
                            <h2
                                style={
                                    locale === "en"
                                        ? { fontFamily: "Signifier Italic" }
                                        : {
                                              fontWeight: 900,
                                          }
                                }
                            >
                                {t("subject1")}
                            </h2>
                        </div>
                        <div>
                            <Link href="/about/program">
                                <h2>{t("subject2")}</h2>
                            </Link>
                        </div>
                        <div>
                            <Link href="/about/past_events">
                                <h2>{t("subject3")}</h2>
                            </Link>
                        </div>
                        <div>
                            <Link href="/about/participants">
                                <h2>{t("subject4")}</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="about_content">
                        <h3>{t("title1")}</h3>
                        <div className="about_content_1">
                            <p>{parse(t("p1"))}</p>
                            <p>{parse(t("p2"))}</p>
                            <p>{parse(t("p3"))}</p>
                            <p>{parse(t("p4"))}</p>
                        </div>
                        <div className="about_content_2">
                            <br />
                            <div>
                                <span>{t("title2")}</span>
                                <span>{t("p5")}</span>
                            </div>
                            <div>
                                <span>{t("title3")}</span>
                                <span>{parse(t("p6"))}</span>
                            </div>
                            <div>
                                <span>{parse(t("title4"))}</span>
                                <span>{parse(t("p7"))}</span>
                            </div>

                            <div>
                                <span>{t("title6")}</span>
                                <span>
                                    {t("programme1")}
                                    <br />
                                    {t("programme2")}
                                </span>
                            </div>
                            <div>
                                <span>{parse(t("credit"))}</span>
                            </div>
                            <div className="center">
                                <p className="eng_info">
                                    3rd Curatorial Forum 2020-2021 is organized
                                    by <br></br>
                                    GyeongGi Cultural Foundation, and developed
                                    and <br></br>
                                    curated by Asian Artist Moving Image
                                    Platform(AAMP).
                                    <br />
                                    <br></br> Artists Workshop Project and
                                    e-journal<br></br> in collaboration with all
                                    members of participating artists and writers
                                    <br />
                                    <br />
                                    ??2020-2022. Artist Research Workshop Project
                                    and 1st e-journal Moving Image in
                                    collaboration with all members of
                                    participating artists and writers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sponsor">
                        <img src="../../static/images/sponsor.png"></img>
                    </div>
                </div>
            </PageLayout>
        </ThemeProvider>
    );
};

export default About;

export const getStaticProps = async ({ locale }) => {
    console.log("locale of getStaticProps", locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about"])),
        },
    };
};

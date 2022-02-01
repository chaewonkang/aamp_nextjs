import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";

import theme from "../../styles/theme";
import PageLayout from "../../components/PageLayout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const About = ({ locale }) => {
    const { t } = useTranslation("about");

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>
                <div className="about_container">
                    <div className="about_nav">
                        <div>
                            <h2 style={{ fontFamily: "Signifier Italic" }}>
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
                    </div>
                    <div className="about_content">
                        <h3>{t("title1")}</h3>
                        <div className="about_content_1">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                            <p>{t("p4")}</p>
                        </div>
                        <div className="about_content_2">
                            <div>
                                <span>{t("title2")}</span>
                                <span>{t("p5")}</span>
                            </div>
                            <div>
                                <span>{t("title3")}</span>
                                <span>{t("p6")}</span>
                            </div>
                            <div>
                                <span>{t("title4")}</span>
                                <span>{t("p7")}</span>
                            </div>
                            <div>
                                <span>{t("title5")}</span>
                                <span>
                                    {t("participant1")}, {t("participant2")}
                                    <br></br>
                                    {t("participant3")} <br></br>
                                    {t("participant4")} <br></br>
                                    {t("participant5")} <br></br>
                                    {t("participant6")} <br></br>
                                    {t("participant7")} <br></br>
                                    {t("participant8")} <br></br>
                                    {t("participant9")}
                                    <br></br>
                                    {t("participant10")}
                                    <br></br>
                                </span>
                            </div>
                            <div>
                                <span>{t("title6")}</span>
                                <span>
                                    {t("programme1")} {t("programme2")}{" "}
                                    {t("programme3")}
                                    <br></br>
                                    {t("programme4")}
                                </span>
                            </div>
                            <div className="center">
                                <p>
                                    3rd Curatorial Forum 2020-2021 is organized
                                    by <br></br>
                                    GyeongGi Cultural Foundation, and developed
                                    and <br></br>
                                    curated by Asian Artist Moving Image
                                    Platform(AAMP).
                                    <br></br> Artists Workshop Project and
                                    e-journal<br></br> in collaboration with all
                                    members of participating artists and writers
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

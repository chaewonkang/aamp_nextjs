import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import theme from "../../styles/theme";
import PageLayout from "../../components/PageLayout";
import parse from "html-react-parser";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Artist = () => {
    const { t } = useTranslation("participants");
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
                            <Link href="/about">
                                <h2>{t("subject1")}</h2>
                            </Link>
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
                                <h2
                                    style={
                                        locale === "en"
                                            ? { fontFamily: "Signifier Italic" }
                                            : {
                                                  fontWeight: 900,
                                              }
                                    }
                                >
                                    {t("subject4")}
                                </h2>
                            </Link>
                        </div>
                    </div>
                    <div className="about_content">
                        <div className="about_content_1">
                            <p
                                style={{
                                    textIndent: 0,
                                    textAlign: "center",
                                }}
                            >
                                {t("par1")}
                                <br /> {t("artist1")}
                                <br />
                                {t("artist2")}
                                <br />
                                {t("artist3")}
                                <br />
                                {t("artist4")}
                                <br />
                                {t("artist5")}
                                <br />
                                {t("artist6")}
                            </p>
                            <br />
                            <p
                                style={{
                                    textIndent: 0,
                                    textAlign: "center",
                                }}
                            >
                                <a href={t("par2link")} target="_blank">
                                    {t("par2")}
                                </a>
                                <br />
                                <a href={t("link1")} target="_blank">
                                    {t("writer1")}
                                </a>
                                <br />
                                <a href={t("link2")} target="_blank">
                                    {t("writer2")}
                                </a>
                                <br />
                                <a href={t("link3")} target="_blank">
                                    {t("writer3")}
                                </a>
                                <br />

                                <a href={t("link4")} target="_blank">
                                    {t("writer4")}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </ThemeProvider>
    );
};

export default Artist;

export const getStaticProps = async ({ locale }) => {
    console.log("locale of getStaticProps", locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["participants"])),
        },
    };
};

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import theme from "../../styles/theme";
import PageLayout from "../../components/PageLayout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Program = () => {
    const { t } = useTranslation("program");
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
                                <h2
                                    style={
                                        locale === "en"
                                            ? { fontFamily: "Signifier Italic" }
                                            : {
                                                  fontWeight: 900,
                                              }
                                    }
                                >
                                    {t("subject2")}
                                </h2>
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
                        <div className="about_content_1">
                            <span> {t("title1")}</span>
                            <p style={{ textIndent: 0 }}>{t("p1")}</p>
                            <p>
                                {t("p2")}{" "}
                                <span className="text-style-2">
                                    {t("italic1")}
                                </span>
                                {t("p3")}
                            </p>
                            <p>
                                <span className="text-style-2">
                                    {t("italic1")}
                                </span>{" "}
                                {t("p4")}
                            </p>
                            <p>{t("p5")}</p>
                        </div>
                        <br />
                        <div className="about_content_2">
                            <div>
                                <span className="text-style-4">
                                    {" "}
                                    {t("title2")}
                                </span>
                                <p style={{ textIndent: 0 }}>{t("p6")}</p>
                            </div>
                            <br />
                            <div>
                                <span className="text-style-7">
                                    {t("title3")}
                                </span>
                                <p style={{ textIndent: 0 }}>
                                    {t("p7")}
                                    <br /> {t("p8")}
                                    <br />
                                    {t("p9")}
                                    <br />
                                    {t("p10")}
                                    <br />
                                    {t("p11")}
                                    <br />
                                    {t("p12")}
                                    <br />
                                    {t("p13")}
                                    <br />
                                    {t("p14")}
                                    <br /> {t("p15")}
                                    <br />
                                    {t("p16")}
                                </p>
                            </div>
                            <br />
                            <div>
                                <span className="text-style-8">
                                    {t("title4")}
                                </span>
                                <p style={{ textIndent: 0 }}>{t("p17")}</p>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </ThemeProvider>
    );
};

export default Program;

export const getStaticProps = async ({ locale }) => {
    console.log("locale of getStaticProps", locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["program"])),
        },
    };
};

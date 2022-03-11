import { ThemeProvider } from "styled-components";
import Link from "next/link";
import theme from "../../styles/theme";
import PageLayout from "../../components/PageLayout";
import parse from "html-react-parser";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const PastEvents = () => {
    const { t } = useTranslation("past_events");
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
                                <h2
                                    style={
                                        locale === "en"
                                            ? { fontFamily: "Signifier Italic" }
                                            : {
                                                  fontWeight: 900,
                                              }
                                    }
                                >
                                    {t("subject3")}
                                </h2>
                            </Link>
                        </div>
                    </div>
                    <div className="about_content">
                        <div className="about_content_1">
                            <div>
                                <span>{t("title1")}</span>
                                <span>{t("title2")}</span>
                                <span>{t("title3")}</span>
                                <p style={{ textIndent: 0 }}>{t("text1")}</p>
                            </div>
                            <div className="title_bar">
                                <span>{t("date1")}</span>
                            </div>
                            <div>
                                <span>{t("date1_1")}</span>
                                <span>{t("date1_2")}</span>

                                <p style={{ textIndent: 0 }}>{t("date1_3")}</p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <span>{t("date1_4")}</span>
                                <span>{t("date1_5")}</span>
                                <p class="exeption" style={{ textIndent: 0 }}>
                                    {parse(t("date1_6"))}
                                </p>
                            </div>
                            <div className="title_bar">
                                <span>{t("date2")}</span>
                            </div>
                            <div>
                                <span>{t("date2_1")}</span>
                                <span>{t("date2_2")}</span>
                                <p style={{ textIndent: 0 }}>{t("date2_3")}</p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <span>{t("date2_4")}</span>
                                <span>{t("date2_5")}</span>
                                <p style={{ textIndent: 0 }}>{t("date2_6")}</p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <span>{t("date2_7")}</span>
                                <span>{t("date2_8")}</span>
                                <p style={{ textIndent: 0 }}>{t("date2_9")}</p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <span>{t("date2_10")}</span>
                                <span>{t("date2_11")}</span>
                                <p style={{ textIndent: 0 }}>{t("date2_12")}</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </ThemeProvider>
    );
};

export default PastEvents;

export const getStaticProps = async ({ locale }) => {
    console.log("locale of getStaticProps", locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["past_events"])),
        },
    };
};

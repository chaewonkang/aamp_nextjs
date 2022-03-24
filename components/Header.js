import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();

    const { pathname } = router;
    const originPath = pathname.replace("/en", "");

    return (
        <div className="header_container">
            <div className="header_inner">
                <div id="desktopOnly">
                    {router.asPath.includes("about") ? (
                        <h1>
                            <span
                                onClick={() => {
                                    router.push({ pathname: "/about" });
                                }}
                                className="clickable"
                                style={{ fontFamily: "Signifier Italic" }}
                            >
                                About Artist Research Workshop{" "}
                            </span>
                            <span
                                onClick={() => {
                                    router.push({ pathname: "/" });
                                }}
                                className="clickable"
                            >
                                Becoming Local
                            </span>
                        </h1>
                    ) : (
                        <h1>
                            <span
                                onClick={() => {
                                    router.push({ pathname: "/about" });
                                }}
                                className="clickable"
                            >
                                About Artist Research Workshop{" "}
                            </span>
                            <span
                                style={{ fontFamily: "Signifier Italic" }}
                                onClick={() => {
                                    router.push({ pathname: "/" });
                                }}
                                className="clickable"
                            >
                                Becoming Local
                            </span>
                        </h1>
                    )}
                </div>
                <div id="mobileOnly">
                    {router.asPath.includes("about") ? (
                        <Link href="/">
                            <h1 style={{ fontFamily: "Signifier Italic" }}>
                                About
                            </h1>
                        </Link>
                    ) : (
                        <Link href="/about">
                            <h1>About</h1>
                        </Link>
                    )}
                </div>
                <div className="global">
                    <Link
                        scroll={false}
                        href={pathname.startsWith("/ko/") ? originPath : ""}
                        locale="en"
                    >
                        <a>
                            <span
                                className="clickable"
                                style={
                                    router.locale === "en"
                                        ? {
                                              fontFamily: "Signifier Italic",
                                          }
                                        : null
                                }
                            >
                                EN
                            </span>
                        </a>
                    </Link>
                    <span>/</span>
                    <Link
                        scroll={false}
                        href={pathname.startsWith("/en/") ? originPath : ""}
                        locale="ko"
                    >
                        <span
                            className="clickable"
                            style={
                                router.locale === "ko"
                                    ? {
                                          fontFamily: "Signifier Italic",
                                      }
                                    : null
                            }
                        >
                            KO
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;

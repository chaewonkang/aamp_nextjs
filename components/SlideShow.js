import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const delay = 5000;

function Slideshow({ imgPath, isMobile }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

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
                    prevIndex === imgPath.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
            <div className="slideshow">
                <div className="arrowbox">
                    <div>
                        <span
                            onClick={() => {
                                if (index < imgPath.length && 0 < index) {
                                    setIndex(index - 1);
                                }
                                if (index == 0) {
                                    setIndex(imgPath.length - 1);
                                }
                            }}
                        >
                            ◀︎
                        </span>
                    </div>
                    <div>
                        <span
                            onClick={() => {
                                if (index < imgPath.length - 1) {
                                    setIndex(index + 1);
                                }
                                if (index == imgPath.length - 1) {
                                    setIndex(0);
                                }
                            }}
                        >
                            ▶︎
                        </span>
                    </div>
                </div>
                {isMobile ? (
                    <div
                        className="slideshowSlider"
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {imgPath.map(item => {
                            return (
                                <Link href={`/${item.artist}`}>
                                    <div className="slide" key={item.artist}>
                                        <img src={item.img}></img>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div
                        className="slideshowSlider"
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {imgPath.map((image, index) => (
                            <div className="slide" key={image + index}>
                                <img src={image}></img>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Slideshow;

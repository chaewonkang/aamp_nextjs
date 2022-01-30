import { useEffect, useRef } from "react";

function Clip(props) {
    const videoRef = useRef();
    const previousUrl = useRef(props.url);

    useEffect(() => {
        if (previousUrl.current === props.url) {
            return;
        }

        if (videoRef.current) {
            videoRef.current.load();
        }

        previousUrl.current = props.url;
    }, [props.url]);

    return (
        <video ref={videoRef} controls>
            <source src={props.url} />
        </video>
    );
}

export default Clip;

import { useEffect, useRef } from "react";

const Hero = () => {
    // вкажи тип елемента і початково null
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const v = videoRef.current;
        if (v) v.playbackRate = 2; // тепер TS знає, що це HTMLVideoElement
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
            </div>

            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                playsInline
            />

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    );
};

export default Hero;

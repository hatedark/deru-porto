'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../hero.module.css';

export default function Slider({ children, direction, directionE, x }: any) {
    const firstText: any = useRef(null);
    const secondText: any = useRef(null);
    const slider: any = useRef(null);
    let xPercent = 0;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.5,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * directionE),
            },
            x: x,
        });
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }
        if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        xPercent += 0.05 * direction;
        requestAnimationFrame(animate);
    };

    return (
        <div ref={slider}>
            <div className={styles.slider}>
                {React.cloneElement(children, {
                    ref: firstText,
                })}
                {React.cloneElement(children, {
                    ref: secondText,
                })}
            </div>
        </div>
    );
}

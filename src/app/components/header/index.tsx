'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './navbar.module.scss';
import NavItems from './navItems';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Magnetic from '../magnetic';
import Button from '../button';

export default function Navbar() {
    const header = useRef(null);
    const [isActive, setisActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setisActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: '+=20%',
                onLeave: () => {
                    gsap.to(button.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: 'power1.out',
                    });
                },
                onEnterBack: () => {
                    gsap.to(button.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: 'power1.out',
                    });
                },
            },
        });
    }, []);

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.deru}>Deru</p>
                        <p className={styles.delvan}>Delvan Ramadhan</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerBtnContainer}>
                <Button
                    onClick={() => {
                        setisActive(!isActive);
                    }}
                    className={`${styles.button}`}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ''
                        }`}
                    ></div>
                </Button>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <NavItems />}
            </AnimatePresence>
        </>
    );
}

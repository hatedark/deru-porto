'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/preloader';
import Hero from './components/hero';
import Description from './components/description';
import Works from './components/works';
import CircleDiv from './components/circleDiv';
import Contact from './components/contact';

import styles from './page.module.css';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    return (
        <main className={styles.main}>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>

            <Hero />
            <Description />
            <Works />
            <CircleDiv />
            <Contact />
        </main>
    );
}

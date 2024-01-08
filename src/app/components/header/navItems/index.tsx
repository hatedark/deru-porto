import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Linker from './Link';
import Curve from './curve';

import styles from './navItems.module.scss';

const navItems = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'Work',
        href: '#work',
    },
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
];

export default function NavItems() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname);
                    }}
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => {
                        return (
                            <Linker
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            ></Linker>
                        );
                    })}
                </div>
                <div className={styles.footer}>
                    <a>Deru</a>
                    <a>Delvan</a>
                    <a>Delvan</a>
                    <a>Delvan</a>
                </div>
                <Curve />
            </div>
        </motion.div>
    );
}

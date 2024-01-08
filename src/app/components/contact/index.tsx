import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

import styles from './contact.module.scss';
import Magnetic from '../magnetic';
import Button from '../button';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end'],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [180, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image fill={true} alt={'image'} src={`/me.png`} />
                        </div>
                        <h2>Mari saling bicara</h2>
                    </span>
                    <h2>lalu bekerja sama</h2>
                    <motion.div
                        style={{ x }}
                        className={styles.buttonContainer}
                    >
                        <Button
                            backgroundColor={'#334BD3'}
                            className={styles.button}
                        >
                            <p>Kontak saya</p>
                        </Button>
                    </motion.div>
                    <motion.svg
                        style={{ rotate, scale: 2 }}
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                            fill="white"
                        />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Button>
                        <p>deru.dhan@gmail.com</p>
                    </Button>
                    <Button>
                        <p>+62 895-3851-78849</p>
                    </Button>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>Beta</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>January 1st, 2024</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Facebook</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Github</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

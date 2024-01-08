import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './anim';
import { useRef } from 'react';

import styles from './description.module.scss';
import Button from '../button';

export default function Description() {
    const phrase =
        'Siap membantu menonjolkan brand-mu di era digital sekarang. Bersama kita bersatu membangun status quo baru tanpa ba bi bu.';
    const description = useRef(null);
    const isinView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(' ').map((word, index) => {
                        return (
                            <span key={index} className={styles.mask}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    animate={isinView ? 'open' : 'closed'}
                                    key={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
                <motion.p
                    variants={opacity}
                    animate={isinView ? 'open' : 'closed'}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus laboriosam ullam itaque veritatis vel, aliquid
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Button
                        backgroundColor={'#334BD3'}
                        className={styles.button}
                    >
                        <p>About Me</p>
                    </Button>
                </div>
            </div>
        </div>
    );
}

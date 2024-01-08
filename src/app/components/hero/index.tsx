import Slider from './slider';
import Cube from './cube';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.sliderContainer}>
                    <Slider direction={-1} directionE={-1} x="-300px">
                        <p className={styles.text_front}>
                            Freelance Developer -
                        </p>
                    </Slider>
                </div>
                <div className={styles.sliderContainer}>
                    <Slider direction={-1} directionE={-1} x="-300px">
                        <p className={styles.text_behind}>
                            Freelance Developer -
                        </p>
                    </Slider>
                </div>
                <div className={styles.sliderContainer}>
                    <Slider direction={-1} directionE={-1} x="-300px">
                        <p className={styles.text_behind_blur}>
                            Freelance Developer -
                        </p>
                    </Slider>
                </div>

                <div className={styles.sliderContainer_2}>
                    <Slider direction={1} directionE={1} x="300px">
                        <p className={styles.text_front}>
                            Freelance Developer -
                        </p>
                    </Slider>
                </div>
                <div className={styles.sliderContainer_2}>
                    <Slider direction={1} directionE={1} x="300px">
                        <p className={styles.text_behind}>
                            Freelance Developer -
                        </p>
                    </Slider>
                </div>
                <div className={styles.sliderContainer_2}>
                    <Slider direction={1} directionE={1} x="300px">
                        <p className={styles.text_behind_blur}>
                            Freelance Developer -
                        </p>
                    </Slider>
                </div>

                <Cube />
            </div>
            <span className={styles.subtitle}>
                In Development - Last January 8th, 2024
            </span>
        </>
    );
}

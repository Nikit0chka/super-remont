import styles from "./About.module.css"
import ajaja from "../../../public/Снимок экрана 2025-10-12 022237.png"
import ajaja1 from "../../../public/1.mWomJba4NYMQjPeGGHfnHk2EN4WYhLeLUIE3gZaMPYmQ.webp"
import ajaja2 from "../../../public/Снимок экрана 2025-10-12 022859.png"

function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.photoContainer}>
                <img
                    src={ajaja}
                    alt="Работа 1"
                    className={styles.photoTop}
                />
                <img
                    src={ajaja1}
                    alt="Работа 2"
                    className={styles.photoLeft}
                />
                <img
                    src={ajaja2}
                    alt="Работа 3"
                    className={styles.photoRight}
                />
            </div>
            <div className={styles.aboutTextContainer}>
                <h1 className={styles.aboutTitleText}>Обо мне</h1>
                <p className={styles.aboutText}>
                    Меня зовут Артём, и я занимаюсь ремонтом бытовых холодильников в Москве и области. Работаю по всему югу Москвы. Живу в Видное.
                </p>
                <p className={styles.aboutText}>
                    Я забочусь о своей репутации и стремлюсь предоставлять услуги самого высокого качества.
                    Моя цель — помочь вам решить проблемы с холодильником быстро и эффективно, вернув ему
                    работоспособность и продлив срок службы.
                </p>
                <p className={styles.aboutText}>
                    Я работаю честно и открыто. Всегда подробно рассказываю клиенту о его проблеме и о проделанной
                    работе!
                </p>
            </div>
        </div>
    )
}

export default About;
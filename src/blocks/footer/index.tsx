import styles from "./Footer.module.css"
import refrigeratorIcon from "../../assets/refrigerator-svgrepo-com.svg"

function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <img src={refrigeratorIcon} className={styles.logo} alt="Логотип холодильника" />

                <div className={styles.textContainer}>
                    <p className={styles.text}>Ваш холодильник — моя забота!</p>
                    <p className={styles.text}>Быстро, надёжно, с гарантией!</p>
                </div>

                <div className={styles.contactContainer}>
                    <p className={styles.phoneText}>+7 987 351 77 80</p>
                    <p className={styles.text}>Москва, Видное, Юг Москвы, Московская область</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
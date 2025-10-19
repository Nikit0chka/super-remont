import styles from './Header.module.css';
import refrigeratorIcon from "../../assets/refrigerator-svgrepo-com.svg";
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, MessageSquare } from 'lucide-react';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showContactOptions, setShowContactOptions] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleContactClick = () => {
        closeMobileMenu();
        setShowContactOptions(true);
    };

    const closeContactModal = () => {
        setShowContactOptions(false);
    };

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div className={`${styles.navLinks} ${styles.leftGroup}`}>
                        <a href="#main" className={styles.navLink}>Главная</a>
                        <a href="#services" className={styles.navLink}>Услуги</a>
                        <a href="#about" className={styles.navLink}>Обо мне</a>
                    </div>

                    <div className={`${styles.navLinks} ${styles.centerGroup}`}>
                        <a href="#main" className={styles.navLink}>
                            <img src={refrigeratorIcon} className={styles.logo} alt="Логотип холодильника" />
                        </a>
                    </div>

                    <div className={`${styles.navLinks} ${styles.rightGroup}`}>
                        <a href="#advantages" className={styles.navLink}>Почему Я</a>
                        <a href="#reviews" className={styles.navLink}>Живые отзывы</a>
                        <button
                            className={styles.contactButton}
                            onClick={handleContactClick}
                        >
                            Связаться
                        </button>
                    </div>

                    {/* Кнопка мобильного меню */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={toggleMobileMenu}
                        aria-label="Открыть меню"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </header>

            {/* Мобильное меню */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <a href="#main" className={styles.mobileNavLink} onClick={closeMobileMenu}>Главная</a>
                    <a href="#services" className={styles.mobileNavLink} onClick={closeMobileMenu}>Услуги</a>
                    <a href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>Обо мне</a>
                    <a href="#advantages" className={styles.mobileNavLink} onClick={closeMobileMenu}>Почему Я</a>
                    <a href="#reviews" className={styles.mobileNavLink} onClick={closeMobileMenu}>Живые отзывы</a>

                    {/* Кнопка связи в мобильном меню */}
                    <button
                        className={styles.mobileContactButton}
                        onClick={handleContactClick}
                    >
                        📞 Связаться со мной
                    </button>
                </div>
            </div>

            {/* Модальное окно выбора способа связи */}
            {showContactOptions && (
                <div className={styles.contactModal} onClick={closeContactModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h3 className={styles.modalTitle}>Как связаться?</h3>
                        <p className={styles.modalSubtitle}>Выберите удобный способ</p>

                        <div className={styles.contactOptions}>
                            <a
                                href="tel:+79873517780"
                                className={styles.contactOption}
                                onClick={closeContactModal}
                            >
                                <div className={styles.optionIcon}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.optionText}>
                                    <div className={styles.optionTitle}>Позвонить</div>
                                    <div className={styles.optionDescription}>+7 987 351 77 80</div>
                                </div>
                            </a>

                            <a
                                href="https://t.me/Rakomakofoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactOption}
                                onClick={closeContactModal}
                            >
                                <div className={styles.optionIcon}>
                                    <MessageCircle size={24} />
                                </div>
                                <div className={styles.optionText}>
                                    <div className={styles.optionTitle}>Telegram</div>
                                    <div className={styles.optionDescription}>Быстрый ответ</div>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/79873517780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactOption}
                                onClick={closeContactModal}
                            >
                                <div className={styles.optionIcon}>
                                    <MessageSquare size={24} />
                                </div>
                                <div className={styles.optionText}>
                                    <div className={styles.optionTitle}>WhatsApp</div>
                                    <div className={styles.optionDescription}>Написать сообщение</div>
                                </div>
                            </a>
                        </div>

                        <button
                            onClick={closeContactModal}
                            className={styles.cancelButton}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
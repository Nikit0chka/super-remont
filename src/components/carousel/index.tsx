import React, {useState, useRef, useEffect} from 'react';
import type {CarouselProps} from './types';
import styles from './Carousel.module.css';
import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

const ReviewsCarousel: React.FC<CarouselProps> = ({reviews}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Определяем количество видимых элементов
    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth < 768) {
                setVisibleItems(1);
            } else if (window.innerWidth < 1024) {
                setVisibleItems(2);
            } else {
                setVisibleItems(3);
            }
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const card = carouselRef.current.children[index] as HTMLElement;
            if (card) {
                const scrollLeft = card.offsetLeft - carouselRef.current.offsetLeft;
                carouselRef.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const maxIndex = reviews.length - visibleItems;
        const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        scrollToIndex(nextIndex);
    };

    const prevSlide = () => {
        const maxIndex = reviews.length - visibleItems;
        const prevIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
        scrollToIndex(prevIndex);
    };

    // Автоматическое обновление индекса при скролле
    useEffect(() => {
        const track = carouselRef.current;
        if (!track) return;

        const handleScroll = () => {
            const scrollLeft = track.scrollLeft;
            const cardWidth = track.children[0]?.clientWidth || 0;
            const gap = parseInt(getComputedStyle(track).gap) || 0;
            const itemWidth = cardWidth + gap;
            const newIndex = Math.round(scrollLeft / itemWidth);
            const maxIndex = Math.max(0, reviews.length - visibleItems);
            setCurrentIndex(Math.min(newIndex, maxIndex));
        };

        track.addEventListener('scroll', handleScroll);
        return () => track.removeEventListener('scroll', handleScroll);
    }, [reviews.length, visibleItems]);

    const maxIndex = Math.max(0, reviews.length - visibleItems);

    return (
        <section className={styles.carouselContainer}>
            <div className={styles.carousel}>
                <button
                    className={styles.navButton}
                    onClick={prevSlide}
                    aria-label="Предыдущий отзыв"
                >
                    <ArrowLeft/>
                </button>

                <div
                    ref={carouselRef}
                    className={styles.carouselTrack}
                    aria-live="polite"
                >
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className={`${styles.reviewCard} ${index >= currentIndex && index < currentIndex + visibleItems ? styles.active : ''}`}
                        >
                            <img
                                src={review.imageUrl}
                                alt={review.alt}
                                className={styles.reviewImage}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <button
                    className={styles.navButton}
                    onClick={nextSlide}
                    aria-label="Следующий отзыв"
                >
                    <ArrowRight/>
                </button>
            </div>

            <div className={styles.dotsContainer}>
                {reviews.slice(0, maxIndex + 1).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Перейти к отзыву ${index + 1}`}
                        aria-current={index === currentIndex}
                    />
                ))}
            </div>
        </section>
    );
};

export default ReviewsCarousel;
import styles from "./Reviews.module.css";
import Carousel from "../../components/carousel";
import type {ReviewPhoto} from "../../components/carousel/types.ts";


function Reviews() {
    const reviewPhotos: ReviewPhoto[] = [
        {
            id: '1',
            imageUrl: '2f3b159fd4d6da6ee5aca9f9388dbd4f.png',
            alt: 'Отзыв клиента 1'
        },
        {
            id: '2',
            imageUrl: '37775aace051d201a8075dbc293b6baf.png',
            alt: 'Отзыв клиента 2'
        },
        {
            id: '3',
            imageUrl: 'b981e6b14eacc37d5e4709e0d14732ef.png',
            alt: 'Отзыв клиента 3'
        },
        {
            id: '4',
            imageUrl: 'bfbfbf3754fc0f7cd24be9328c7910dc.png',
            alt: 'Отзыв клиента 4'
        },
        {
            id: '5',
            imageUrl: 'photo_2025-10-16_04-13-42.jpg',
            alt: 'Отзыв клиента 5'
        },
        {
            id: '6',
            imageUrl: 'photo_2025-10-16_04-13-49.jpg',
            alt: 'Отзыв клиента 6'
        },
        {
            id: '7',
            imageUrl: 'photo_2025-10-16_04-13-51.jpg',
            alt: 'Отзыв клиента 7'
        }
    ];

    return (
        <div className={styles.reviewsSection}>
            <h1 className={styles.title}>Живые отзывы моих клиентов</h1>
            <h2 className={styles.subtitle}>Реальные переписки с моими клиентами</h2>

            <div>
                <Carousel reviews={reviewPhotos}/>
            </div>
        </div>
    );
}

export default Reviews;
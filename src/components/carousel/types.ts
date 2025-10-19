export interface ReviewPhoto {
    id: string;
    imageUrl: string;
    alt: string;
}

export interface CarouselProps {
    reviews: ReviewPhoto[];
}
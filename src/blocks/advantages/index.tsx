import FeatureCard from "../../components/feature-card";
import styles from "./Advantages.module.css";
import {
    Smile,
    Wallet,
    Award,
    Refrigerator,
    ShieldCheck,
    TrendingUp,
    X
} from "lucide-react";
import Button from "../../components/button";
import {useState} from "react";
import CallbackForm from "../../components/callback-form";
import type {SubmitData} from "../../components/callback-form/props.ts";
import toast, {Toaster} from 'react-hot-toast';

function Advantages() {
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const advantages = [
        {
            icon: <Smile className={styles.advantageIcon}/>,
            title: "Работа доставляет удовольствие",
            description: "Я люблю свою работу и получаю огромное удовольствие от процесса и от результата."
        },
        {
            icon: <Wallet className={styles.advantageIcon}/>,
            title: "Не завышаю цены",
            description: "Я не работаю по принципу «дорогой холодильник - дорогой ремонт». Цена складывается только из сложности ремонта, объёма работ и стоимости деталей."
        },
        {
            icon: <Award className={styles.advantageIcon}/>,
            title: "Большой опыт",
            description: "У меня большой список дорогого оборудования и инструментов, который я постоянно пополняю. Мне нравится работать профессионально, а не приезжать на ремонт с одной отвёрткой."
        },
        {
            icon: <Refrigerator className={styles.advantageIcon}/>,
            title: "Любые марки холодильников",
            description: "Ремонтирую любые бытовые (те, что стоят у Вас дома) холодильники и морозилки. Любых марок и моделей."
        },
        {
            icon: <ShieldCheck className={styles.advantageIcon}/>,
            title: "Гарантия",
            description: "Даю гарантию на свои работы, выписываю акт, где указываю свои данные."
        },
        {
            icon: <TrendingUp className={styles.advantageIcon}/>,
            title: "Более 5000 ремонтов",
            description: "Только за этот год я отремонтировал около 700 холодильников. Клиенты часто говорят - сам бог Вас послал нам."
        }
    ];

    const handleSubmit = async (data: SubmitData) => {
        setIsLoading(true);

        try {
            const response = await fetch('/api/request', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Ошибка сервера');

            toast.success('Заявка успешно отправлена! Мы скоро вам перезвоним.');
            setShowForm(false);

        } catch (er) {
            toast.error('Произошла ошибка при отправке формы. Попробуйте еще раз.');
            throw er;
        } finally {
            setIsLoading(false);
        }
    };

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 4000,
                        iconTheme: {
                            primary: '#4ade80',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        duration: 5000,
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                    },
                }}
            />

            <section className={styles.advantagesSection}>
                <h1 className={styles.title}>Почему именно я?</h1>

                <div className={styles.advantagesContainer}>
                    {advantages.map((advantage, index) => (
                        <FeatureCard
                            key={index}
                            icon={advantage.icon}
                            title={advantage.title}
                            description={advantage.description}
                        />
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <Button
                        onClick={handleButtonClick}
                        text={"НАПИСАТЬ"}
                        fontSize={"1.5rem"}
                    />
                </div>
            </section>

            {showForm && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button
                            className={styles.closeButton}
                            onClick={handleCloseForm}
                            aria-label="Закрыть форму"
                        >
                            <X/>
                        </button>
                        <CallbackForm
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Advantages;
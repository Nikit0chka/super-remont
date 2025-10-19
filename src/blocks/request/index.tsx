import {useState} from "react";
import type {SubmitData} from "../../components/callback-form/props.ts";
import CallbackForm from "../../components/callback-form";
import styles from "./Request.module.css"
import toast, { Toaster } from 'react-hot-toast';

function Request() {
    const [isLoading, setIsLoading] = useState(false);

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

        } catch (er) {
            toast.error('Произошла ошибка при отправке формы. Попробуйте еще раз.');
            throw er;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.requestContainer}>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        minWidth: '300px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        padding: '16px',
                        color: '#1f2937',
                        fontSize: '14px',
                        fontWeight: '500',
                    },
                    success: {
                        duration: 4000,
                        style: {
                            background: 'rgba(34, 197, 94, 0.95)',
                            color: 'white',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: '#22c55e',
                        },
                    },
                    error: {
                        duration: 5000,
                        style: {
                            background: 'rgba(200, 68, 68, 0.6)',
                            color: 'white',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: '#ef4444',
                        },
                    },
                }}
            />

            <div className={styles.textContainer}>
                <h1 className={styles.title}>Профессиональный ремонт холодильников</h1>
                <p className={styles.comment}>Когда работа доставляет удовольствие</p>
            </div>
            <div className={styles.formContainer}>
                <CallbackForm
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}

export default Request;
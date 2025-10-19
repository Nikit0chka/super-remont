import styles from "./CallBackForm.module.css"
import Button from "../button";
import type {Props} from "./props.ts";
import React, {useState} from "react";
import {IMaskInput} from 'react-imask';

function CallbackForm(props: Props) {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

    const validateForm = (): boolean => {
        const newErrors: { name?: string; phone?: string } = {};

        if (!name.trim()) {
            newErrors.name = "Имя обязательно для заполнения";
        }

        if (!phone.trim()) {
            newErrors.phone = "Телефон обязателен для заполнения";
        } else if (phone.replace(/\D/g, '').length < 11) {
            newErrors.phone = "Введите корректный номер телефона";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm() && !props.isLoading) {
            props.onSubmit?.({name, phone});
        }
    };

    const clearError = (field: keyof typeof errors) => {
        setErrors(prev => ({...prev, [field]: undefined}));
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.title}>Оставить заявку</label>

                <div className={styles.inputContainer}>
                    <label htmlFor="name" className={styles.inputLabel}>Имя</label>
                    <input
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        id="name"
                        type="text"
                        placeholder="Введите имя"
                        required
                        value={name}
                        disabled={props.isLoading}
                        onInput={(ev: React.FormEvent<HTMLInputElement>) => {
                            setName(ev.currentTarget.value);
                            clearError('name');
                        }}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="phone" className={styles.inputLabel}>Телефон</label>
                    <IMaskInput
                        mask="+7 (000) 000-00-00"
                        definitions={{
                            '0': /[0-9]/
                        }}
                        value={phone}
                        onAccept={(value: string) => {
                            setPhone(value);
                            clearError('phone');
                        }}
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 999-99-99"
                        required
                        disabled={props.isLoading}
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.buttonWithTextContainer}>
                    <div className={styles.buttonContainer}>
                        <Button
                            type="submit"
                            text="ОСТАВИТЬ"
                            fontSize="0.75rem"
                            disabled={props.isLoading}
                            loading={props.isLoading}
                        />
                    </div>
                    <small className={styles.agreementText}>
                        Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.
                    </small>
                </div>
            </form>
        </div>
    )
}

export default CallbackForm;
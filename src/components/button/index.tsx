import styles from "./Button.module.css"
import type {Props} from "./props.ts";

function Button(props: Props) {
    const {
        text,
        onClick,
        fontSize = "1rem",
        padding = "0.75rem 2rem",
        variant = "primary",
        disabled = false,
        fullWidth = false,
        type = "button",
        loading = false
    } = props;

    const buttonClass = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${disabled ? styles.disabled : ''}`;

    return (
        <button
            type={type}
            style={{
                fontSize: fontSize,
                padding: padding
            }}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
           <span className={loading ? styles.hiddenText : ''}>
                {text}
            </span>
            {loading && (
                <div className={styles.spinnerOverlay}>
                    <div className={styles.spinner}></div>
                </div>
            )}
        </button>
    );
}

export default Button;
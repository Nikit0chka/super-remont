import type { Props } from "./props";
import styles from "./FeatureCard.module.css";

function FeatureCard(props: Props) {
    return (
        <div className={styles.featureContainer}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <h3 className={styles.titleText}>{props.title}</h3>
            <p className={styles.descriptionText}>{props.description}</p>
        </div>
    );
}

export default FeatureCard;
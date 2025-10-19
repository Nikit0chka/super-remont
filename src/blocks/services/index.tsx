import FeatureCard from "../../components/feature-card";
import styles from "./Services.module.css"
import {
    Wrench,
    Cog,
    Cpu,
    RefreshCw,
    Thermometer,
    Snowflake,
    Droplets,
    ShieldCheck
} from "lucide-react";

function Services() {
    const services = [
        {
            icon: <Wrench className={styles.serviceIcon}/>,
            title: "Устранение утечки фреона",
            description: "Опрессовка системы, поиск утечки фреона. Промывка и сушка системы."
        },
        {
            icon: <Cog className={styles.serviceIcon}/>,
            title: "Замена мотора-компрессора",
            description: "Проверенные производства. С собой всегда в наличии 15 моделей компрессоров."
        },
        {
            icon: <Cpu className={styles.serviceIcon}/>,
            title: "Ремонт электроники",
            description: "Ремонт силовых и инверторных модулей. Ремонт любой электроники на холодильнике."
        },
        {
            icon: <RefreshCw className={styles.serviceIcon}/>,
            title: "Переделка с инвертора",
            description: "Переделка любых марок и моделей на месте. Установка качественных и надёжных обманок."
        }, {
            icon: <Thermometer className={styles.serviceIcon}/>,
            title: "Замена термостатов и датчиков",
            description: "Качественные запчасти. Всегда с собой в наличии запчасти на любые марки и модели холодильников."
        },
        {
            icon: <Snowflake className={styles.serviceIcon}/>,
            title: "Ремонт группы оттайки систем NoFrost",
            description: "Термоплавкие предохранители, дефростеры, таймеры оттайки, электротэны."
        },
        {
            icon: <Droplets className={styles.serviceIcon}/>,
            title: "Прочистка капиллярной трубки",
            description: "Устранение засора капиллярной трубки, промывка системы, удаление влаги из системы."
        },
        {
            icon: <ShieldCheck className={styles.serviceIcon}/>,
            title: "Профилактические работы",
            description: "Удаление пыли, чистка дренажных систем, вентиляторов, ремонт шлейфа, быстрая разморозка."
        },
    ];

    return (
        <div className={styles.servicesSection}>
            <div className={styles.header}>
                <h1 className={styles.titleText}>Качественный ремонт холодильников</h1>
                <h2 className={styles.subTitleText}>Ремонт любой сложности на месте за один выезд</h2>
            </div>

            <div className={styles.servicesContainer}>
                {services.map((service, index) => (
                    <FeatureCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Services;
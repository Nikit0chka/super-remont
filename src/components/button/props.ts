export interface Props {
    text: string;
    onClick?: () => void;
    fontSize?: string;
    padding?: string;
    variant?: "primary" | "secondary" | "success" | "danger";
    disabled?: boolean;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
}
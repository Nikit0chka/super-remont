export interface Props {
    onSubmit?: (data: SubmitData) => void;
    isLoading?: boolean;
    disabled?: boolean;
}

export interface SubmitData {
    name: string;
    phone: string;
}
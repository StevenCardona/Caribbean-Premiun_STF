import './custom-button.css';

interface CustomButtonProps {
    title: string;
    classNames?: string;
}

export const CustomButton = ({ title, classNames }: CustomButtonProps) => {
    return <button className={`button btn ${classNames}`}>{title}</button>;
};

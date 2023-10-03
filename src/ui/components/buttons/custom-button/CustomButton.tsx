import './custom-button.css';

interface CustomButtonProps {
    title: string;
}

export const CustomButton = ({ title }: CustomButtonProps) => {
    return <button className='button btn'>{title}</button>;
};

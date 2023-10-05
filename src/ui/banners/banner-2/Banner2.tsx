import { IMG_ROUTES } from '../../../main/constants';
import './styles/styles.css';

export const Banner2 = () => {
    return (
        <div className='banner2'>
            <img
                loading='lazy'
                className='logo_premium'
                src={IMG_ROUTES.logoBanner}
                alt='logo premium collection Studio F'
            />
        </div>
    );
};

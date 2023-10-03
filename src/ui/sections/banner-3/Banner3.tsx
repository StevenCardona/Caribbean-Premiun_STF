import { IMG_ROUTES } from '../../../main/constants';
import { Slider } from '../../components/slider';
import './styles.css';

const SLIDES_LIST_MB = [
    IMG_ROUTES.collection2_MB.img1,
    IMG_ROUTES.collection2_MB.img2,
];

export const Banner3 = () => {
    return (
        <div className='banner3 d-flex justify-content-center align-items-center mb-5'>
            <div className='banner3__wraper'>
                <Slider
                    slidesList={SLIDES_LIST_MB}
                    classNames='d-lg-none'
                    name={'banner3'}
                />
            </div>
        </div>
    );
};

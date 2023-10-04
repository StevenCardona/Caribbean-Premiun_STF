import { BANNER_SLIDES } from '../../../main/slides';
import { Slider } from '../../components/slider';
import './styles/styles.css';

export const Banner3 = () => {
    return (
        <div className='banner3 pb-4 pb-lg-0 d-flex justify-content-center align-items-center '>
            <div className='banner3__wraper '>
                <Slider
                    slidesList={BANNER_SLIDES}
                    classNames='d-lg-none '
                    name={'banner3'}
                />
            </div>
        </div>
    );
};

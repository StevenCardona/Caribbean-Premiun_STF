import { isDesktop, isMobile } from 'react-device-detect';
import { IMG_ROUTES } from '../../../main/constants';
import { Slider } from '../../components/slider';

const SLIDES_LIST = [
    IMG_ROUTES.collection.img1,
    IMG_ROUTES.collection.img2,
    IMG_ROUTES.collection.img3,
    IMG_ROUTES.collection.img4,
];

const SLIDES_LIST_MB = [
    IMG_ROUTES.collection_MB.img1,
    IMG_ROUTES.collection_MB.img2,
    IMG_ROUTES.collection_MB.img3,
    IMG_ROUTES.collection_MB.img4,
];

export const Collection = () => {
    return (
        <div className='w-100 h-50'>
            <div className='my-4'>
                <Slider
                    slidesList={isDesktop ? SLIDES_LIST : SLIDES_LIST_MB}
                    classNames='d-lg-none'
                />
            </div>
        </div>
    );
};

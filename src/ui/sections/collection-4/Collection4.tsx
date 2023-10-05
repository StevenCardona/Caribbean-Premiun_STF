import { isDesktop } from 'react-device-detect';
import { IMG_ROUTES } from '../../../main/constants';
import { COPYS_ES } from '../../../main/resources';
import { CustomButton } from '../../components/buttons/custom-button';

import './styles/styles.css';

export function Collection4() {
    return (
        <div className='collection4 mt-lg-4 mt-2 d-lg-flex justify-content-lg-around align-items-lg-center'>
            <div className='d-lg-flex flex-column justify-content-lg-center align-items-lg-center p-lg-4'>
                <img
                    className='collection4__main '
                    src={
                        isDesktop
                            ? IMG_ROUTES.collection4.img2
                            : IMG_ROUTES.collection4_MB.img2
                    }
                    alt={`imagen de una mujer con la nueva colección sosteniendo un bolso`}
                />
                <div className='p-5 p-lg-0 mt-lg-5 d-flex justify-content-center align-items-center flex-column'>
                    <h2 className='collection4__title text-center'>
                        <b>{COPYS_ES.collection4_section.title}</b>{' '}
                        {COPYS_ES.collection4_section.subtitle}
                    </h2>

                    <hr className='info__line my-3 d-none d-lg-block' />

                    <p className='collection4__text text-center py-0'>
                        {COPYS_ES.collection4_section.text}
                    </p>

                    <CustomButton
                        title={COPYS_ES.buy_now}
                        classNames='lg text-center black d-lg-block d-none'
                    />
                </div>
            </div>

            <div className='pb-5'>
                <img
                    className='collection4__img img-fluid'
                    src={
                        isDesktop
                            ? IMG_ROUTES.collection4.img1
                            : IMG_ROUTES.collection4_MB.img1
                    }
                    alt={`imagen de una mujer con la nueva colección reposando entre arboles`}
                />
            </div>
        </div>
    );
}

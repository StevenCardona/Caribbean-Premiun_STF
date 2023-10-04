import { isDesktop } from 'react-device-detect';
import { IMG_ROUTES } from '../../../main/constants';
import { COPYS_ES } from '../../../main/resources';
import { CustomButton } from '../../components/buttons/custom-button';

import './styles/styles.css';

export function Collection3() {
    return (
        <div className='collection3 d-lg-flex gap-4 mt-5 pt-5 p-lg-0'>
            <div className='collection3__banner d-flex justify-content-center align-items-center flex-column'>
                <h2 className='collection3__title'>
                    {COPYS_ES.collection_section.title}
                </h2>
                <h3 className='collection3__subtitle'>
                    {COPYS_ES.collection_section.subtitle}
                </h3>
                <p className='collection3__text text-center p-5 py-0'>
                    {COPYS_ES.collection_section.text}
                </p>

                <CustomButton title={COPYS_ES.buy_now} classNames='lg text-center' />
            </div>

            <div className='py-4 p-lg-0'>
                <img
                    className='collection3__img '
                    src={
                        isDesktop
                            ? IMG_ROUTES.collection3.img1
                            : IMG_ROUTES.collection3_MB.img1
                    }
                    alt={`imagen de una mujer con la nueva colección sosteniendo un bolso`}
                />
            </div>
        </div>
    );
}

import { IMG_ROUTES } from '../../../main/constants';
import { COPYS_ES } from '../../../main/resources';
import { CustomButton } from '../buttons/custom-button';
import './banner.css';

export const Banner = () => {
    return (
        <>
            <div className='banner'>
                <img
                    className='logo_premium'
                    src={IMG_ROUTES.logoBanner}
                    alt='logo premium collection Studio F'
                />

                <div className='w-100 h-100 d-flex flex-column justify-content-end align-items-center justify-content-md-center align-items-md-start banner__wrapper'>
                    <img
                        className='banner__title'
                        src={IMG_ROUTES.titleBanner}
                        alt='titulo del banner'
                    />

                    <div className='banner__info'>
                        <div className='d-flex flex-column align-items-center info_wrapper'>
                            <hr className='info__line' />
                            <p className='info__text text-center'>
                                {COPYS_ES.text_presentation}
                            </p>

                            <CustomButton title={COPYS_ES.show_collection} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='additional_text d-md-none p-4 py-3 text-center'>
                <hr className='info__line my-3' />
                <p className='info__text text-center'>
                    {COPYS_ES.text_presentation}
                </p>
            </div>
        </>
    );
};

import { IMG_ROUTES } from '../../../main/constants';
import { COPYS_ES } from '../../../main/resources';
import { CustomButton } from '../../components/buttons/custom-button';
import './styles/banner.css';

export const Banner = () => {
    return (
        <>
            <div className='banner'>
                <img
                    loading='lazy'
                    className='logo_premium'
                    src={IMG_ROUTES.logoBanner}
                    alt='logo premium collection Studio F'
                />

                <div className='w-100 h-100 d-flex flex-column justify-content-end align-items-center justify-content-lg-center align-items-lg-start banner__wrapper'>
                    <img
                        loading='lazy'
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

                            <CustomButton
                                title={COPYS_ES.show_collection}
                                classNames='lg'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='additional_text d-lg-none p-4 py-3 text-center'>
                <hr className='info__line my-3' />
                <p className='info__text text-center p-5 py-0'>
                    {COPYS_ES.text_presentation}
                </p>
            </div>
        </>
    );
};

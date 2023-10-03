import { isDesktop } from 'react-device-detect';
import { IMG_ROUTES } from '../../../main/constants';
import { COPYS_ES } from '../../../main/resources';
import { CustomButton } from '../../components/buttons/custom-button';
import './styles.css';

export const PrintEtnicoSection = () => {
    return (
        <div className='section d-lg-flex gap-5 justify-content-center'>
            <div className='d-flex flex-column-reverse flex-column-reverse section__imgs flex-lg-row align-items-lg-center'>
                <div className='section__thumbnail d-flex justify-content-center align-items-center mt-4 mt-lg-0'>
                    <img
                        src={
                            isDesktop
                                ? IMG_ROUTES.section1Second
                                : IMG_ROUTES.section1Second_MB
                        }
                        alt='mujer vestida con un vestido etnico y sostiene un bolso con su mano'
                        className='section__above'
                    />
                </div>

                <img
                    className='section__img'
                    src={
                        isDesktop
                            ? IMG_ROUTES.section1Main
                            : IMG_ROUTES.section1Main_MB
                    }
                    alt='mujer vestida con un vestido etnico y sostiene un bolso con su mano'
                />
            </div>

            <div className='section__box p-lg-4 text-center text-lg-start d-lg-flex flex-lg-column algin-items-center justify-content-center my-5 mt-lg-0'>
                <h2 className='section__title '>
                    {COPYS_ES.print_etnico_section.title}
                </h2>

                <h4 className='section__subtitle'>
                    {COPYS_ES.print_etnico_section.subtitle}
                </h4>

                <CustomButton
                    classNames='d-none d-lg-block black mt-lg-4 xl'
                    title={COPYS_ES.show_complements}
                />
            </div>
        </div>
    );
};

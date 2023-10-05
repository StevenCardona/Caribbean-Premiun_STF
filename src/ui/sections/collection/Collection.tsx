import { isDesktop } from 'react-device-detect';
import { IMG_ROUTES } from '../../../main/constants';
import { COPYS_ES } from '../../../main/resources';
import { COLLECTION1_SLIDES } from '../../../main/slides';
import { CustomButton } from '../../components/buttons/custom-button';
import { Slider } from '../../components/slider';

import './styles/styles.css';

export const Collection = () => {
    return (
        <div className='my-4 collection'>
            <Slider
                slidesList={
                    isDesktop
                        ? COLLECTION1_SLIDES.desktopk
                        : COLLECTION1_SLIDES.mobile
                }
                classNames='d-lg-none'
                name='collection'
            />

            <div className='d-lg-flex p-5 py-2 m-5 gap-5 justify-content-center d-none collection__wrapper'>
                <div>
                    <img
                        className='collection__imgMain'
                        src={IMG_ROUTES.collectionMain}
                        alt={`Slide 1`}
                    />
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <div className='row  g-4 p-4 py-0'>
                        <div className='col-6 position-relative'>
                            <img
                                className='d-block w-100 collection__item'
                                src={
                                    isDesktop
                                        ? IMG_ROUTES.collection.img1
                                        : IMG_ROUTES.collection_MB.img1
                                }
                                alt={`Slide 1`}
                            />
                            <div className='text-center collection__button'>
                                <CustomButton
                                    title={COPYS_ES.buy_now}
                                    classNames='lg text-center'
                                />
                            </div>
                        </div>

                        <div className='col-6 position-relative'>
                            <img
                                className='d-block w-100  collection__item'
                                src={
                                    isDesktop
                                        ? IMG_ROUTES.collection.img2
                                        : IMG_ROUTES.collection_MB.img2
                                }
                                alt={`Slide 1`}
                            />
                            <div className='text-center collection__button'>
                                <CustomButton
                                    title={COPYS_ES.buy_now}
                                    classNames='lg text-center'
                                />
                            </div>
                        </div>

                        <div className='col-6 position-relative'>
                            <img
                                className='d-block w-100  collection__item'
                                src={
                                    isDesktop
                                        ? IMG_ROUTES.collection.img3
                                        : IMG_ROUTES.collection_MB.img3
                                }
                                alt={`Slide 1`}
                            />

                            <div className='text-center collection__button'>
                                <CustomButton
                                    title={COPYS_ES.buy_now}
                                    classNames='lg text-center'
                                />
                            </div>
                        </div>

                        <div className='col-6 position-relative'>
                            <img
                                className='d-block w-100 collection__item'
                                src={
                                    isDesktop
                                        ? IMG_ROUTES.collection.img4
                                        : IMG_ROUTES.collection_MB.img4
                                }
                                alt={`Slide 1`}
                            />
                            <div
                                className='text-center collection__button'
                                style={{
                                    marginTop: -80,
                                }}
                            >
                                <CustomButton
                                    title={COPYS_ES.buy_now}
                                    classNames='lg text-center'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

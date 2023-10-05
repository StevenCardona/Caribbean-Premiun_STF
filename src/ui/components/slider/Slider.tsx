import { SliderProps } from '../../../domain/shared/types';

export const Slider = ({ slidesList, classNames, name }: SliderProps) => {
    return (
        <div id={name} className={`carousel slide ${classNames}`}>
            <div className='carousel-indicators'>
                {slidesList.map((slide, index) => (
                    <button
                        key={name + '-' + index}
                        type='button'
                        data-bs-target={'#' + name}
                        data-bs-slide-to={index}
                        className='active rounded-circle'
                        aria-current='true'
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className='carousel-inner'>
                {slidesList.map((slide, index) => (
                    <div className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                        <img
                            loading='lazy'
                            key={name + '-' + index + '-' + slide}
                            className='d-block w-100'
                            src={slide}
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </div>
            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target={'#' + name}
                data-bs-slide='prev'
            >
                <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button
                className='carousel-control-next'
                type='button'
                data-bs-target={'#' + name}
                data-bs-slide='next'
            >
                <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    );
};

interface SliderProps {
    slidesList: string[];
    classNames?: string;
}

export const Slider = ({ slidesList, classNames }: SliderProps) => {
    return (
        <div id='carouselExampleCaptions' className={`carousel slide ${classNames}`}>
            <div className='carousel-indicators'>
                {slidesList.map((slide, index) => (
                    <button
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
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
                            className='d-block w-100'
                            src={slide}
                            alt={`Slide ${index}`}
                            style={{
                                width: '375px',
                                height: '509px',
                            }}
                        />
                    </div>
                ))}
            </div>
            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleCaptions'
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
                data-bs-target='#carouselExampleCaptions'
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

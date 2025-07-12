import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Link } from 'react-router';

const Slider = () => {
    return (
        <div className="h-screen">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }} autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {/* slider-1  */}
                <SwiperSlide>
                    <div
                        className="hero min-h-screen  "
                        style={{
                            backgroundImage: "url(https://play-lh.googleusercontent.com/LBrHDrWS5sDq8d_kpPGN2TkdNcYrii7g2ZD-d-QGXAkvZJ-RLYn6LRAQSxQt862QGC8=w526-h296-rw)",


                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="space-y-5">
                                <h1 className="mt-20 text-5xl font-bold text-gray-400">
                                    Zoombie is Here!"
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider-2  */}
                <SwiperSlide>
                    <div
                        className="hero min-h-screen "
                        style={{
                            backgroundImage:
                                "url(https://store-images.s-microsoft.com/image/apps.22462.13995560004064087.0c20fe7f-e1d1-4343-8877-adfeefd6c947.fc5a85aa-a8b0-414d-9a51-088ca1c71b2a)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="space-y-5">
                                <h1 className="mt-30 text-5xl font-bold text-stone-500-400">
                                    Lets code your career!
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider-3  */}
                <SwiperSlide>
                    <div
                        className="hero min-h-screen "
                        style={{
                            backgroundImage:
                                "url(https://i.ytimg.com/vi/97lFrVuHOJc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALzSnAPk9EysWifgeX0NIGwXe2xw)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="space-y-5">
                                <h1 className="mt-30 text-5xl font-bold text-fuchsia-100">
                                    Boost Your Power!
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
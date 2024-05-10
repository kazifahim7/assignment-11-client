
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from '../page/Banner';

const image1 ='https://i.ibb.co/PFxk0fp/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg'




const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>

                <Banner image1={image1}></Banner>
            </SwiperSlide>
            <SwiperSlide>
                <Banner image1={'https://i.ibb.co/hyZmRVN/male-electrician-works-switchboard-with-electrical-connecting-cable-1.jpg'}></Banner>
            </SwiperSlide>
            <SwiperSlide>
                <Banner image1={'https://i.ibb.co/3rRBFSB/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with.jpg'}></Banner>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
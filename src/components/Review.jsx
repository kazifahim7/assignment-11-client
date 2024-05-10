

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import ReviewCard from './ReviewCard';



const Review = () => {
    return (
        <div className="my-5 container mx-auto">
            <h1 className="uppercase text-center text-xl text-[#e26d2f]">client feedback</h1>
            <h1 className="uppercase text-center text-4xl font-extrabold pt-3 ">Client <span className="text-[#e26d2f]">Feedback</span></h1>
            <p className="text-center pt-5">There are many variations of passages of Lorem electronics repair, but <br /> the majority have suffered alteration in azer duskam.</p>

            <div className="py-8 ">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <ReviewCard image={'https://htmldemo.net/elecron/elecron/assets/images/testimonial/testimonial-author-1.png'} profession={'Web developer'}></ReviewCard>

                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard image={'https://htmldemo.net/elecron/elecron/assets/images/testimonial/testimonial-author-2.png'} profession={'Designer'}></ReviewCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard image={'https://htmldemo.net/elecron/elecron/assets/images/testimonial/testimonial-author-1.png'} profession={'AI expart'}></ReviewCard>

                    </SwiperSlide>
                 
                </Swiper>
               

               

            </div>
            
        </div>
    );
};

export default Review;

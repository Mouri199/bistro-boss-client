import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import Section from '../Section/Section';

const FoodType = () => {
    return (
        <div>
            <div>
                <Section
                heading={"From 11:00am to 10:00pm"} 
                subHeading={"ORDER ONLINE"}>
                    
                </Section>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={1}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className='lg:text-3xl text-xl text-center -mt-12'>SALAD</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='lg:text-3xl text-xl text-center text-white -mt-12'>PIZZA</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='lg:text-3xl text-xl text-center -mt-12'>SOUP</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='lg:text-3xl text-xl text-center -mt-12'>CAKE</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className='lg:text-3xl text-xl text-center -mt-16'>SALAD</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodType;
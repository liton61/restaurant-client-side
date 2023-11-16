import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import Title from '../Title/Title';

const OnlineOrder = () => {
    return (
        <div>
            <Title
                title={'ORDER ONLINE'}
                subTitle={'From 11:00am to 10:00pm'}
            ></Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper lg:w-3/4 mb-16"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-2xl font-semibold uppercase text-center -m-16'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" /><h3 className='text-2xl font-semibold uppercase text-center -m-16'>Pasta</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" /><h3 className='text-2xl font-semibold uppercase text-center -m-16'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" /><h3 className='text-2xl font-semibold uppercase text-center -m-16'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OnlineOrder;
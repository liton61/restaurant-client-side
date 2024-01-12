import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';

const Slider2 = () => {
    return (
        <div className='lg:w-3/4 mx-auto mb-16 lg:px-0 px-5'>
            <div className='w-64 mx-auto my-10'>
                <p className='text-yellow-500 text-center mb-2'>---From 11:00am to 10:00pm---</p>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>ORDER ONLINE</h3>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded' src={slide1} alt="" />
                    <h3 className='text-2xl font-semibold uppercase text-center -m-16'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={slide2} alt="" /><h3 className='text-2xl font-semibold uppercase text-center -m-16 text-white'>Pasta</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={slide3} alt="" /><h3 className='text-2xl font-semibold uppercase text-center -m-16'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={slide4} alt="" /><h3 className='text-2xl font-semibold uppercase text-center -m-16'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={slide5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider2;
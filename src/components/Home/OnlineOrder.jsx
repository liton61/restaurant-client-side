import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';

const OnlineOrder = () => {
  return (
    <div>
      <div className='w-72 mx-auto mb-10 mt-16'>
        <h3 className='text-yellow-500 italic mb-5 text-center'> ---From 11:00am to 10:00pm--- </h3>
        <h1 className='text-3xl font-semibold border-y-4 py-4 text-center'>ORDER ONLINE</h1>
      </div>
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
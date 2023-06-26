import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Amnistia from '../../assets/amnistia.png';
import Abuelas from '../../assets/abuelas.png';
import Equipo from '../../assets/equipo.png';
import Derechos from '../../assets/derechos.png';
import Centro from '../../assets/centro.png';
import Sos from '../../assets/sos.png';
import Asamblea from '../../assets/asamblea.png';

function Colaboration() {
  return (
    <div className="max-w-7xl mx-auto mb-20 px-4">
      <h2 className="mb-5 font-semibold">Con la colaboración de:</h2>
      <div className="">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <img src={Amnistia} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Abuelas} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Equipo} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Derechos} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Centro} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Sos} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Asamblea} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Amnistia} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Abuelas} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Equipo} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Derechos} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Centro} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Sos} alt="logo1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Asamblea} alt="logo1" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Colaboration;

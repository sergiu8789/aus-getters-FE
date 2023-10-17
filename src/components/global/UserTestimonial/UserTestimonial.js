import React from 'react';
import styles from './UserTestimonial.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import TestImage1 from '../../../../public/assets/images/testimonial-1.png';
import TestImage2 from '../../../../public/assets/images/testimonial-2.png';

function UserTestimonial() {
  return (
    <React.Fragment>
      <div className="col-12 d-inline-block bg-white">
        <div className="container">
          <h2
            className={`${styles.testimonialTitle} col-12 d-inline-block text-center`}
          >
            What People say
          </h2>
          <p
            className={`${styles.testiDesc} col-12 d-inline-block text-center`}
          >
            Suspendisse ac neque porta, maximus ipsum eu,
          </p>
          <div className="col-12 d-inline-block">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div
                  className={`${styles.userReviewBox} col-12 d-inline-block`}
                >
                  <div className="col-12 d-inline-flex align-items-center">
                    <div
                      className={`${styles.reviewImage} d-inline-flex align-items-center`}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.userReviewBox} col-12 d-inline-block`}
                ></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserTestimonial;

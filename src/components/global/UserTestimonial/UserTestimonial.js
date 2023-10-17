import React, { useRef } from 'react';
import styles from './UserTestimonial.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import TestImage1 from '../../../../public/assets/images/testimonial-1.png';
import TestImage2 from '../../../../public/assets/images/testimonial-2.png';
import reviewStar from '../../../../public/assets/images/reviewStar.svg';
import swiperNext from '../../../../public/assets/images/icons/swiperNext.svg';
import swiperPrev from '../../../../public/assets/images/icons/swiperPrev.svg';

function UserTestimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <React.Fragment>
      <div className="col-12 d-inline-block bg-white pb-5">
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
              loop={true}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
              }}
              pagination={{
                clickable: true
              }}
            >
              <div
                className={`${styles.swiperArrow} position-absolute d-inline-flex gap-2 align-items-center top-0 end-0`}
              >
                <div
                  ref={navigationPrevRef}
                  className={`${styles.swiperArrowPrev} d-inline-flex align-items-center justify-content-center`}
                >
                  <Image src={swiperPrev} alt="swiperPrev" />
                </div>
                <div
                  ref={navigationNextRef}
                  className={`${styles.swiperArrowNext} d-inline-flex align-items-center justify-content-center`}
                >
                  <Image src={swiperNext} alt="swiperNext" />
                </div>
              </div>
              <SwiperSlide>
                <div
                  className={`${styles.userReviewBox} col-12 d-inline-block`}
                >
                  <div className="col-12 d-inline-flex align-items-center">
                    <div
                      className={`${styles.reviewImage} d-inline-flex align-items-center`}
                    >
                      <Image
                        src={TestImage1}
                        alt="TestImage 1"
                        className="object-fit-cover "
                      />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column align-items-start">
                      <label
                        className={`${styles.reviewName} col-12 d-inline-block`}
                      >
                        Samantha Anderson
                      </label>
                      <label
                        className={`${styles.reviewDesgn} col-12 d-inline-block`}
                      >
                        Machine Learning Expert at NVIDIA Corp.
                      </label>
                      <span
                        className={`${styles.reviewCount} d-inline-flex align-items-center gap-1`}
                      >
                        4.5 <Image src={reviewStar} alt="review star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles.postReviewText} col-12 d-inline-block`}
                  >
                    “Aenean posuere dapibus lobortis. Sed augue justo, molestie
                    ac lacus eu, pellentesque lobortis ante. Praesent at
                    condimentum ante. Etiam molestie mollis turpis at euismod.
                    Morbi volutpat consectetur nunc et malesuada. Cras a porta
                    nunc, et tempor velit. Ut hendrerit finibus libero, a luctus
                    leo sagittis sit amet”
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.userReviewBox} col-12 d-inline-block`}
                >
                  <div className="col-12 d-inline-flex align-items-center">
                    <div
                      className={`${styles.reviewImage} d-inline-flex align-items-center`}
                    >
                      <Image
                        src={TestImage2}
                        alt="TestImage 2"
                        className="object-fit-cover "
                      />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column align-items-start">
                      <label
                        className={`${styles.reviewName} col-12 d-inline-block`}
                      >
                        Samantha Anderson
                      </label>
                      <label
                        className={`${styles.reviewDesgn} col-12 d-inline-block`}
                      >
                        Machine Learning Expert at NVIDIA Corp.
                      </label>
                      <span
                        className={`${styles.reviewCount} d-inline-flex align-items-center gap-1`}
                      >
                        4.5 <Image src={reviewStar} alt="review star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles.postReviewText} col-12 d-inline-block`}
                  >
                    “Aenean posuere dapibus lobortis. Sed augue justo, molestie
                    ac lacus eu, pellentesque lobortis ante. Praesent at
                    condimentum ante. Etiam molestie mollis turpis at euismod.
                    Morbi volutpat consectetur nunc et malesuada. Cras a porta
                    nunc, et tempor velit. Ut hendrerit finibus libero, a luctus
                    leo sagittis sit amet”
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.userReviewBox} col-12 d-inline-block`}
                >
                  <div className="col-12 d-inline-flex align-items-center">
                    <div
                      className={`${styles.reviewImage} d-inline-flex align-items-center`}
                    >
                      <Image
                        src={TestImage2}
                        alt="TestImage 2"
                        className="object-fit-cover "
                      />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column align-items-start">
                      <label
                        className={`${styles.reviewName} col-12 d-inline-block`}
                      >
                        Samantha Anderson
                      </label>
                      <label
                        className={`${styles.reviewDesgn} col-12 d-inline-block`}
                      >
                        Machine Learning Expert at NVIDIA Corp.
                      </label>
                      <span
                        className={`${styles.reviewCount} d-inline-flex align-items-center gap-1`}
                      >
                        4.5 <Image src={reviewStar} alt="review star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles.postReviewText} col-12 d-inline-block`}
                  >
                    “Aenean posuere dapibus lobortis. Sed augue justo, molestie
                    ac lacus eu, pellentesque lobortis ante. Praesent at
                    condimentum ante. Etiam molestie mollis turpis at euismod.
                    Morbi volutpat consectetur nunc et malesuada. Cras a porta
                    nunc, et tempor velit. Ut hendrerit finibus libero, a luctus
                    leo sagittis sit amet”
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserTestimonial;

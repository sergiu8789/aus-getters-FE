import React from 'react';
import styles from './JobDetailsHeaderCard.module.css';
import logo from '../../../.../../../../public/assets/images/merc_logo.jpeg';
import Image from 'next/image';

const JobDetailsHeaderCard = () => {
  return (
    <div className={styles.HeaderCardMain}>
      <div className={`${styles.Innercard} d-flex justify-content-between`}>
        <div className={'left'}>
          <div className={styles.CardHeading}>UI/UX Designer</div>
          <p className={styles.Company}>Tesla</p>
          <div className={`d-flex gap-3 mb-3 `}>
            <div className={styles.JobDetail}>Full-time</div>
            <div className={styles.JobDetail}>Collaborative</div>
            <div className={styles.JobDetail}>In-person</div>
          </div>
          <div
            className={
              ' d-flex gap-3 flex-wrap align-content-center align-items-center'
            }
          >
            <div className={styles.OtherDetails}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00033 1.33203C5.06699 1.33203 2.66699 3.73203 2.66699 6.66536C2.66699 10.2654 7.33366 14.332 7.53366 14.532C7.66699 14.5987 7.86699 14.6654 8.00033 14.6654C8.13366 14.6654 8.33366 14.5987 8.46699 14.532C8.66699 14.332 13.3337 10.2654 13.3337 6.66536C13.3337 3.73203 10.9337 1.33203 8.00033 1.33203ZM8.00033 13.132C6.60033 11.7987 4.00033 8.93203 4.00033 6.66536C4.00033 4.46536 5.80033 2.66536 8.00033 2.66536C10.2003 2.66536 12.0003 4.46536 12.0003 6.66536C12.0003 8.86536 9.40032 11.7987 8.00033 13.132ZM8.00033 3.9987C6.53366 3.9987 5.33366 5.1987 5.33366 6.66536C5.33366 8.13203 6.53366 9.33203 8.00033 9.33203C9.46699 9.33203 10.667 8.13203 10.667 6.66536C10.667 5.1987 9.46699 3.9987 8.00033 3.9987ZM8.00033 7.9987C7.26699 7.9987 6.66699 7.3987 6.66699 6.66536C6.66699 5.93203 7.26699 5.33203 8.00033 5.33203C8.73366 5.33203 9.33366 5.93203 9.33366 6.66536C9.33366 7.3987 8.73366 7.9987 8.00033 7.9987Z"
                    fill="#595959"
                  />
                </svg>
              </span>
              <span>New York city</span>
            </div>
            <div className={styles.OtherDetails}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33366 4.9987C2.78137 4.9987 2.33366 5.44641 2.33366 5.9987V11.9987C2.33366 12.551 2.78137 12.9987 3.33366 12.9987H12.667C13.2193 12.9987 13.667 12.551 13.667 11.9987V5.9987C13.667 5.44641 13.2193 4.9987 12.667 4.9987H3.33366ZM1.66699 5.9987C1.66699 5.07822 2.41318 4.33203 3.33366 4.33203H12.667C13.5875 4.33203 14.3337 5.07822 14.3337 5.9987V11.9987C14.3337 12.9192 13.5875 13.6654 12.667 13.6654H3.33366C2.41318 13.6654 1.66699 12.9192 1.66699 11.9987V5.9987Z"
                    fill="#595959"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.66667 2.33464C6.40145 2.33464 6.1471 2.43999 5.95956 2.62753C5.77202 2.81507 5.66667 3.06942 5.66667 3.33464V4.66797C5.66667 4.85206 5.51743 5.0013 5.33333 5.0013C5.14924 5.0013 5 4.85206 5 4.66797V3.33464C5 2.89261 5.1756 2.46868 5.48816 2.15612C5.80072 1.84356 6.22464 1.66797 6.66667 1.66797H9.33333C9.77536 1.66797 10.1993 1.84356 10.5118 2.15612C10.8244 2.46868 11 2.89261 11 3.33464V4.66797C11 4.85206 10.8508 5.0013 10.6667 5.0013C10.4826 5.0013 10.3333 4.85206 10.3333 4.66797V3.33464C10.3333 3.06942 10.228 2.81507 10.0404 2.62753C9.8529 2.43999 9.59855 2.33464 9.33333 2.33464H6.66667Z"
                    fill="#595959"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00033 7.66797C8.18442 7.66797 8.33366 7.81721 8.33366 8.0013V8.00797C8.33366 8.19206 8.18442 8.3413 8.00033 8.3413C7.81623 8.3413 7.66699 8.19206 7.66699 8.00797V8.0013C7.66699 7.81721 7.81623 7.66797 8.00033 7.66797Z"
                    fill="#595959"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.70272 8.51544C1.78556 8.35103 1.986 8.28492 2.1504 8.36776C3.96493 9.28211 5.96852 9.75839 8.0004 9.75839C10.0323 9.75839 12.0359 9.28211 13.8504 8.36776C14.0148 8.28492 14.2152 8.35103 14.2981 8.51544C14.3809 8.67984 14.3148 8.88027 14.1504 8.96311C12.2428 9.92435 10.1365 10.4251 8.0004 10.4251C5.86432 10.4251 3.75798 9.92435 1.8504 8.96311C1.686 8.88027 1.61988 8.67984 1.70272 8.51544Z"
                    fill="#595959"
                  />
                </svg>
              </span>
              <span>Design, Marketing</span>
            </div>
            <div className={styles.OtherDetails}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2228_7424)">
                    <path
                      d="M12.667 9.33463V4.0013C12.667 3.26797 12.067 2.66797 11.3337 2.66797H2.00033C1.26699 2.66797 0.666992 3.26797 0.666992 4.0013V9.33463C0.666992 10.068 1.26699 10.668 2.00033 10.668H11.3337C12.067 10.668 12.667 10.068 12.667 9.33463ZM11.3337 9.33463H2.00033V4.0013H11.3337V9.33463ZM6.66699 4.66797C5.56033 4.66797 4.66699 5.5613 4.66699 6.66797C4.66699 7.77464 5.56033 8.66797 6.66699 8.66797C7.77366 8.66797 8.66699 7.77464 8.66699 6.66797C8.66699 5.5613 7.77366 4.66797 6.66699 4.66797ZM15.3337 4.66797V12.0013C15.3337 12.7346 14.7337 13.3346 14.0003 13.3346H2.66699C2.66699 12.668 2.66699 12.7346 2.66699 12.0013H14.0003V4.66797C14.7337 4.66797 14.667 4.66797 15.3337 4.66797Z"
                      fill="#595959"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2228_7424">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>$200/day</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className={styles.ImageContainer}>
            <Image
              src={logo}
              alt="company logo"
              className="object-fit-cover col-12 d-inline-block h-100"
              style={{ borderRadius: '24.792px' }}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.HeaderCardFooter} d-flex justify-content-between`}
      >
        <div>
          <span className="text-black">Application submitted</span>:{' '}
          <span className="text-red">July 19, 2023</span>
        </div>
        <div>
          <span className="text-black">Status:</span>{' '}
          <span className={styles.BtnCustomPrimary}>Active</span>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsHeaderCard;

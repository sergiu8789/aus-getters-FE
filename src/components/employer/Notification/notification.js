import styles from './notification.module.css';
import Link from 'next/link';
import Image from 'next/image';
import BriefcaseBlueImg from '../../../../public/assets/images/briefcase_blue.png';
import BriefcaseGreenImg from '../../../../public/assets/images/briefcase_green.png';
import EllipseGreenImg from '../../../../public/assets/images/Ellipse_green.svg';
import EllipseBlueImg from '../../../../public/assets/images/Ellipse_blue.svg';

const NotificationComponent = () => {
  return (
    <div className={`${styles.page_container}`}>
      <div className={`${styles.title}`}>Notifications</div>
      {/* Notification Box section */}
      <div className={`${styles.noti_box} `}>
        {/* First Notification */}
        <div className={`${styles.noti_item} d-flex`}>
          <div
            className={`${styles.img_box} d-inline-block`}
            style={{ backgroundImage: `url(${EllipseBlueImg.src})` }}
          >
            <Image
              src={BriefcaseBlueImg}
              className={`${styles.card_img} `}
              alt=""
            ></Image>
          </div>
          <div className={`${styles.noti_text}  d-inline-block`}>
            Wade Warren{' '}
            <span className={`${styles.applied_for_text}`}>
              applied for a job
            </span>{' '}
            &nbsp;
            <Link href="/employer/dashbaord" className={` ${styles.job_name}`}>
              Web Developer
            </Link>
          </div>
        </div>
        {/* Second Notification */}
        <div className={`${styles.noti_item} d-flex`}>
          <div
            className={`${styles.img_box} d-inline-block`}
            style={{ backgroundImage: `url(${EllipseBlueImg.src})` }}
          >
            <Image
              src={BriefcaseBlueImg}
              className={`${styles.card_img} `}
              alt=""
            ></Image>
          </div>
          <div className={`${styles.noti_text}  d-inline-block`}>
            Henry Wilson{' '}
            <span className={`${styles.applied_for_text}`}>
              applied for a job
            </span>{' '}
            &nbsp;
            <Link href="/employer/dashbaord" className={` ${styles.job_name}`}>
              Senior Product Designer
            </Link>
          </div>
        </div>
        {/* Third Notification */}
        <div className={`${styles.noti_item} d-flex`}>
          <div
            className={`${styles.img_box} d-inline-block`}
            style={{ backgroundImage: `url(${EllipseGreenImg.src})` }}
          >
            <Image
              src={BriefcaseGreenImg}
              className={`${styles.card_img} `}
              alt=""
            ></Image>
          </div>
          <div className={`${styles.noti_text}  d-inline-block`}>
            Raul Costa{' '}
            <span className={`${styles.applied_for_text}`}>
              applied for a job
            </span>{' '}
            &nbsp;
            <Link
              href="/employer/dashbaord"
              className={` ${styles.job_name_green}`}
            >
              Product Manager
            </Link>
          </div>
        </div>
        {/* Fourth Notification */}
        <div className={`${styles.noti_item} d-flex`}>
          <div
            className={`${styles.img_box} d-inline-block`}
            style={{ backgroundImage: `url(${EllipseBlueImg.src})` }}
          >
            <Image
              src={BriefcaseBlueImg}
              className={`${styles.card_img} `}
              alt=""
            ></Image>
          </div>
          <div className={`${styles.noti_text}  d-inline-block`}>
            Jack Milk{' '}
            <span className={`${styles.applied_for_text}`}>
              applied for a job
            </span>{' '}
            &nbsp;
            <Link href="/employer/dashbaord" className={` ${styles.job_name}`}>
              Technical Architect
            </Link>
          </div>
        </div>

        {/* Fifth Notification */}
        <div className={`${styles.noti_item} d-flex`}>
          <div
            className={`${styles.img_box} d-inline-block`}
            style={{ backgroundImage: `url(${EllipseGreenImg.src})` }}
          >
            <Image
              src={BriefcaseGreenImg}
              className={`${styles.card_img} `}
              alt=""
            ></Image>
          </div>
          <div className={`${styles.noti_text}  d-inline-block`}>
            Michel Arian{' '}
            <span className={`${styles.applied_for_text}`}>
              applied for a job
            </span>{' '}
            &nbsp;
            <Link
              href="/employer/dashbaord"
              className={` ${styles.job_name_green}`}
            >
              Software Engineer
            </Link>
          </div>
        </div>
        {/* Sixth Notification */}
        <div className={`${styles.noti_item} d-flex`}>
          <div
            className={`${styles.img_box} d-inline-block`}
            style={{ backgroundImage: `url(${EllipseBlueImg.src})` }}
          >
            <Image
              src={BriefcaseBlueImg}
              className={`${styles.card_img} `}
              alt=""
            ></Image>
          </div>
          <div className={`${styles.noti_text}  d-inline-block`}>
            Ali Tufan{' '}
            <span className={`${styles.applied_for_text}`}>
              applied for a job
            </span>{' '}
            &nbsp;
            <Link href="/employer/dashbaord" className={` ${styles.job_name}`}>
              UI Designer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;

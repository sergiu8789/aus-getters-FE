'use client';
import styles from './siderbar.module.css';
import BrandLogo from '../../../../public/assets/images/brand_logo.jpeg';
import DashboardImg from '../../../../public/assets/images/dashboard.png';
import CandidateSearchImg from '../../../../public/assets/images/candidate-search.png';
import CandidatesImg from '../../../../public/assets/images/candidates.png';
import CourseImg from '../../../../public/assets/images/course.png';
import InterviewsImg from '../../../../public/assets/images/interviews.png';
import JobImg from '../../../../public/assets/images/job.png';
import MessagesImg from '../../../../public/assets/images/messages.png';
import MyCoursesImg from '../../../../public/assets/images/my_courses.png';
import SettingImg from '../../../../public/assets/images/setting.png';
import SubscriptionsImg from '../../../../public/assets/images/subscriptions.png';
import DefaultUserImage from '../../../../public/assets/images/default_user.png';
import CollaspLeftImage from '../../../../public/assets/images/collasp_left.png';


import Image from 'next/image';
import Link from 'next/link';

const EmployerSidebarComponent = () => {
  return (
    <div className={`${styles.sidebar_container}`}>
      <div className={`${styles.sidebar_brand}`}>
        <Image
          src={BrandLogo}
          className={`${styles.brand_logo} `}
          alt="brand-logo"
        ></Image>
        <span className={`${styles.brand_name} `}>Company Name</span>
      </div>
      <div className="menus">
        {/* Dashbaord Menu */}
        <div className={`${styles.menu_item} ${styles.menu_item_active}`}>
          <Image
            src={DashboardImg}
            className={`${styles.menu_item_img} `}
            alt="dashboard"
          ></Image>

          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Dashboard
          </Link>
        </div>
        {/* Jobs Menu */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={JobImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Jobs
          </Link>
        </div>
        {/* Candidates Menu */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={CandidatesImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Candidates
          </Link>
        </div>
        {/* Candidate Search */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={CandidateSearchImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Candidate Search
          </Link>
        </div>

        {/* Interviews */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={InterviewsImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Interviews
          </Link>
        </div>

        {/* Courses Modules & Manuals */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={CourseImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Courses Modules & Manuals
          </Link>
        </div>

        {/* My Courses */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={MyCoursesImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            My Courses
          </Link>
        </div>

        {/* Messages */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={MessagesImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Messages
          </Link>
        </div>

        {/* Settings */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={SettingImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Settings
          </Link>
        </div>

        {/* Subscriptions */}
        <div className={`${styles.menu_item} `}>
          <Image
            src={SubscriptionsImg}
            className={`${styles.menu_item_img} `}
            alt="Jobs"
          ></Image>
          <Link
            href="/employer/dashboard"
            className={`${styles.menu_item_text} `}
          >
            Subscriptions
          </Link>
        </div>
      </div>
      {/* user menu sidebar */}
      <div className={`${styles.sidebar_user_menu} `}>
        <Image
          src={DefaultUserImage}
          className={`${styles.logged_in_user_img}`}
          alt="default-user-image"
        ></Image>
        <Link
          href="/employer/dashboard"
          className={`${styles.logged_in_user_name} `}
        >
          User name
        </Link>
      </div>

      {/* Sidebar collasp */}
      <div className={`${styles.collasp} `}>
        <Image
          src={CollaspLeftImage}
          className={`${styles.collasp_in}`}
          alt="Collasp-left"
        ></Image>
        
      </div>
    </div>
  );
};

export default EmployerSidebarComponent;

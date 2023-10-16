import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './JobsHeaderNav.module.css';
import Logo from '../../../../public/assets/images/logo-employer.png';
import userProfile from '../../../../public/assets/images/userProfile.svg';
import logoFuture from '../../../../public/assets/images/logo-better-future.png';
import account from '../../../../public/assets/images/icons/accountSettings.svg';
import dashboard from '../../../../public/assets/images/icons/dashboard.svg';
import jobs from '../../../../public/assets/images/icons/jobs.svg';
import learner from '../../../../public/assets/images/icons/learnerAccount.svg';
import message from '../../../../public/assets/images/icons/messages.svg';
import logout from '../../../../public/assets/images/icons/logout.svg';

function JobsHeaderNav() {
  return (
    <React.Fragment>
      <div className={`col-12 d-inline-flex flex-column`}>
        <div className={`${styles.topHeader} col-12 d-inline-flex`}>
          <div className="container d-inline-flex">
            <div
              className={`${styles.topHeaderNav} col-12 d-inline-flex align-items-stretch`}
            >
              <div className="col-md-3"></div>
              <div className="col-md-6 d-inline-flex align-items-center justify-content-evenly">
                <Link
                  href=""
                  className={`${styles.headerLink} d-inline-flex text-decoration-none h-100 align-items-center`}
                >
                  Search Jobs
                </Link>
                <Link
                  href=""
                  className={`${styles.headerLink} d-inline-flex text-decoration-none h-100 align-items-center`}
                >
                  Courses
                </Link>
                <Link
                  href=""
                  className={`${styles.headerLink} d-inline-flex text-decoration-none h-100 align-items-center`}
                >
                  Insights
                </Link>
                <Link
                  href=""
                  className={`${styles.headerLink} d-inline-flex text-decoration-none h-100 align-items-center`}
                >
                  About Us
                </Link>
              </div>
              <div className="col-md-3 d-inline-flex justify-content-end">
                <Link
                  href=""
                  className={`${styles.headerLink} d-inline-flex text-decoration-none h-100 align-items-center`}
                >
                  Post job / Employers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.topSiteHeader} py-2 col-12 d-inline-flex`}>
          <div className="container d-inline-flex">
            <div
              className={`${styles.jobSiteHeader} col-12 d-inline-flex justify-content-between align-items-start`}
            >
              <Link
                href="/"
                className={`${styles.siteLogoLink} d-inline-flex align-items-center`}
              >
                <Image src={Logo} alt="Logo" />
              </Link>
              <div className="m-auto d-inline-block pt-5">
                <Image
                  src={logoFuture}
                  alt="Logo Future"
                  className="object-fit-contain"
                />
              </div>
              <div
                className={`${styles.loggedProfile} gap-2 d-inline-flex align-items-center`}
                role="button"
              >
                <Image src={userProfile} alt="user Profile" />
                <div
                  className={`position-relative d-inline-flex flex-column align-items-center`}
                  role="button"
                >
                  <span className={`${styles.profileName} d-inline-block`}>
                    Jason
                  </span>
                  <span
                    className={`${styles.profileStatus} d-inline-flex gap-1 align-items-center`}
                  >
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.loggedInNavRow} mt-2 col-12 d-inline-flex`}>
          <div className="container d-inline-flex">
            <div
              className={`${styles.loggedInNav} col-12 d-inline-flex align-items-center gap-5 flex-wrap`}
            >
              <Link
                href="/"
                className={`${styles.loggedLink} d-inline-flex align-items-center text-decoration-none`}
              >
                <Image src={dashboard} alt="dashboard" />
                <span className={`${styles.userLinks} d-inline-block`}>
                  Dashboard
                </span>
              </Link>
              <Link
                href="/"
                className={`${styles.loggedLink} d-inline-flex align-items-center text-decoration-none`}
              >
                <Image src={account} alt="account" />
                <span className={`${styles.userLinks} d-inline-block`}>
                  Account Settings
                </span>
              </Link>
              <Link
                href="/"
                className={`${styles.loggedLink} d-inline-flex align-items-center text-decoration-none`}
              >
                <Image src={jobs} alt="jobs" />
                <span className={`${styles.userLinks} d-inline-block`}>
                  Jobs
                </span>
              </Link>
              <Link
                href="/"
                className={`${styles.loggedLink} d-inline-flex align-items-center text-decoration-none`}
              >
                <Image src={message} alt="message" />
                <span className={`${styles.userLinks} d-inline-block`}>
                  Messages
                </span>
              </Link>
              <Link
                href="/"
                className={`${styles.loggedLink} d-inline-flex align-items-center text-decoration-none`}
              >
                <Image src={learner} alt="learner" />
                <span className={`${styles.userLinks} d-inline-block`}>
                  Learner Account
                </span>
              </Link>
              <Link
                href="/"
                className={`${styles.loggedLink} d-inline-flex align-items-center text-decoration-none`}
              >
                <Image src={logout} alt="logout" />
                <span className={`${styles.userLinks} d-inline-block`}>
                  Sign Out
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default JobsHeaderNav;

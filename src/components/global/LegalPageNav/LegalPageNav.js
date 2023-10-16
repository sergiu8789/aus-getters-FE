import React from 'react';
import styles from './LegalPageNav.module.css';
import Link from 'next/link';

function LegalPageNav({ link }) {
  return (
    <React.Fragment>
      <div
        className={`${styles.termsNavList} d-inline-flex flex-column flex-grow-0`}
      >
        <div
          className={`position-sticky top-0 col-12 d-inline-flex flex-column gap-2 p-3`}
        >
          <Link
            className={`${styles.navListRow} ${
              link === 'terms' && styles.navListRowActive
            } d-inline-flex align-items-center col-12 text-decoration-none`}
            role="button"
            href="/terms"
          >
            Terms of Use
          </Link>
          <Link
            className={`${styles.navListRow} ${
              link === 'privacy' && styles.navListRowActive
            } d-inline-flex align-items-center col-12 text-decoration-none`}
            role="button"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className={`${styles.navListRow}  ${
              link === 'cookie' && styles.navListRowActive
            } d-inline-flex align-items-center col-12 text-decoration-none`}
            role="button"
            href="/cookie"
          >
            Cokkie Policy
          </Link>
          <Link
            className={`${styles.navListRow} ${
              link === 'instructor-terms' && styles.navListRowActive
            } d-inline-flex align-items-center col-12 text-decoration-none`}
            role="button"
            href="/instructor-terms"
          >
            Instructor Terms
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LegalPageNav;

import styles from './footer.module.css';
import Link from 'next/link';

const EmployerFooterComponent = () => {
  return (
    <div className={`${styles.footer_conatainer}`}>
      <div className={`${styles.footer_text}`}>
        © 2023 Aus-Getters Courses. All rights reserved
      </div>
      <div className={`${styles.footer_menus} d-flex`}>
        <Link
          href="/employer/dashboard"
          className={`${styles.footer_menu_item} d-inline-block`}
        >
          Cookies, privacy and terms
        </Link>

        <div className={`${styles.footer_menu_gap} d-inline-block`}>-</div>
        <Link
          href="/employer/dashboard"
          className={`${styles.footer_menu_item} d-inline-block`}
        >
          Privacy center
        </Link>
        <div className={`${styles.footer_menu_gap} d-inline-block`}>-</div>
        <Link
          href="/employer/dashboard"
          className={`${styles.footer_menu_item} d-inline-block`}
        >
          Security
        </Link>
        <div className={`${styles.footer_menu_gap} d-inline-block`}>-</div>
        <Link
          href="/employer/dashboard"
          className={`${styles.footer_menu_item} d-inline-block`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default EmployerFooterComponent;

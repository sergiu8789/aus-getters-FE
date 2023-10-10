'use client';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../../../public/assets/images/logo_large.png';
import DefaultUserImage from '../../../../public/assets/images/default_user.png';
import Online from '../../../../public/assets/images/online.png';
import Image from 'next/image';
import styles from './header.module.css';

const EmployerHeaderComponent = () => {
  return (
    <div className={`${styles.header_conatainer}`}>
      <div
        className={`${styles.logo_box}`}
        style={{
          backgroundImage: `url(${Logo.src})`
        }}
      ></div>
      <div className={`${styles.middle_section}`}></div>
      <div className={`${styles.right_section} d-flex`}>
        <a href="" className={`${styles.need_help} d-inline-block`}>
          Need help?
        </a>
        <div className={`${styles.divder} d-inline-block `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="28"
            viewBox="0 0 2 28"
            fill="none"
          >
            <path d="M1 0.25V27.75" stroke="#888888" />
          </svg>
        </div>
        <Dropdown as={ButtonGroup}>
          <div className={`${styles.mr1}`}>
            <Image src={DefaultUserImage} className={`${styles.logged_in_user_img}`} alt="default-user-image"></Image>
          </div>
          <div className="">
            <div className={`${styles.logged_in_user_name}`}>Company Name</div>
            <div className={`${styles.header_online}`}>
            <Image src={Online} className="" alt="online"></Image>&nbsp;
              Online
              </div>
          </div>
          <Dropdown.Toggle split variant="none" id="dropdown-custom-2" />
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
    </div>
  );
};

export default EmployerHeaderComponent;

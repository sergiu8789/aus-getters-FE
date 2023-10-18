import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../../../public/assets/images/logo_large.png';
import DefaultUserImage from '../../../../public/assets/images/default_user.png';
import Online from '../../../../public/assets/images/online.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

const EmployerHeaderComponent = () => {
  return (
    <div className={`${styles.header_conatainer} col-12`}>
      <div className="container">
        <div className="col-12 d-inline-flex align-items-center justify-content-between">
          <div
            className={`${styles.logo_box}`}
            style={{
              backgroundImage: `url(${Logo.src})`
            }}
          ></div>
          <div className={`d-flex gap-2 align-items-stretch`}>
            <Link
              href=""
              className={`${styles.need_help} d-inline-flex align-items-center text-decoration-none px-3`}
            >
              Need help?
            </Link>
            <Dropdown
              as={ButtonGroup}
              className="d-inline-flex align-items-center justify-content-start"
            >
              <div className={`${styles.mr1} d-inline-flex flex-shrink-0`}>
                <Image
                  src={DefaultUserImage}
                  className={`${styles.logged_in_user_img} h-auto w-auto`}
                  alt="default-user-image"
                ></Image>
              </div>
              <div className="d-inline-flex flex-column align-items-start justify-content-start">
                <label className={`${styles.logged_in_user_name}`}>
                  Company Name
                </label>
                <div
                  className={`${styles.header_online} d-inline-flex align-items-center`}
                >
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
      </div>
    </div>
  );
};

export default EmployerHeaderComponent;

'use client';
import React from 'react';
import styles from './Contactlist.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import filterIcon from '../../../../public/assets/images/Frame.png';

export const Contactlist = () => {
  return (
    <React.Fragment>
      <div className={`${styles.user_profile_main} position-relative`}>
        <input
          type="text"
          name="Search"
          placeholder="Search"
          className={`${styles.formInput} w-100`}
        />
        {/* <div className={`${styles.filter_dropdown} w-100`}>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Image
              src={filterIcon}
              className={`${styles.filter_img} pe-2`}
            ></Image>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <div className={`${styles.user_profile} mt-4 w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}></div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Darlene Robertson</h6>
              <p>Head of Development</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              <p>35 min</p>
            </div>
          </div>
        </div>

        <div className={`${styles.user_profile}  mt-4 w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
          </div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Jane Cooper</h6>
              <p>Accountant</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              <p>35 min</p>
            </div>
          </div>
        </div>

        <div className={`${styles.user_profile}  mt-4 w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
          </div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Arlene McCoy</h6>
              <p>Programmer</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              {' '}
              <p>35 min</p>
            </div>
          </div>
        </div>

        <div className={`${styles.user_profile}  mt-4 w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
          </div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Albert Flores</h6>
              <p>Lawyer</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              {' '}
              <p>35 min</p>
            </div>
          </div>
        </div>

        <div className={`${styles.user_profile}  mt-4 w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
          </div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Cameron Williams</h6>
              <p>Operation Manager</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              {' '}
              <p>35 min</p>
            </div>
          </div>
        </div>

        <div className={`${styles.user_profile}  mt-4 w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
          </div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Kristin Watson</h6>
              <p>Photographer</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              {' '}
              <p>35 min</p>
            </div>
          </div>
        </div>

        <div className={`${styles.user_profile} mt-4  w-100 d-flex`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
          </div>
          <div
            className={`${styles.user_name} d-flex align-items-center w-100`}
          >
            <div className="w-75">
              <h6 className="mb-0">Annette Jones</h6>
              <p>Product Manager</p>
            </div>
            <div className={`${styles.right_text} w-25 text-end`}>
              {' '}
              <p>35 min</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

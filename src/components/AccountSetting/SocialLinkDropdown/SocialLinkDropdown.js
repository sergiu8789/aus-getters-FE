import React from 'react';
import crossIcon from '../../../../public/assets/images/x_close.svg';
import styles from './SocialLinkDropdown.module.css';
import Image from 'next/image';
import Dropdown from 'react-bootstrap/Dropdown';

const socialSkillDropdown = (props) => {
  const { link, onRemoveClick } = props;

  return (
    <React.Fragment>
      <Dropdown className={styles.skillDropdown}>
        <Dropdown.Toggle className={styles.skillToggle}>
          <span
            role="button"
            onClick={onRemoveClick}
            className={`${styles.close_rmv_skill} position-absolute`}
          >
            <Image src={crossIcon} alt="close button"></Image>
          </span>
          {link.name ? (
            <span>{link.name}</span>
          ) : (
            <span className={styles.skillPlaceholder}>Skill</span>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.skillPopover}>
          <div className={`${styles.skill_popup_box_form} position-relative`}>
            <form>
              {/* <Image
                src={HalfArrow}
                alt="Half Arrow"
                className="position-absolute"
              /> */}
              <div className={styles.skillDropdownFormBlocks}>
                <label>Social Media</label>
                <select className={`${styles.formSelect} w-100`} role="button">
                  <option value="Insta">Insta</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Git">Git</option>
                  <option value="FaceBook">FaceBook</option>
                </select>
                <label>Links</label>
                <input
                  type="text"
                  name="Enter"
                  placeholder="Enter"
                  className={`${styles.linkInput} w-100`}
                />
              </div>
            </form>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

export default socialSkillDropdown;

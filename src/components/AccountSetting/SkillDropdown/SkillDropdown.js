import React from 'react';
import crossIcon from '../../../../public/assets/images/x_close.svg';
import styles from './SkillDropdown.module.css';
import Image from 'next/image';
import Dropdown from 'react-bootstrap/Dropdown';

const SkillDropdown = (props) => {
  const { skill, onRemoveClick } = props;

  return (
    <React.Fragment>
      <Dropdown className={styles.skillDropdown}>
        <Dropdown.Toggle className={styles.skillToggle}>
          <span role="button" onClick={onRemoveClick}>
            <Image
              src={crossIcon}
              className={`${styles.close_rmv_skill} position-absolute`}
              alt="close button"
            ></Image>
          </span>
          {skill.name ? (
            <span>{skill.name}</span>
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
                <label>Skill name</label>
                <input
                  type="text"
                  name="Search"
                  placeholder="Search"
                  className={`${styles.formInput} w-100`}
                />
                <label>Level of Expertise</label>
                <select className={`${styles.formSelect} w-100`} role="button">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </form>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

export default SkillDropdown;

import React, { useState } from 'react';
import styles from './SocialLinks.module.css';
import Plus from '../../../../public/assets/images/plus.svg';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import SocialLinkDropdown from '../SocialLinkDropdown/SocialLinkDropdown';

const skillsData = [
  { id: 101, name: 'React' },
  { id: 102, name: 'Angular' },
  { id: 103, name: 'UI' },
  { id: 104, name: 'UX' },
  { id: 105, name: 'Design' }
];

const SocialLinks = () => {
  const [skills, setSkills] = useState(skillsData);

  return (
    <React.Fragment>
      <h6>Social Links</h6>
      <form className="row mt-3">
        {skills.map((skill, i) => (
          <div
            className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}
            key={i}
          >
            <SocialLinkDropdown
              skill={skill}
              onRemoveClick={() =>
                setSkills(skills.filter((x) => x.id !== skill.id))
              }
            />
          </div>
        ))}

        <div className="text-end mb-1">
          <button
            role="button"
            className={`${styles.add_skill_btn} col-12 d-inline-block`}
            onClick={() => setSkills([...skills, { name: '', id: uuidv4() }])}
            type="button"
          >
            <Image src={Plus} className="" width="10" alt="plus"></Image> Add
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SocialLinks;

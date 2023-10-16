import React, { useState } from 'react';
import styles from './SkillsForm.module.css';
import Plus from '../../../../public/assets/images/plus.svg';
import Image from 'next/image';
import SkillDropdown from '../SkillDropdown/SkillDropdown';
import { v4 as uuidv4 } from 'uuid';

const skillsData = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Angular' },
  { id: 3, name: 'UI' },
  { id: 4, name: 'UX' },
  { id: 5, name: 'Design' }
];

const SkillsForm = () => {
  const [skills, setSkills] = useState(skillsData);

  return (
    <React.Fragment>
      <h6>Skills</h6>
      <form className="row mt-3">
        {skills.map((skill, i) => (
          <div
            className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}
            key={i}
          >
            <SkillDropdown
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

export default SkillsForm;

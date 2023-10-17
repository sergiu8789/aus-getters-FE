import { useEffect, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

import styles from './SalaryRangeSlider.module.css';

const MODES = {
  Annual: 'annual',
  Hourly: 'hourly'
};

const SalaryRangeSlider = () => {
  const modes = {
    [MODES.Annual]: {
      min: 5,
      max: 400,
      step: 10,
      labels: ['$10k', '$400k'],
      name: MODES.Annual
    },
    [MODES.Hourly]: {
      min: 10,
      max: 200,
      step: 1,
      labels: ['$10/hr', '$200/hr'],
      name: MODES.Hourly
    }
  };

  const [mode, setMode] = useState(modes[MODES.Annual]);

  const [minValue, setMinValue] = useState(mode.min);
  const [maxValue, setMaxValue] = useState(mode.max);
  const [minValue2, setMinValue2] = useState(mode.min);
  const [maxValue2, setMaxValue2] = useState(mode.max);

  function handleRadioChange(e) {
    if (!e.target.checked) return;
    setMode(modes[e.target.value]);
  }

  useEffect(() => {
    setMinValue(50);
    setMaxValue((mode.min + mode.max) / 2);
  }, [mode]);

  const { min, max, labels, step } = mode;
  return (
    <div className="salary-range-slider">
      <div className="d-flex gap-2">
        <input
          className={`btn-check ${styles.modeRadio}`}
          type="radio"
          name="salary-range-type"
          id="salary-range-annual"
          checked={mode.name === MODES.Annual}
          value={MODES.Annual}
          onChange={handleRadioChange}
        />
        <label className={styles.modeLabel} for="salary-range-annual">
          Salary
        </label>
        <input
          className={`btn-check ${styles.modeRadio}`}
          type="radio"
          name="salary-range-type"
          id="salary-range-hourly"
          value={MODES.Hourly}
          checked={mode.name === MODES.Hourly}
          onChange={handleRadioChange}
        />
        <label className={styles.modeLabel} for="salary-range-hourly">
          Wage
        </label>
      </div>

      <MultiRangeSlider
        // disabled={trabc
        onInput={(e) => {
          setMinValue(e.minValue);
          setMaxValue(e.maxValue);
        }}
        onChange={(e) => {
          setMinValue2(e.minValue);
          setMaxValue2(e.maxValue);
        }}
        ruler={false}
        min={min}
        max={max}
        minValue={minValue}
        maxValue={maxValue}
        minCaption={'$' + minValue}
        maxCaption={'$' + maxValue}
        labels={labels}
        barLeftColor="var(--btn-bg-color-1)"
        barRightColor="var(--btn-bg-color-1)"
        barInnerColor="#9394F4"
        thumbLeftColor="#9394F4"
        thumbRightColor="#9394F4"
        style={{
          border: 'none',
          boxShadow: 'none',
          padding: '35px 10px 10px 10px'
        }}
        // minCaption="$0"
        // maxCaption="$500"
        step={step}
        stepOnly={true}
      ></MultiRangeSlider>
    </div>
  );
};

export default SalaryRangeSlider;

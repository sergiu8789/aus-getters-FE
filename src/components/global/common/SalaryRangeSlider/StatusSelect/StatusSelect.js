import Select from 'react-select';

const StatusSelect = (props) => {
  const { value, options } = props;
  return (
    <Select
      components={{ IndicatorSeparator: () => <></> }}
      value={options.find((option) => option.value === value)}
      options={options}
      styles={{
        control: (provided) => ({
          ...provided,
          background: 'var(--light-green-bg)',
          width: '140px',
          fontSize: '14px',
          letterSpacing: '-0.28px',
          textAlign: 'left',
          border: 'none'
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: '0 2px 0 6px'
        }),
        indicatorContainer: (provided) => ({
          ...provided,
          padding: 0
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: 'var(--secondary-black) !important'
        }),
        menu: (provided) => ({
          ...provided,
          transform: 'translateY(-3%)'
        }),
        option: (provided) => ({
          ...provided,
          fontSize: '14px',
          padding: '2px'
        })
      }}
    />
  );
};

export default StatusSelect;

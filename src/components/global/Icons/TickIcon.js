import React from 'react';

function TickIcon(props) {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      style={{ fill: color }}
    >
      <path
        fill="#389437"
        d="M13.777 3.504a.667.667 0 01.055.941l-7.11 8a.668.668 0 01-.997 0l-3.555-4a.667.667 0 01.996-.885L6.223 11l6.613-7.44a.667.667 0 01.941-.056z"
      ></path>
    </svg>
  );
}

export default TickIcon;

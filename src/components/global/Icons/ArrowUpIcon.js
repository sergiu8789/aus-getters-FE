import React from 'react';
import Image from 'next/image';
import ArrowUp from '../../../../public/assets/images/ArrowUp.svg';

function ArrowUpIcon() {
  return (
    <div>
      <Image src={ArrowUp} alt="ArrowUp" />
    </div>
  );
}

export default ArrowUpIcon;

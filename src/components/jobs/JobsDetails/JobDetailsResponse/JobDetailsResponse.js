import React from 'react';
import styles from '../JobDeatils.module.css';

const JobDetailsResponse = () => {
  return (
    <div className={styles.ResponseMain}>
      <div className={styles.Heading}>Your responses</div>
      <div>
        <p>Q1. Why should you be considered for this job?</p>
        <p>
          Suspendisse ac neque porta, maximus ipsum eu, porttitor lorem.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
          accumsan sollicitudin congue. Aliquam ipsum ex, dictum accumsan congue
          sit amet, mattis ac sapien. Nulla pulvinar cursus justo, et tristique
          est fermentum sed. Maecenas vulputate at metus non hendrerit. Nunc
          lectus libero, porta quis arcu vel, mattis rutrum ligula. Etiam porta,
          ipsum in posuere molestie, quam eros commodo lectus, eget tempor urna
          tellus eu massa. Aenean dapibus risus scelerisque elit tincidunt
          facilisis. Cras imperdiet bibendum arcu vel commodo. Donec ornare
          lorem sit amet augue porttitor scelerisque. Aliquam mollis lobortis
          rhoncus. Curabitur pellentesque lorem a est suscipit, a fringilla nibh
          commodo. In tristique nulla odio, ut ultrices risus congue et.
        </p>
        <p>Q2. When can we expect you to join?</p>
        <ul>
          <li>Answer 1</li>
          <li>Answer 2</li>
          <li>Answer 3</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetailsResponse;

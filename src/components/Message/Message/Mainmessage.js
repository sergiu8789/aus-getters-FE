import React from 'react';
import styles from './Mainmessage.module.css';
import { Contactlist } from '../ContactList/Contactlist';
import { Chatbox } from '../ChatBox/Chatbox';

export const Message = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.messageContainer} col-12 d-inline-block pt-4 pb-5`}
      >
        <div className="container">
          <h6 className={`${styles.messageTitle}`}>Messages</h6>
          <div className="row">
            <div className="col-md-5">
              <Contactlist />
            </div>
            <div className="col-md-7">
              <Chatbox />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

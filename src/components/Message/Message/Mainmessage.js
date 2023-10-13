import React from "react";
import styles from './Mainmessage.module.css';
import { Contactlist } from "../ContactList/Contactlist";
import { Chatbox } from "../ChatBox/Chatbox";

export const Message = () => {
    return (
        <React.Fragment>
            <h6 className={`${styles.hello_wr}`}>Messages</h6>
            <div className="row">
                <div className="col-md-5">
                    <Contactlist/>
                </div>
                <div className="col-md-7">
                    <Chatbox/>
                </div>
            </div>
        </React.Fragment>
    )
}

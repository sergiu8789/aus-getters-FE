import React from 'react';
import styles from './chatbox.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

export const Chatbox = () => {
  return (
    <React.Fragment>
      <div className={`${styles.chatbox_main} d-inline-block col-12`}>
        <div className={`${styles.user_profile} px-4 py-4`}>
          <div className={`${styles.user_img_box}`}>
            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image> */}
          </div>
          <div className={`${styles.user_name} d-flex w-100`}>
            <div className="w-75">
              <h6 className="mb-0">Arlene McCoy</h6>
              <p>Programmer</p>
            </div>
            <div
              className={`${styles.right_text} w-25 d-flex align-items-center text-end`}
            >
              <div className={`${styles.delete_text}`}>Delete Conversation</div>
            </div>
          </div>
        </div>
        <div className={`${styles.user_conversation}`}>
          <div className={`${styles.user_conversation_me} w-75`}>
            <div className={`${styles.user_profile}`}>
              <div className={`${styles.user_img_box}`}></div>
              <div className={`${styles.user_name} d-flex align-items-center`}>
                <div className="">
                  <h6 className="mb-0">Arlene McCoy</h6>
                </div>
                <div className={`${styles.right_text} d-flex text-end`}>
                  <span className="ps-4">35 mins</span>
                </div>
              </div>
            </div>
            <div className={`${styles.conversation_box_me}`}>
              <span>
                How likely are you to recommend our company to your friends and
                family?
              </span>
            </div>
          </div>

          <div
            className={`${styles.user_conversation_you} w-100 d-flex justify-content-end`}
          >
            <div className={`${styles.conversation_you_main_box} w-75`}>
              <div className={`${styles.user_profile} flex-row-reverse`}>
                <div className={`${styles.user_img_box}`}></div>
                <div
                  className={`${styles.user_name} flex-row-reverse d-flex align-items-center`}
                >
                  <div className="">
                    <h6 className="mb-0">You</h6>
                  </div>
                  <div className={`${styles.right_text} d-flex text-end`}>
                    <span className="ps-4 pe-2">35 mins</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.conversation_box_you}`}>
                <span>
                  How likely are you to recommend our company to your friends
                  and family?
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.user_conversation_me}  w-75`}>
            <div className={`${styles.user_profile}`}>
              <div className={`${styles.user_img_box}`}></div>
              <div
                className={`${styles.user_name} d-flex align-items-center justify-content-space-between`}
              >
                <div className="">
                  <h6 className="mb-0">Arlene McCoy</h6>
                </div>
                <div className={`${styles.right_text} d-flex text-end`}>
                  <span className="ps-4">35 mins</span>
                </div>
              </div>
            </div>
            <div className={`${styles.conversation_box_me}`}>
              <span>
                How likely are you to recommend our company to your friends and
                family?
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.message_box}`}>
          <form>
            <div className="w-100 d-flex">
              <div className="w-75">
                <input
                  className="w-100"
                  type="text"
                  placeholder="Type a message"
                ></input>
              </div>
              <div className="w-25 d-flex justify-content-end">
                <button className={`${styles.send_btn}`}>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

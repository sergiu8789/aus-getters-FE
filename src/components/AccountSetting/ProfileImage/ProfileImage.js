import React, { useEffect, useState } from 'react';
import styles from './ProfileImage.module.css';
import Close from '../../../../public/assets/images/x_close.svg';
import EditIcon from '../../../../public/assets/images/edit_icon.svg';
import Image from 'next/image';
import ProfilePic from '../../../../public/assets/images/profile_pic.png';

export const ProfileImage = () => {
  const [currentProfilePic, setCurrentProfilePic] = useState('');

  const handleRemoveClick = () => {
    // Replace the current profile picture with a default image or null.
    setCurrentProfilePic('');
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input when the "Upload new" button is clicked.
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);

      // Update the currentProfilePic with the URL of the uploaded image.
      setCurrentProfilePic(objectURL);
    }
  };

  const fileInputRef = React.createRef();

  return (
    <React.Fragment>
      <div className={`${styles.image_main_box} w-100 p-3`}>
        <h6>Profile image</h6>
        <div className="d-flex align-items-end justify-content-between">
          <div
            className={`${styles.profile_edit_btn} d-flex justify-content-end`}
          >
            <div className="row align-items-end gap-3 gap-xl-0">
              <div className="col-xl-6">
                {currentProfilePic ? (
                  <img
                    src={currentProfilePic}
                    className={`${styles.dp_img} pe-2 object-fit-cover`}
                    alt="Profile"
                  />
                ) : (
                  <Image
                    src={ProfilePic}
                    className={`${styles.dp_img} pe-2 object-fit-cover`}
                    alt="Profile"
                  />
                )}
              </div>
              <div className="col-xl-6">
                <div className="row gap-3 gap-xl-0">
                  <div className="col-xl-6 text-center px-1">
                    <p
                      role="button"
                      onClick={handleRemoveClick}
                      className="m-0 d-inline-flex justify-content-between align-items-center"
                    >
                      Remove{' '}
                      <Image
                        src={Close}
                        className="object-fit-cover"
                        alt="Close"
                      />
                    </p>
                  </div>
                  <div className="col-xl-6 text-center px-1">
                    <p
                      role="button"
                      onClick={handleUploadClick}
                      className={`${styles.upload_pic_btn} m-0 d-inline-flex justify-content-between align-items-center`}
                    >
                      Upload new{' '}
                      <Image
                        src={EditIcon}
                        className="object-fit-cover"
                        alt="EditIcon"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </React.Fragment>
  );
};

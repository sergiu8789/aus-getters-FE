import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'; // Import useFormik hook
import styles from './UploadResume.module.css';
import Image from 'next/image';
import UploadImg from '../../../../public/assets/images/upload-documnet.png';
import Closebtn from '../../../../public/assets/images/x_blk_close.svg';

const UploadResume = ({ onShow, onClose, editMode, initialFiles }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    if (editMode && initialFiles) {
      // If in edit mode and there are initial files, set them in the state.
      setSelectedFiles(initialFiles);
    }
  }, [editMode, initialFiles]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const formik = useFormik({
    initialValues: {
      ImageStyle: selectedFiles
    },
    onSubmit: (values) => {
      // Handle the submission of selectedFiles here
      console.log('Selected Files:', values.ImageStyle);
    }
  });

  return (
    <React.Fragment>
      {onShow && (
        <div className={`${styles.registerLayer} modal-backdrop`}></div>
      )}
      <form onSubmit={formik.handleSubmit}>
        {onShow && (
          <div
            className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
          >
            <div
              className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
            >
              <div className={`${styles.add_work_exp} col-12 p-4`}>
                <div className="d-flex justify-content-between">
                  <h6>Upload Resume</h6>
                  <div onClick={() => onClose()}>
                    <Image src={Closebtn} className="" alt="close" />
                  </div>
                </div>
                <div className="row">
                  <div className={`col-12 mb-3 pb-2 h-100`}>
                    <div
                      className={`${styles.img_upload_box} position-relative d-flex justify-content-center align-items-center`}
                    >
                      <input
                        type="file"
                        className="position-absolute start-0 top-0 h-100 opacity-0 w-100"
                        id="file-input"
                        accept="application/pdf"
                        name="ImageStyle"
                        multiple // Allow multiple file uploads
                        onChange={(event) => {
                          handleFileChange(event);
                          formik.setFieldValue(
                            'ImageStyle',
                            event.target.files
                          );
                        }}
                      />
                      {selectedFiles.length > 0 ? (
                        <p>{selectedFiles.length} PDF files selected</p>
                      ) : (
                        <Image src={UploadImg} className="object-fit-contain" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`${styles.cancel_sub_btn} justify-content-center d-flex gap-4`}
                  >
                    <button
                      role="button"
                      className=""
                      onClick={() => onClose()}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </React.Fragment>
  );
};

export default UploadResume;

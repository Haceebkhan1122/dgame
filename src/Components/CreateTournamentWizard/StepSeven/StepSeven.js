import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import WizardButton from "../WizardButton/WizardButton"

import {useDropzone} from 'react-dropzone';
import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import dragImgLogo from "../../../assets/img/dragImgLogo.png";

const thumb = {
  width: 50,
  height: 50,
  position: 'relative',
  top: -30,
  zIndex: 1,
  overflow: 'hidden'
};

// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden'
// };

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const StepSeven = ({nextStep, previousStep, currentStep}) => {

  const [completed, setCompleted] = useState(70);

  useEffect(() => {
    if (currentStep === 7) {
      // setInterval(() => setCompleted(20), 1000);
      renderProgressBar()
    }
  }, [currentStep])

  function renderProgressBar(){
    return(
      <>
        <WizardButton nextStep={nextStep} previousStep={previousStep}  completed={completed} />
      </>
    )
  }

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);
  
    return (
      <>
      <Row>
          <Col md={6} className="p-0">
            <div className="leftWrp">
              <h2 className="secondary_heading">Upload your logo to show on table</h2>

              <div className="dies1_banner for_left">
                <img src={DiesLeft} alt="Dies" />
              </div>
              <div className="dies1_banner for_right">
                <img src={DiesRight} alt="Dies" />
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="rightWrp">
                <div className="content">
                    <Row>
                        <Col md="8" className="m-auto">

                            <div className="logoUploader">
                             <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                <img src={dragImgLogo} alt="dragImgLogo" width={32} className="mb-2" />
                                <h6>Drag your logo here</h6>
                                <p className="m-0">Logo image should be .png of 1024x1024 resolution and maximum of 2 mb for best results <b>Upload from here</b></p>
                              </div>
                            </div>
                          
                            <div className="imgBg logoBgTable">
                              {thumbs}
                            </div>      
                        </Col>
                    </Row>
                </div>
              {renderProgressBar()}
            </div>
          </Col>
        </Row>
       
      </>
    );
  };

  export default StepSeven;
  
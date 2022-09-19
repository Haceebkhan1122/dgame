import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import WizardButton from "../WizardButton/WizardButton";

const StepThree = ({ nextStep, previousStep, currentStep }) => {
  const [completed, setCompleted] = useState(30);

  useEffect(() => {
    if (currentStep === 3) {
      // setInterval(() => setCompleted(20), 1000);
      renderProgressBar();
    }
  }, [currentStep]);

  function renderProgressBar() {
    return (
      <>
        <WizardButton
          nextStep={nextStep}
          previousStep={previousStep}
          completed={completed}
        />
      </>
    );
  }

  const [value, onChange] = useState(new Date());
  return (
    <>
      <Row>
        <Col md={6} className="p-0">
          <div className="leftWrp">
            <h2 className="secondary_heading">Schedule the tournament</h2>

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
                  <div className="counterWrp justify-content-center">
                    <DateTimePicker
                      format="dd MMM, y, h:mm"
                      onChange={onChange}
                      value={value}
                    />
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

export default StepThree;

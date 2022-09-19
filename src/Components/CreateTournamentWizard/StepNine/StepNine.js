import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import WizardButton from "../WizardButton/WizardButton"
import { useNavigate } from "react-router-dom";

import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import evironmentFloorThumb1 from "../../../assets/img/evironmentFloorThumb1.png";
import evironmentFloorThumb2 from "../../../assets/img/evironmentFloorThumb2.png";
import evironmentFloorThumb3 from "../../../assets/img/evironmentFloorThumb3.png";
import evironmentFloorThumb4 from "../../../assets/img/evironmentFloorThumb4.png";
import evironmentFloorImg2 from "../../../assets/img/evironmentFloorImg2.png";

const StepNine = ({ previousStep, currentStep }) => {

  const [completed, setCompleted] = useState(100);

  useEffect(() => {
    if (currentStep === 9) {
      // setInterval(() => setCompleted(20), 1000);
      renderProgressBar()
  
    }
  }, [currentStep])

  let navigate = useNavigate();
  function nextStep() {
    navigate("/game-center");
  }
  function renderProgressBar(){
    return(
      <>
        <WizardButton nextStep={nextStep} previousStep={previousStep}  completed={completed} />
      </>
    )
  }

  const [evironmentFloorRadioData, setEvironmentFloorRadioData] =
    useState(false);
  const [evironmentFloorRadioData2, setEvironmentFloorRadioData2] =
    useState(false);
  const [evironmentFloorRadioData3, setEvironmentFloorRadioData3] =
    useState(false);
  const [evironmentFloorRadioData4, setEvironmentFloorRadioData4] =
    useState(false);

  const evironmentFloorRadio1 = () => {
    setEvironmentFloorRadioData(true);
    setEvironmentFloorRadioData2(false);
    setEvironmentFloorRadioData3(false);
    setEvironmentFloorRadioData4(false);
  };
  const evironmentFloorRadio2 = () => {
    setEvironmentFloorRadioData(false);
    setEvironmentFloorRadioData2(true);
    setEvironmentFloorRadioData3(false);
    setEvironmentFloorRadioData4(false);
  };
  const evironmentFloorRadio3 = () => {
    setEvironmentFloorRadioData(false);
    setEvironmentFloorRadioData2(false);
    setEvironmentFloorRadioData3(true);
    setEvironmentFloorRadioData4(false);
  };
  const evironmentFloorRadio4 = () => {
    setEvironmentFloorRadioData(false);
    setEvironmentFloorRadioData2(false);
    setEvironmentFloorRadioData3(false);
    setEvironmentFloorRadioData4(true);
  };
  return (
    <>
      <Row>
        <Col md={6} className="p-0">
          <div className="leftWrp">
            <h2 className="secondary_heading">Select environment floor </h2>

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
                  {["radio3"].map((type) => (
                    <div key={`${type}`} className="radioWrp1">
                      <Row>
                        <Col>
                          <Form.Check
                            name={`${type}-1`}
                            type={type}
                            id={`${type}-1`}
                          >
                            <input
                              name={`${type}-1`}
                              type="radio"
                              id={`${type}-1`}
                              class="form-check-input"
                              onClick={evironmentFloorRadio1}
                            />
                            <Form.Check.Label
                              className="radioLabel p-0"
                              type={type}
                            >
                              <img src={evironmentFloorThumb1} alt="Dies" />
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>

                        <Col>
                          <Form.Check
                            name={`${type}-1`}
                            type={type}
                            id={`${type}-2`}
                          >
                            <input
                              name={`${type}-1`}
                              type="radio"
                              id={`${type}-2`}
                              class="form-check-input"
                              onClick={evironmentFloorRadio2}
                            />
                            <Form.Check.Label
                              className="radioLabel p-0"
                              type={type}
                            >
                              <img src={evironmentFloorThumb2} alt="Dies" />
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>

                        <Col>
                          <Form.Check
                            name={`${type}-1`}
                            type={type}
                            id={`${type}-3`}
                          >
                            <input
                              name={`${type}-1`}
                              type="radio"
                              id={`${type}-3`}
                              class="form-check-input"
                              onClick={evironmentFloorRadio3}
                            />
                            <Form.Check.Label
                              className="radioLabel p-0"
                              type={type}
                            >
                              <img src={evironmentFloorThumb3} alt="Dies" />
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>

                        <Col>
                          <Form.Check
                            name={`${type}-1`}
                            type={type}
                            id={`${type}-4`}
                          >
                            <input
                              name={`${type}-1`}
                              type="radio"
                              id={`${type}-4`}
                              class="form-check-input"
                              onClick={evironmentFloorRadio4}
                            />
                            <Form.Check.Label
                              className="radioLabel p-0"
                              type={type}
                            >
                              <img src={evironmentFloorThumb4} alt="Dies" />
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <div className="imgBg evironmentFloorBg p-0">
                    {evironmentFloorRadioData ? (
                      <img
                        src={evironmentFloorThumb1}
                        alt="table texture img 1"
                      />
                    ) : null}
                    {evironmentFloorRadioData2 ? (
                      <img
                        src={evironmentFloorImg2}
                        alt="table texture img 2"
                      />
                    ) : null}
                    {evironmentFloorRadioData3 ? (
                      <img
                        src={evironmentFloorThumb3}
                        alt="table texture img 3"
                      />
                    ) : null}
                    {evironmentFloorRadioData4 ? (
                      <img
                        src={evironmentFloorThumb4}
                        alt="table texture img 4"
                      />
                    ) : null}
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

export default StepNine;

import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import WizardButton from "../WizardButton/WizardButton"

import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import table_texture_img_1 from "../../../assets/img/table_texture_img_1.png";
import table_texture_img_2 from "../../../assets/img/table_texture_img_2.png";
import table_texture_img_3 from "../../../assets/img/table_texture_img_3.png";
import table_texture_img_4 from "../../../assets/img/table_texture_img_4.png";

const StepSix = ({ nextStep, previousStep, currentStep }) => {
  const [completed, setCompleted] = useState(60);

  useEffect(() => {
    if (currentStep === 6) {
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

  const [tableTextureRadioData, setTableTextureRadioData] = useState(false);
  const [tableTextureRadioData2, setTableTextureRadioData2] = useState(false);
  const [tableTextureRadioData3, setTableTextureRadioData3] = useState(false);
  const [tableTextureRadioData4, setTableTextureRadioData4] = useState(false);

  const tableTextureRadio1 = () => {
    setTableTextureRadioData(true);
    setTableTextureRadioData2(false);
    setTableTextureRadioData3(false);
    setTableTextureRadioData4(false);
  };
  const tableTextureRadio2 = () => {
    setTableTextureRadioData(false);
    setTableTextureRadioData2(true);
    setTableTextureRadioData3(false);
    setTableTextureRadioData4(false);
  };
  const tableTextureRadio3 = () => {
    setTableTextureRadioData(false);
    setTableTextureRadioData2(false);
    setTableTextureRadioData3(true);
    setTableTextureRadioData4(false);
  };
  const tableTextureRadio4 = () => {
    setTableTextureRadioData(false);
    setTableTextureRadioData2(false);
    setTableTextureRadioData3(false);
    setTableTextureRadioData4(true);
  };
  return (
    <>
      <Row>
        <Col md={6} className="p-0">
          <div className="leftWrp">
            <h2 className="secondary_heading">Select table texture</h2>

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
                  {["radio1"].map((type) => (
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
                              onClick={tableTextureRadio1}
                            />
                            <Form.Check.Label
                              className="radioLabel"
                              type={type}
                            >
                              <img src={table_texture_img_1} alt="Dies" />
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
                              onClick={tableTextureRadio2}
                            />
                            <Form.Check.Label
                              className="radioLabel"
                              type={type}
                            >
                              <img src={table_texture_img_2} alt="Dies" />
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
                              onClick={tableTextureRadio3}
                            />
                            <Form.Check.Label
                              className="radioLabel"
                              type={type}
                            >
                              <img src={table_texture_img_3} alt="Dies" />
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
                              onClick={tableTextureRadio4}
                            />
                            <Form.Check.Label
                              className="radioLabel"
                              type={type}
                            >
                              <img src={table_texture_img_4} alt="Dies" />
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <div className="imgBg">
                    {tableTextureRadioData ? (
                      <img
                        src={table_texture_img_1}
                        alt="table texture img 1"
                      />
                    ) : null}
                    {tableTextureRadioData2 ? (
                      <img
                        src={table_texture_img_2}
                        alt="table texture img 2"
                      />
                    ) : null}
                    {tableTextureRadioData3 ? (
                      <img
                        src={table_texture_img_3}
                        alt="table texture img 3"
                      />
                    ) : null}
                    {tableTextureRadioData4 ? (
                      <img
                        src={table_texture_img_4}
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

export default StepSix;

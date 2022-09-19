import React, {useState, useEffect} from "react";
import {Row, Col, Form} from "react-bootstrap";
import WizardButton from "../WizardButton/WizardButton"

import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import RulesModal from "../../Modals/RulesModal/RulesModal";

const StepFive = ({nextStep, previousStep, currentStep}) => {
const [rulesModalShow, setRulesModalShow] = useState(false);


    const [completed, setCompleted] = useState(50);

    useEffect(() => {
      if (currentStep === 5) {
        // setInterval(() => setCompleted(20), 1000);
        renderProgressBar()
      }
    }, [currentStep])


    const rulesModalHandler = () => {
      setRulesModalShow(true)
    }

    function renderProgressBar(){
      return(
        <>
          <WizardButton nextStep={nextStep} previousStep={previousStep}  completed={completed} />
        </>
      )
    }

    return (
      <>
      <Row>
      <RulesModal
        show={rulesModalShow}
        onHide={() => setRulesModalShow(false)}
        setRulesModalShow={setRulesModalShow}
      />
          <Col md={6} className="p-0">
            <div className="leftWrp">
              <h2 className="secondary_heading">Select domino rules</h2>

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
                          {['radio'].map((type) => (
                            <div key={`${type}`} className="radioWrp d-flex flex-column align-items-center">
                              <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-1`}
                                className="mb-3">
                                  <input name={`${type}-1`} type="radio" id={`${type}-1`} class="form-check-input"/>
                                  <Form.Check.Label className="radioLabel" type={type}>
                                    <b className='textWhite'>Rule 1</b>
                                    You can have maximum of TBD rounds in a single match. You can have maximum of TBD rounds in a single match <a href="javascript:;" className="readMore" onClick={rulesModalHandler}>Read More</a>
                                  </Form.Check.Label>
                                </Form.Check>

                              <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-2`}
                                className="mb-3">
                                  <input name={`${type}-1`} type="radio" id={`${type}-2`} class="form-check-input" />
                                  <Form.Check.Label className="radioLabel" type={type}>
                                    <b className='textWhite'>Rule 2</b>
                                    You can have maximum of TBD rounds in a single match. You can have maximum of TBD rounds in a single match <a href="javascript:;" className="readMore">Read More</a>
                                  </Form.Check.Label>
                                </Form.Check>

                                <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-3`}>
                                  <input name={`${type}-1`} type="radio" id={`${type}-3`} class="form-check-input" />
                                  <Form.Check.Label className="radioLabel" type={type}>
                                    <b className='textWhite'>Rule 3</b>
                                    You can have maximum of TBD rounds in a single match. You can have maximum of TBD rounds in a single match <a href="javascript:;" className="readMore">Read More</a>
                                  </Form.Check.Label>
                                </Form.Check>

                            </div>
                          ))}
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

  export default StepFive;
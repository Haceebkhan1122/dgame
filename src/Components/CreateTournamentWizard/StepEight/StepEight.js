import React, {useState, useEffect} from "react";
import {Row, Col, Form} from "react-bootstrap";
import WizardButton from "../WizardButton/WizardButton"

import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import tileColorImg1 from "../../../assets/img/tileColorImg1.png";
import tileColorImg2 from "../../../assets/img/tileColorImg2.png";
import tileColorImg3 from "../../../assets/img/tileColorImg3.png";
import tileColorImg4 from "../../../assets/img/tileColorImg4.png";

const StepEight = ({nextStep, previousStep, currentStep}) => {

  const [completed, setCompleted] = useState(80);

  useEffect(() => {
    if (currentStep === 8) {
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

const [tileColorRadioData, setTileColorRadioData] = useState(false);
const [tileColorRadioData2, setTileColorRadioData2] = useState(false);
const [tileColorRadioData3, setTileColorRadioData3] = useState(false);
const [tileColorRadioData4, setTileColorRadioData4] = useState(false);


const tileColorRadio1 = () => {
  setTileColorRadioData(true)
  setTileColorRadioData2(false)
  setTileColorRadioData3(false)
  setTileColorRadioData4(false)

}
const tileColorRadio2 = () => {
  setTileColorRadioData(false)
  setTileColorRadioData2(true)
  setTileColorRadioData3(false)
  setTileColorRadioData4(false)
}
const tileColorRadio3= () => {
  setTileColorRadioData(false)
  setTileColorRadioData2(false)
  setTileColorRadioData3(true)
  setTileColorRadioData4(false)
}
const tileColorRadio4= () => {
  setTileColorRadioData(false)
  setTileColorRadioData2(false)
  setTileColorRadioData3(false)
  setTileColorRadioData4(true)
}
    return (
      <>
      <Row>
          <Col md={6} className="p-0">
            <div className="leftWrp">
              <h2 className="secondary_heading">Select domino tile color</h2>

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
                          {['radio2'].map((type) => (
                            <div key={`${type}`} className="radioWrp1">
                              <Row>
                                <Col>
                                <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-1`}>
                                  <input name={`${type}-1`} type="radio" id={`${type}-1`} class="form-check-input" onClick={tileColorRadio1} />
                                  <Form.Check.Label className="radioLabel" type={type}>
                                  <img src={tileColorImg1} alt="Dies" />
                                  </Form.Check.Label>
                                </Form.Check>
                                </Col>

                                <Col>
                                <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-2`}>
                                  <input name={`${type}-1`} type="radio" id={`${type}-2`} class="form-check-input"  onClick={tileColorRadio2}/>
                                  <Form.Check.Label className="radioLabel" type={type}>
                                  <img src={tileColorImg2} alt="Dies" />
                                  </Form.Check.Label>                            
                                </Form.Check>
                                </Col>

                                <Col>
                                <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-3`}>
                                  <input name={`${type}-1`} type="radio" id={`${type}-3`} class="form-check-input" onClick={tileColorRadio3}/>
                                  <Form.Check.Label className="radioLabel" type={type}>
                                  <img src={tileColorImg3} alt="Dies" />
                                  </Form.Check.Label>
                                </Form.Check>
                                </Col>

                                <Col>
                                <Form.Check
                                name={`${type}-1`}
                                type={type}
                                id={`${type}-4`}>
                                  <input name={`${type}-1`} type="radio" id={`${type}-4`} class="form-check-input" onClick={tileColorRadio4}/>
                                  <Form.Check.Label className="radioLabel" type={type}>
                                  <img src={tileColorImg4} alt="Dies" />
                                  </Form.Check.Label>
                                </Form.Check>
                                </Col>
                              </Row>

                            </div>
                            
                          ))}
                           <div className="imgBg tileColorTableBg">
                              {tileColorRadioData ? <img src={tileColorImg1} alt="table texture img 1" /> : null }
                              {tileColorRadioData2 ? <img src={tileColorImg2} alt="table texture img 2" /> : null }
                              {tileColorRadioData3 ? <img src={tileColorImg3} alt="table texture img 3" /> : null }
                              {tileColorRadioData4 ? <img src={tileColorImg4} alt="table texture img 4" /> : null }
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

  export default StepEight;
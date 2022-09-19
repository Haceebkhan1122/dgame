import React, {useState, useEffect} from "react";
import {Row, Col} from "react-bootstrap";
import WizardButton from "../WizardButton/WizardButton"

import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import CounterPlus from "../../../assets/img/plus.svg";
import CounterMinus from "../../../assets/img/minus.svg";
import price_icon from "../../../assets/img/price_icon.png";


const StepFour = ({nextStep, previousStep, currentStep}) => {

    let [prizePoolcount, prizePoolSetCount] = useState(0);
    let [entryFeeCount, entryFeeSetCount] = useState(0);
    const prizePoolCounterdecrement = () => {
        prizePoolSetCount(prizePoolcount - 1);

        if(prizePoolcount <= 0) {
          prizePoolSetCount(prizePoolcount = 0)
        }
    }
    const entryFeeCounterDecrement = () => {
      entryFeeSetCount(entryFeeCount - 1);
      if(entryFeeCount <= 0) {
        entryFeeSetCount(entryFeeCount = 0)
      }
    }

    const [completed, setCompleted] = useState(40);

    useEffect(() => {
      if (currentStep === 4) {
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

    return (
      <>
      <Row>
          <Col md={6} className="p-0">
            <div className="leftWrp">
              <h2 className="secondary_heading">Set entry fee and decide tournament prize pool</h2>

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
                            <p className="primary_paragraph m-0 mb-2 entryFee">Entry Fee</p>
                            <div className="counterWrp mb-4">
                              <button className="btn counterBtn" onClick={entryFeeCounterDecrement}>
                                  <img src={CounterMinus} alt="CounterMinus" />
                              </button>
                              <div className="d-flex align-align-items-center">
                                <img src={price_icon} className="me-2" alt="Price Icon" />
                                <h6>{entryFeeCount}</h6>
                              </div>
                                  
                              <button className="btn counterBtn" onClick={() => entryFeeSetCount(entryFeeCount + 1)}>
                                  <img src={CounterPlus} alt="CounterPlus" />
                              </button>
                            </div>

                            <p className="primary_paragraph m-0 mb-2 entryFee">Prize Pool</p>
                            <div className="counterWrp">
                              <button className="btn counterBtn" onClick={prizePoolCounterdecrement}>
                                  <img src={CounterMinus} alt="CounterMinus" />
                              </button>
                              <div className="d-flex align-align-items-center">
                                <img src={price_icon} className="me-2" alt="Price Icon" />
                                <h6>{prizePoolcount}</h6>
                              </div>
                              <button className="btn counterBtn" onClick={() => prizePoolSetCount(prizePoolcount + 1)}>
                                  <img src={CounterPlus} alt="CounterPlus" />
                              </button>
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

  export default StepFour;
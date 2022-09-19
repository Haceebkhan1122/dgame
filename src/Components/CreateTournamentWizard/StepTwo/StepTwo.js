import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import CounterPlus from "../../../assets/img/plus.svg";
import CounterMinus from "../../../assets/img/minus.svg";

import WizardButton from "../WizardButton/WizardButton"


const StepTwo = ({nextStep, previousStep, currentStep}) => {
  
    const [completed, setCompleted] = useState(20);

    useEffect(() => {
      if (currentStep === 2) {
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

    let [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count - 1)

        if(count <= 0) {
            setCount(count = 0)
        }
    }

    return (
      <>
      <Row>
          <Col md={6} className="p-0">
            <div className="leftWrp">
              <h2 className="secondary_heading">Number of players who can participate </h2>

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
                            <div className="counterWrp">
                            <button className="btn counterBtn" onClick={decrement}>
                                <img src={CounterMinus} alt="CounterMinus" />
                            </button>
                                <h6>{count}</h6>
                            <button className="btn counterBtn" onClick={() => setCount(count + 1)}>
                                <img src={CounterPlus} alt="CounterPlus" />
                            </button>
                            </div>
                            <p className="primary_paragraph">You can have maximum of 64 players in a single tournament</p>
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

  export default StepTwo;
import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import DiesLeft from "../../../assets/img/dies_left.png";
import DiesRight from "../../../assets/img/dies_right.png";
import { stepOne } from "../../../store/create-tournament/actions/CreateTournamentAction";
import { useDispatch } from "react-redux";
import WizardButton from "../WizardButton/WizardButton"

const StepOne = ({nextStep, currentStep}) => {    

  const [completed, setCompleted] = useState(10);

    useEffect(() => {
      if (currentStep === 1) {
        // setInterval(() => setCompleted(10), 1000);
        renderProgressBar();
      }
    }, [currentStep])

    function renderProgressBar(){
      return(
        <>
          <WizardButton nextStep={nextStep} completed={completed} />
        </>
      )
    }

  const dispatch = useDispatch();
  const [tournamentName, setTournamentName] = useState();

  dispatch(
    stepOne({
      type: "CREATE-TOURNAMENT",
      payload: {
        tournamentName,
      },
    })
  );

  return (
    <>
      <Row>
        <Col md={6} className="p-0">
          <div className="leftWrp">
            <h2 className="secondary_heading">Name your tournament</h2>

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
                  <Form.Control
                    type="text"
                    className="text"
                    placeholder="Domino show down"
                    name={tournamentName}
                    onChange={(e) => setTournamentName(e.target.value)}
                  />
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

export default StepOne;

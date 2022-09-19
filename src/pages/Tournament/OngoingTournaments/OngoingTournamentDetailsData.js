import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import PriceIcon from "../../../assets/img/price_icon.png";
import TournamentEnterModal from "../../../Components/Modals/TournamentEnter/TournamentEnterModal";

const OngoingTournamentDetailsData = (props) => {
  const [modalShowForgetPassword, setModalShowForgetPassword] = useState(false);
  const handleClick = () => {
    setModalShowForgetPassword(true);
  };
  const { name, rules, tournamentType, entryFee, prizePool, players } =
    props.global;
  const index = props.index;

  useEffect(() => {
    if (modalShowForgetPassword) {
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-hidden");
    }
  }, [modalShowForgetPassword]);
  return (
    <tr>
      <td className="py-0" colSpan={2}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{name}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{rules}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{tournamentType}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6>{entryFee}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6>{prizePool}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex">
          <div className="profile_with_text">
            <h6>{players}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <Button
              variant="btn btn-primary hk_btn_with_bg_theme"
              onClick={handleClick}
            >
              ENTER
            </Button>
          </div>
        </div>
      </td>
      <TournamentEnterModal
        show={modalShowForgetPassword}
        onHide={() => setModalShowForgetPassword(false)}
        setModalShowForgetPasswords={setModalShowForgetPassword}
      />
    </tr>
  );
};

export default OngoingTournamentDetailsData;

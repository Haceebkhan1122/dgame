import React from "react";
import Button from "react-bootstrap/Button";

import PriceIcon from "../../../assets/img/price_icon.png";

const PastTournamentDetailsData = (props) => {
  const { name, rules, tournamentType, entryFee, prizePool, players } =
    props.global;
  const index = props.index;
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
            <Button variant="btn btn-primary hk_btn_with_bg_theme">
              ENTER
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default PastTournamentDetailsData;

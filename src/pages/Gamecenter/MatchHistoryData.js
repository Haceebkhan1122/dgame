import React from "react";
import { useNavigate } from "react-router-dom";

import PriceIcon from "../../assets/img/price_icon.png";
import Dropdown from "react-bootstrap/Dropdown";

const MatchHistoryData = (props) => {
  let navigate = useNavigate();
  const goEditTour = () => {
    navigate("/edit-tournament", { replace: true });
  };
  const { name, rules, winning, earning, players } = props.global;
  const index = props.index;
  return (
    <tr>
      <td colSpan={2}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <label>{name}</label>
          </div>
        </div>
      </td>
      <td>
        <div className="results">
          <span>{rules}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6 className="mb-0">{winning}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6 className="mb-0">{earning}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6 style={{ paddingTop: "4px" }} className="mb-0">
              {players}
            </h6>
          </div>
        </div>
      </td>
      <td colSpan={4}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text dropdown_for_action">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={goEditTour}>Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MatchHistoryData;

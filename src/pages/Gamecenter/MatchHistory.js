import React from "react";
import User from "../../assets/img/user.png";
import MatchHistoryData from "./MatchHistoryData";

export const globalData = [
  {
    id: 1,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    winning: 250,
    earning: 200,
    players: "2/8",
  },
  {
    id: 2,
    name: "Domino master’s tournament",
    rules: "Rule 2",
    winning: 250,
    earning: 200,
    players: "2/8",
  },
  {
    id: 3,
    name: "Domino master’s tournament",
    rules: "Rule 3",
    winning: 250,
    earning: 200,
    players: "2/8",
  },
  {
    id: 4,
    name: "Domino master’s tournament",
    rules: "Rule 4",
    winning: 250,
    earning: 200,
    players: "2/8",
  },
];

const MatchHistory = () => {
  return (
    <>
      {globalData.map((global, index) => (
        <MatchHistoryData key={global.id} global={global} index={index} />
      ))}
    </>
  );
};

export default MatchHistory;

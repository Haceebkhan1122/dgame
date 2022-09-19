import React from "react";
import User from "../../../assets/img/user.png";
import LiveTournamentDetailsData from "./LiveTournamentDetailsData";

export const globalData = [
  {
    id: 1,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 2,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 3,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 4,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 5,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 6,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 7,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 8,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 9,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
  {
    id: 10,
    name: "Domino master’s tournament",
    rules: "Rule 1",
    tournamentType: "Game Center",
    entryFee: 250,
    prizePool: 200,
    players: "2/8",
  },
];

const LiveTournamentDetails = () => {
  return (
    <>
      {globalData.map((global, index) => (
        <LiveTournamentDetailsData
          key={global.id}
          global={global}
          index={index}
        />
      ))}
    </>
  );
};

export default LiveTournamentDetails;

export const stepOne = (tournamentName) => {
  return {
    type: "CREATE-TOURNAMENT-NAME",
    payload: {
      id: new Date().getTime(),
      tournamentName,
    },
  };
};

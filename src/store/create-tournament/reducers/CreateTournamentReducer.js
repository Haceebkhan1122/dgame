const initialState = {
  tournamentEntry: [],
};

const CreateTournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE-TOURNAMENT-NAME":
      return {
        ...state,
        tournamentEntry: action.payload,
      };
    default:
      return { ...state };
  }
};

export default CreateTournamentReducer;

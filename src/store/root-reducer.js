import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers/authReducer";
import { uiReducer } from "./ui/reducers/uiReducer";
import { nftReducer } from "./nft/reducers/nftReducer";
import { metaMaskReducer } from "./metamask/reducers/metaMaskReducer";
import CreateTournamentReducer from "./create-tournament/reducers/CreateTournamentReducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  selectedNft: nftReducer,
  buyNftModal: nftReducer,
  rentNftDirect: nftReducer,
  createTournament: CreateTournamentReducer,
  // metaMask: metaMaskReducer,
});

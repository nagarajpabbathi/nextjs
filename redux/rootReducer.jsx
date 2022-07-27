import { combineReducers } from "redux";
import userReducer from "./users/user.reducer";
import settingsReducer from "./settings/settings.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
});

export default rootReducer;

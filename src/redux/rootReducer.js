import { combineReducers } from "redux";
import InfrastructureReducers from "./index";

const rootReducer = combineReducers({
    infraValue: InfrastructureReducers,
})

export default rootReducer;
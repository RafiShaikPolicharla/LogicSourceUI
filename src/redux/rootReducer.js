import { combineReducers } from "redux";
import AppReducers from "./index";
import BenchamrkReducers from "./Benchmark"
const rootReducer = combineReducers({
    appValue: AppReducers,
    benchmarkValue: BenchamrkReducers
})

export default rootReducer;
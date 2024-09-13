import { combineReducers } from "redux";
import AppReducers from "./index";
import BenchamrkReducers from "./Benchmark"
import DataSteward from "./DataSteward";
import CostDrivers from "./CostDrivers";
const rootReducer = combineReducers({
    appValue: AppReducers,
    benchmarkValue: BenchamrkReducers,
    dataStewardValue: DataSteward,
    costDriversValue: CostDrivers,
})

export default rootReducer;
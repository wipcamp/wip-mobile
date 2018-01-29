import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CatagoryReducer from '../ducks/CatagoryProblem'
import FilterReducer from '../ducks/Filter'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CatagoryReducer,
    FilterReducer
})

export default combine
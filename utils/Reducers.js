import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CatagoryReducer from '../ducks/CatagoryProblem'
import FilerReducer from '../ducks/Filter'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CatagoryReducer,
    FilerReducer
})

export default combine
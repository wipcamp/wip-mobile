import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CategoryReducer from '../ducks/CategoryProblem'
import TimetableReducer from '../ducks/Timetable'
import DateReducer from '../ducks/Date'
import AnnounceReducer from '../ducks/Announce'
import PriorityReducer from '../ducks/Priority'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CategoryReducer,
    TimetableReducer,
    DateReducer,
    AnnounceReducer,
    PriorityReducer
})

export default combine
import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CategoryReducer from '../ducks/CategoryProblem'
import TimetableReducer from '../ducks/Timetable'
import PriorityReducer from '../ducks/Priority'
import NotificationReducer from '../ducks/Notification'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CategoryReducer,
    TimetableReducer,
    PriorityReducer,
    NotificationReducer
})

export default combine
import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './users'
import workshopsReducer from './workshops'
import committeesReducer from './committees'
import constantsReducer from './constants'
import studentsReducer from './students'
import membersReducer from './members'



 const store= configureStore({reducer:{
users:usersReducer,
committees:committeesReducer,
workshops:workshopsReducer,
constants:constantsReducer,
students:studentsReducer,
members:membersReducer
}})
export default store
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../store/authSlice'
const store = configureStore({
    reducer: {authReducer}
    //Todo Add the Post Slice For to optimise the code
})


export default store;
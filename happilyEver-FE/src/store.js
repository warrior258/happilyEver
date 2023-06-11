import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'tabs',
    initialState: {
        value: 1
    },
    reducers: {
        second: state => {
        state.value = 2
        },
        third: state => {
        state.value = 3
        }
    }
})

const userSlice = createSlice({
    name: 'info',
    initialState: {
        userName: "john",
        userAge: "18"
    },
    reducers: {
        getName: (state, action) => {
            state.userName =  action.payload;
        },
        getAge: (state, action) => {
            state.userAge = action.payload
        }
    }
})

export const { second, third } = counterSlice.actions
export const { getName, getAge } = userSlice.actions


export default configureStore({
    reducer: {
        tabs: counterSlice.reducer,
        info: userSlice.reducer
    }
})
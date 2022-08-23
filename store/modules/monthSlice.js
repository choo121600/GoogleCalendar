import { createSlice } from "@reduxjs/toolkit";

const today = new Date()

const initialState = {
    year: today.getFullYear(),
    month: today.getMonth() + 1
}

export const monthSlice = createSlice({
    name: 'monthCalendar',
    initialState,
    reducers: {
        todayMonth(state, action) {
            state.year = today.getFullYear()
            state.month = today.getMonth() + 1
        },
        prevMonth(state, action) {
            if (state.month - 1 <= 0) {
                state.year--
                state.month = 12
            } else {
                state.month--
            }
        },
        nextMonth(state, action) {
            if (state.month < 12) {
                state.month++
            } else {
                state.year++
                state.month = 1
            }
        }
    }
})


export const { todayMonth, prevMonth, nextMonth } = monthSlice.actions

export default monthSlice.reducer
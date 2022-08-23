import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { monthSlice } from "./modules/MonthSlice";

const makeStore = () => 
    configureStore({
        reducer: {
            [monthSlice.name]: monthSlice.reducer
        },
        devTools: true
    })


export const wrapper = createWrapper(makeStore)
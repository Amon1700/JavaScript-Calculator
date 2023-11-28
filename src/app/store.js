import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "../features/displaySlice"

export const store = configureStore({
    reducer : displayReducer
}) 
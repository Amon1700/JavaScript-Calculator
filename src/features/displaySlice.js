import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display : "0",
    character : ""
}

export const displaySlice = createSlice({
    name : "display",
    initialState,
    reducers : {
        pushDisplay : (state, action) => {
            if(state.display !== "0") {
                state.display = state.display+action.payload
            } else {
                state.display = action.payload
            }
        },
        popDisplay : (state) => {
            state.display = state.display.slice(0,-1)
        },
        clearDisplay : (state) => {
            state.display = "0"
        },
        ansDisplay : (state, action) => {
            state.display = action.payload
        },
        setcharacter(state, action) {
            state.character = action.payload
        }
    }
})

export const {pushDisplay, popDisplay, clearDisplay, ansDisplay, setcharacter} = displaySlice.actions

export default displaySlice.reducer
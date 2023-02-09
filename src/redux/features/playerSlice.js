import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentState: [],
    activeSong: [],
    isPlaying: false,
}

const playerSlice = createSlice(
    {
        name:'player',
        initialState,
        reducers:{
            setActivesong(state,action){
                
            }
        }
    }
)
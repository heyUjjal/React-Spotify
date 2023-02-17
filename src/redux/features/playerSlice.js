import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentsongs: [],
    activeSong: {},
    isPlaying: false,
    currentIndex:0,
}

const playerSlice = createSlice(
    {
        name:'player',
        initialState,
        reducers:{
            setActivesong(state,action){
                  state.activeSong = action.payload?.song;
                  if(action.payload?.data?.songs){
                    state.currentsongs = action.payload?.data?.songs; 
                  }
                  state.currentIndex = action.payload.index;
                
            }
        }
    }
)

export const {setActivesong} = playerSlice.actions;

export default playerSlice.reducer;
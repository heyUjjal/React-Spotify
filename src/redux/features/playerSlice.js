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
                  state.activeSong = action.payload?.data;
                  if(action.payload?.currentSongs?.data?.songs){
                    state.currentsongs = action.payload?.currentsongs?.data?.songs; 
                  }
                state.currentIndex = action.payload.index;
                  
                
            },
            playPause(state,action){
                state.isPlaying = action?.payload;
            }
        }
    }
)

export const {setActivesong} = playerSlice.actions;
export const {playPause} = playerSlice.actions;

export default playerSlice.reducer;
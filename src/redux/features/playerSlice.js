import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentsongs: [],
    activeSong: {},
    isPlaying: false,
    currentIndex:0,
    isActive:false,
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
                state.isActive = true;
                  
                
            },
            playPause(state,action){
                state.isPlaying = action?.payload;
            },
            nextSong(state, action){
                
            },
            prevSong(state, action){
                
            }
        }
    }
)

export const {setActivesong} = playerSlice.actions;
export const {playPause} = playerSlice.actions;
export const {nextSong} = playerSlice.actions;
export const {prevSong} = playerSlice.actions;

export default playerSlice.reducer;
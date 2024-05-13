import { configureStore, createSlice } from '@reduxjs/toolkit'

let userLocation = createSlice({
    name:'userLocation',
    initialState: {},
    reducers : {
        uploadLocation(state, action){
            state.lat = action.payload[0];
            state.lng = action.payload[1];
        }
    }
}) 

export let { uploadLocation } = userLocation.actions;

let movingPath = createSlice({
  name:'movingPath',
  initialState : [],
  reducers : {
    uploadPath(state, action){
      return action.payload 
    }
  }
})

export let { uploadPath } =  movingPath.actions;

let nowMode = createSlice({
  name:'nowMode',
  initialState : 0,
  reducers : {
    updateMode(state, action){
      return action.payload
    }
  }
})

export let { updateMode } = nowMode.actions;

export default configureStore({
  reducer: { 
    userLocation : userLocation.reducer,
    movingPath : movingPath.reducer,
    nowMode : nowMode.reducer,
  }
}) 
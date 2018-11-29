import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';
// import changeVideo from '../actions/currentVideo.js';
// import changeVideoList from '../actions/videoList.js';

let videoList = videoListReducer; // this is super jank
let currentVideo = currentVideoReducer;

const rootReducer = combineReducers({
  currentVideo,
  videoList
});



// const initialState = {
//   videoList: []
// };

// var rootReducer = (state, action) => {
//   // changeVideo,
//   // changeVideoList
//   return {};
// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;

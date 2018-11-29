import Redux from 'redux';
import changeVideoList from '../actions/videoList.js';

var videoListReducer = (state = [], action) => { // does state need a default here??

  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return [];
};

export default videoListReducer;

import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// this should be the file where we have our state

var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  // input: string (query)

  //   return


  // output: function that has dispatch
  return dispatch => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, items => {
      dispatch(changeVideo(items[0]));
      dispatch(changeVideoList(items));
    });
  };
};

export default handleVideoSearch;

import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import VideoPlayer from '../components/VideoPlayer.js';


// var VideoListContainer = (props) => {
//   return (
//     <VideoList videoList={props.videoList} />
//   );
// };

var mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};


// var mapDispatchToProps = function (dispatch) {
//   asdfs
// }

var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }
});

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;




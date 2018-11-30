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
    video: state.currentVideo
  };
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

export default VideoPlayerContainer;




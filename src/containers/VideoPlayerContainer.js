import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import currentVideoReducer from '../reducers/currentVideo.js';

var VideoPlayerContainer = () => { };

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapDispatchToProps = {
  currentVideoReducer
};

export default VideoPlayerContainer;// connect(mapStateToProps, mapDispatchToProps VideoPlayerContainer;

import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import currentVideoReducer from '../reducers/currentVideo.js';

var VideoPlayerContainer = () => {

  // aeoif = {
  //   <div the video player={props.video}>
  //   </div>
  // }


  const mapStateToProps = state => {
    return {
      video: video
    };
  };

};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


export default VideoPlayerContainer;// connect(mapStateToProps, mapDispatchToProps VideoPlayerContainer;

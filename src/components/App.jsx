import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVid: exampleVideoData[0]
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.search = this.search.bind(this);
  }

  clickHandler(video) {
    this.setState({
      currentVid: video
    }); 
  }
  
  search(text) {
    console.log(text);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.search}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
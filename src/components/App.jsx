import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVid: exampleVideoData[0],
      input: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  handleSubmit() {
    this.search(this.state.input)
  }

  componentDidMount(){
    this.search()
  }

  clickHandler(video) {
    this.setState({
      currentVid: video
    }); 
  }
  
  search(text){
    var options = {
      key: YOUTUBE_API_KEY,
      query: text,
      max: 5
    }
    this.props.searchYouTube(options, (data) =>
    this.setState({
      videos: data,
      currentVid: data[0]
     })
    )
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
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
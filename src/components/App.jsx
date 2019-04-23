import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: props.exampleVideoData,
      currentVid: props.exampleVideoData[0]
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (video) {
    this.setState({
      currentVid : video
    }) 
  }

  render(){
    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
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
    )
  }
}

export default App;


  // var App = (props) => (
  //   <div>
  //     <nav className="navbar">
  //       <div className="col-md-6 offset-md-3">
  //         <Search />
  //       </div>
  //     </nav>
  //     <div className="row">
  //       <div className="col-md-7">
  //       <VideoPlayer video={props.exampleVideoData[0]}/>
  //       </div>
  //       <div className="col-md-5">
  //         <VideoList videos={props.exampleVideoData}/>
  //       </div>
  //     </div>
  //   </div>
  // );
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope
  // `var` declarations will only exist globally where explicitly defined
  // export default App;

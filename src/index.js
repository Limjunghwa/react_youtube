import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY="AIzaSyD-Idpvv6mPXEqz1dAo5XxYp2pu3mqEvV4";

//create component
class App extends Component{
  constructor(props){
    super(props);
    this.state ={videos:[]};//비디오라는 배열 초기화
    YTSearch({key:API_KEY,term : 'surfboards'},(videos) => {
      this.setState({videos}); //key 와 value가 같으면 하나로 줄여서 작성 가능
      //this.setState({videos : videos});
    });

  }

  render(){
    return(
      <div>
        <SearchBar/>
      </div>
    );
  }
}


ReactDOM.render(<App />,document.querySelector('.container'));

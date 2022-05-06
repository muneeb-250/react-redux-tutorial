import React,{Component} from 'react'
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
class Home extends Component {
    state = { images: [] }
    onSearchSubmit = async (entry) => {
      const response = await axios.get(`https://pixabay.com/api/?key=23414183-1188977a42029ae5972395d90&q=${entry}&image_type=photo&pretty=true`)
      this.setState({ images: response.data.hits })
      // console.log(this.state);
    }

    render(){
        return(
            <div className="ui container" style={{ marginTop: '30px' }}>
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            <h2 className='ui one column center aligned  page grid segment inverted blue'>We have got {this.state.images.length} images</h2>
            <div className="ui segment three column grid">
            <ImageList images={this.state.images} />
            </div>
          </div>
        )
    }
    
}

export default Home;
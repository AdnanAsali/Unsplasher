import React from 'react';
import SearchBar from './SearchBar';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component 
{
    state = { images: [] };

    onSearchSubmit = async (term) =>
    {
        // This Block of code will able to make a request to the unsplash API using AXIOS
        const response = await unsplash.get('/search/photos' , {
            params: { query: term, per_page: 40 },
        });

        this.setState({ images: response.data.results });
    }

    render()
    {
        return(
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <h4>Found images : {this.state.images.length} </h4>

            <ImageList images={this.state.images} />
        </div>
        );
    }
}

export default App;
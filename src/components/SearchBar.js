import React from 'react';

class SearchBar extends React.Component
{

    state = {term: ''};
    // onInputChange(event)
    // {
    //     console.log(event.target.value);
    // }

    onInputClicked(event)
    {
        console.log("clicked");
    }


    onFormSubmit = event =>
    {
        event.preventDefault(); 
        // console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    }



    render()
    {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onClick={this.onInputClicked} 
                        onChange={(e) => this.setState({term: e.target.value})} //identical to the syntax before
                    />
                </div>
            </form>
        </div>
        );
    }
}


export default SearchBar;

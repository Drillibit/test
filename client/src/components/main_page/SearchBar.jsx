import React, { Component } from 'react';
import '../../styles/search_bar.css'; 
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            request: ''
        }
    }
    onRequestChange = (e) => {
        const request = e.target.value;
        this.setState({
            request
        })
    };

    render() {
        return (
            <form className="search" action="">
                <input
                    className="search_field" 
                    type="text"
                    onChange={this.onRequestChange}
                    value={this.state.request}
                />
                <button className="btn_search">Найти</button>
            </form>
        );
    } 
};

export default SearchBar;
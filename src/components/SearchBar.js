import React, { Component } from 'react';
import youTubeLogo from '../assets/ytlogo.png';
import reactLogo from '../assets/reactlogo.png';

/* 
comment
*/


class SearchBar extends Component {
  constructor(props) {
      super(props);

      this.state = { term: '' };
  }

  componentDidMount(){
    this.textInput.focus(); 
 }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid search-bar">
        <img src={youTubeLogo} alt="YouTube logo"/>
        <img src={reactLogo} alt="ReactJs logo"/>
        <h3>ReactJs YouTube App</h3>
          <input
            value={this.props.term}
            onChange={event => this.onInputChange(event.target.value)}
            ref={(input) => { this.textInput = input; }}
          />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
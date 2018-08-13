import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props),
    this.state = {term:""}
    this.onFormSubmit = this.onFormSubmit.bind(this)
    // this.onInputChange = this.onInputChange.bind(this);
  }
  // onInputChange(event) {
  //   this.setState({term: event.target.value});
  // }
     onFormSubmit(event) {
       console.log("lol");
      event.preventDefault();
      this.props.fetchWeather(this.state.term);
      this.setState({term: ""});
     }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input placeholder="Get a 5-day forecast by typing the name of the city that is of your interest." className="form-control"
        value={this.state.term} onChange={(input)=>this.setState({term:input.target.value})}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDisptachToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDisptachToProps)(SearchBar);

import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props),
    this.state = {term:""}
    // this.onInputChange = this.onInputChange.bind(this);
  }
  // onInputChange(event) {
  //   this.setState({term: event.target.value});
  // }
     onFormSubmit(event) {
      event.preventDefault();

       
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

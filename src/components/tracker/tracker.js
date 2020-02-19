import React, {Component} from 'react';

class Tracker extends Component {
    state = {
        recentRun: 0,
        longestRun: 0
    }
  handleSubmit=(event)=>{
    console.log('in handleSubmit', event.target.value);
    
    this.setState({
      recentRun: event.target.value
      })
  }
  render () {
  return (
    <div>
        <label htmlFor="milesRan">Miles Ran: </label>
        <input onChange={(event)=>this.handleSubmit(event)} placeholder="Miles Ran"/>
        <button onClick={this.handleSubmit}>Add New Run</button>
      <div>
          <p>
            Recent Run: {this.state.recentRun}
          </p>
          <p>
            Longest Run: {this.state.longestRun}
          </p>
      </div>
    </div>
  );
  }
}

export default Tracker;

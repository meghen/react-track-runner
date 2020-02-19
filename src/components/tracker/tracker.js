import React, {Component} from 'react';

class Tracker extends Component {
    state = {
        inputObj: {
            recent: 0,
            longest: 0
        },
        finalObj: {
            recent: 0,
            longest: 0
        }
    }
  handleChange=(event)=>{
    console.log('in handleSubmit', event.target.value);
    this.setState({
        inputObj: {
            recent: event.target.value,
        }
      })
  }
  handleSubmit = () => {
      this.setState({
        finalObj: {
            recent: this.state.inputObj.recent,
            longest: this.state.inputObj.longest
        }
      })
  }
  render () {
  return (
    <div>
        <label htmlFor="milesRan">Miles Ran: </label>
        <input onChange={(event)=>this.handleChange(event)} placeholder="Miles Ran"/>
        <button onClick={this.handleSubmit}>Add New Run</button>
      <div>
          <p>
            Recent Run: {this.state.finalObj.recent}
          </p>
          <p>
            Longest Run: {this.state.finalObj.longest}
          </p>
      </div>
    </div>
  );
  }
}

export default Tracker;

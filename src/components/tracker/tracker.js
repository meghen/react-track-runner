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
      if (this.state.inputObj.longest<this.state.inputObj.recent) {
        this.setState({
            inputObj: {
                recent: event.target.value,
                longest: event.target.value
            }
          })
      } else {
    this.setState({
        inputObj: {
            recent: event.target.value,
            longest: this.state.inputObj.longest
        }
      })
    }
  }
  handleSubmit = () => {
      console.log('input long val', this.state.inputObj.longest);
      console.log('input recent val', this.state.inputObj.recent);
      console.log('final long val', this.state.finalObj.longest);
      console.log('final rec val', this.state.finalObj.recent);

    
      if (this.state.finalObj.recent > this.state.finalObj.longest) {
          this.setState({
            finalObj: {
                recent: this.state.inputObj.recent,
                longest: this.state.inputObj.recent
            }  
          })
      } else {
        this.setState({
            finalObj: {
                recent: this.state.inputObj.recent,
                longest: this.state.inputObj.longest
            }
          })
    }
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

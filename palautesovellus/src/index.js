import React from 'react'
import ReactDOM from 'react-dom'



const Statistics = (props) => {
	if (props.state.counter == 0 && props.state.counte==0 && props.state.count ==0) {
    return (
      <div>
        <em>Paina nappulaa! -kjeh kjeh</em>
      </div>
    )
  }
  return (
	<div>
	
	
	
	
	<div>
	<table>
	<tr>
		<td>{props.state.counter} </td>
		<td>Good Feedback!   </td>
	</tr>
	<tr>
	 	<td>{props.state.counte}</td>
	 	<td>Amazing Feedback! </td>
	</tr>
	<tr>
		<td>{props.state.count}</td>
		<td>Marvellous Feedback!</td>
	</tr>
	<tr>
		<td>{(props.state.count-props.state.counter)/(props.state.counter+props.state.counte+props.state.count)}</td>
		<td>Average</td>
	</tr>
	<tr>
		<td>{100*props.state.count/(props.state.counter+props.state.counte+props.state.count)}%</td>
		<td>Marvellous Feedback!</td>
	</tr>
</table>
	</div>
	
</div>)}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,	//neg.
      counte:0,		//neutr.
	count:0		//pos.
    }
  }


  render() {
    return (
	
      <div>
 	<h1>Give me some feedback!</h1>
        
        <div>
          <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
            Good job!
          </button>
          <button onClick={() => this.setState({ counte: this.state.counte + 1 })}>
            Amazing work!
          </button>
 	  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Marvellous service!
          </button>
        </div>
	
	<h2>How much you loved me? </h2>
	
	<Statistics state={this.state}/></div>
      
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'))
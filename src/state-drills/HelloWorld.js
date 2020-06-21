import React from 'react'

/* const data = ['World','Friend','React']; */

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {who: 'world'}
  }

  handleWhoState1 = () => {
    console.log(this.state)
    this.setState({
      who: 'world'
    })
  };

  handleWhoState2 = () => {
    console.log(this.state)
    this.setState({
      who: 'friend'
    })
  };

  handleWhoState3 = () => {
    console.log(this.state)
    this.setState({
      who: 'React'
    })
  };


  render (){
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleWhoState1}>World</button>
        <button onClick={this.handleWhoState2}>Friend</button>
        <button onClick={this.handleWhoState3}>React</button>
      </div>
    )
  }
}

export default HelloWorld;

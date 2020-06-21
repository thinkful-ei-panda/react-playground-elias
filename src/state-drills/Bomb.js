import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  componentDidMount() {
    console.log('component mounted');
    this.interval = setInterval(() => {
      console.log(this.state.count)
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('component unmounted');
    clearInterval(this.interval)
  }
  
  
  
  render () {
    /* handleBombCount = () => {
    if (this.state.count % 2 = 0)
    } */
    const count = this.state.count;
    let p;
    if (count%2) {
      p = <p>tick</p>
    } else {
      p = <p>tock</p>
    }
    if (count >= 8) {
      p = <p>BOOM!!!!</p>
      clearInterval(this.interval)
    } 
    return (
      <div>
        {p}
      </div>
    )
  }
}

import React from 'react'

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleTrigger = () => {
    console.log('props in handleTrigger', this.props)

    this.setState({
      spinningTheChamber: true
    })

    this.timeout = setTimeout(() => {

      this.setState({
        chamber: Math.ceil(Math.random()*8),
        spinningTheChamber: false
      }
      )
      console.log(this.state.chamber, this.state.spinningTheChamber)
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render (/* bulletInTheChamber */) {
    /* console.log('props in handleTrigger', this.props)
    const spinning = this.state.spinningTheChamber
    const chamber = this.state.chamber
    let p;
    if (spinning) {
      p = <p>spinning the chamber and pulling the trigger! ...</p>
    } else if (chamber === this.props) {
      p = <p>BANG!!!!</p>
    } else {
      p = <p >you're safe!</p>
    } */

    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleTrigger}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

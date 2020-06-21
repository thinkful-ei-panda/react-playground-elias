import React from 'react'

export default class Accordian extends React.Component {
  static defaultProps = { sections: [] };

  handleButtonClick(index) {
    this.setState({currentSectionIndex: index})
  }
  
  renderContent(index) {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
      <p className='content' key={index}>
        {!!this.props.sections.length && currentSection.content}
      </p>
    )
  }

  renderBellows(section, idx, currentSectionIndex) {
    return (
      <li className='Accordian_Bellow' key={idx}>
        <button 
          type='button'
          onClick={() => this.handleButtonClick(idx)}
        >
          {section.title}
        </button>
        {(currentSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }
  state = {
    currentSectionIndex: null
  }
  
  render () {
    const {currentSectionIndex } = this.state
    const {sections} = this.props
    return (
      <ul className='Accordian'>
        {sections.map((section,idx) => 
        this.renderBellows(section,idx,currentSectionIndex)
        )}
      </ul>
    )
  }
}

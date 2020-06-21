import React from "react";

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };

  handleButtonClick(index) {
    this.setState({currentTabIndex: index})
  }

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button onClick={() => this.handleButtonClick(index)} key={index}>
        {tab.name}
      </button>
    ))
  }
  state = {
    currentTabIndex: 0
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}

export default Tabs;
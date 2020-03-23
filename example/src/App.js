import React, { Component } from 'react'

import AnimatedCheckbox from 'react-animated_checkbox'

export default class App extends Component {


  render () {
    return (
      <div className="testCard">
        <AnimatedCheckbox
          disabled={this.props.disabled}
          onChange={this.props.onChange}
          checked={this.props.value}
          name={"MON"}
          fill={false}
        />
        <AnimatedCheckbox
          id={"test2"}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
          checked={this.props.value}
          name={"TUE"}
          fill={true}
        />
      </div>
    )
  }
}

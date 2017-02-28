import React, { PropTypes } from 'react'

export default class Bubble extends React.Component {
  render () {
    return (
      <circle
        className='Bubble'
        cx={this.props.x}
        cy={this.props.y}
        r={this.props.radius}
      />
    )
  }
}

Bubble.propTypes = {
  radius: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

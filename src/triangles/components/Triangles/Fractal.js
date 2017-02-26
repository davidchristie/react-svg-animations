import React, { PropTypes } from 'react'

import Triangle from './Triangle'

export default class Fractal extends React.Component {
  _children () {
    const { depth, level, position, size } = this.props
    if (level >= depth) {
      return null
    }
    const positions = []
    for (let i = 0; i < 3; i++) {
      positions.push({
        x: position.x + Math.sin(2 / 3 * Math.PI * i) * size / 2,
        y: position.y + Math.cos(2 / 3 * Math.PI * i) * size / 2
      })
    }
    return positions.map((position, index) => {
      return (
        <Fractal
          key={index}
          depth={depth}
          level={level + 1}
          position={position}
          size={size / 2}
        />
      )
    })
  }

  render () {
    const { position, size } = this.props
    return (
      <Triangle
        position={position}
        size={size}
      >
        {this._children()}
      </Triangle>
    )
  }
}

Fractal.defaultProps = {
  depth: 3,
  level: 0
}

Fractal.propTypes = {
  depth: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  size: PropTypes.number.isRequired
}

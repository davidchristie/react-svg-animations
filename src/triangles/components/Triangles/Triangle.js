import React, { PropTypes } from 'react'

const points = ({ position, size }) => {
  const sides = 3
  const points = []
  for (let i = 0; i <= sides; i++) {
    const angle = 2 * Math.PI / sides * i
    const x = Math.sin(angle) * size + position.x
    const y = Math.cos(angle) * size + position.y
    points.push(x + ',' + y)
  }
  return points.join(' ')
}

export default class Triangle extends React.Component {
  render () {
    return (
      <g>
        <polygon
          className='Triangle'
          fillOpacity={0}
          points={points(this.props)}
          stroke='black'
          strokeWidth='3'
          style={{
            tranform: `translate(${this.props.position.x}, ${this.props.position.y})`
          }}
        />
        {this.props.children}
      </g>
    )
  }
}

Triangle.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  size: PropTypes.number.isRequired
}

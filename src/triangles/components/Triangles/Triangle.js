import React, { PropTypes } from 'react'

const points = ({ position, rotation, size }) => {
  const sides = 3
  const points = []
  for (let i = 0; i <= sides; i++) {
    const angle = 2 * Math.PI / sides * i
    const x = Math.sin(angle + rotation) * size + position.x
    const y = Math.cos(angle + rotation) * size + position.y
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
          strokeWidth='1'
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
  rotation: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}

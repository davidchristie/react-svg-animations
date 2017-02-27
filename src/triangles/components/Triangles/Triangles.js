import React from 'react'

import Fractal from './Fractal'

export default class Triangles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {rotation: 0}
  }

  componentDidMount () {
    let start = null
    const animate = timestamp => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const rotation = elapsed / 2000 % 2 * Math.PI
      this.setState({rotation})
      window.requestAnimationFrame(animate)
    }
    window.requestAnimationFrame(animate)
  }

  render () {
    return (
      <svg viewBox='0 0 100 100' width='100%'>
        <Fractal
          position={{x: 50, y: 50}}
          rotation={this.state.rotation}
          size={45}
        />
      </svg>
    )
  }
}

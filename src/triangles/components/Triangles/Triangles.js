import React from 'react'

import Fractal from './Fractal'

export default class Triangles extends React.Component {
  render () {
    return (
      <svg viewBox='0 0 100 100' width='100%'>
        <Fractal position={{x: 50, y: 50}} size={45} />
      </svg>
    )
  }
}

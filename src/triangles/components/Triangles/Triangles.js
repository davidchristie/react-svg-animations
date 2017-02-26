import React from 'react'

import Triangle from './Triangle'

export default class Triangles extends React.Component {
  render () {
    return (
      <svg viewBox='0 0 100 100' width='100%'>
        <Triangle position={{x: 50, y: 50}} size={45} />
      </svg>
    )
  }
}

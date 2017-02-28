import React from 'react'

import Bubble from './Bubble'

const createBubble = () => {
  return {
    x: 100 * Math.random(),
    y: 100,
    radius: 0
  }
}

export default class Triangles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {bubbles: []}
  }

  componentDidMount () {
    let last = null
    const animate = now => {
      if (!last) last = now
      const elapsed = now - last
      last = now

      let bubbles = [...this.state.bubbles]
      while (Math.random() < 0.01) {
        bubbles.push(createBubble())
      }
      bubbles = bubbles.map(({radius, x, y}) => {
        return {
          radius: 10 * Math.sin(y / 100 * Math.PI),
          x,
          y: y - 0.01 * elapsed
        }
      })
      bubbles = bubbles.filter(bubble => bubble.y >= 0)
      this.setState({bubbles})

      window.requestAnimationFrame(animate)
    }
    window.requestAnimationFrame(animate)
  }

  render () {
    return (
      <svg viewBox='0 0 100 100' width='100%'>
        {this.state.bubbles.map(({ radius, x, y }, index) => {
          return <Bubble key={index} radius={radius} x={x} y={y} />
        })}
      </svg>
    )
  }
}

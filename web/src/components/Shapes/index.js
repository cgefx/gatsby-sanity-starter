import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const MoveUp = keyframes`
0% { 
		transform: translateY(0);
}
100% {
		transform: translateY(-40px);
}
`

const MoveDown = keyframes`
0% { 
		transform: translateY(0);
}
100% {
		transform: translateY(40px);
}
`

const Shape = styled.img`
  position: absolute;
  height: 5rem;
  &.move-up {
    animation: ${MoveUp} 3s infinite alternate;
  }
  &.move-down {
    animation: ${MoveDown} 3s infinite alternate;
  }
  @media (max-width: 767px) {
    height: 2rem;
  }
`

export default function Shapes() {
  const { shapes } = useStaticQuery(graphql`
    query {
      shapes: allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "shapes" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 100) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return shapes.edges.map((value, index) => (
    <Shape
      style={{
        left: `${(index + 1) * 10}%`,
        bottom: `${
          Math.random() *
            (+((index + 1) % 2 === 0 ? 10 : 90) -
              +((index + 1) % 2 === 0 ? 5 : 80)) +
          +((index + 1) % 2 === 0 ? 5 : 80)
        }%`,
      }}
      key={index}
      src={value.node.childImageSharp.fluid.src}
      alt="shape"
      className={
        Math.floor(Math.random() * 10) % 2 === 0 ? 'move-up' : 'move-down'
      }
    />
  ))
}

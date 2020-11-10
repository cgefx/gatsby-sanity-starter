/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Typewriter from 'typewriter-effect'
import Glitch from '../Glitch'
import Shapes from '../Shapes'

import {
  Section,
  HeadingBox,
  SubHeading,
  Overlay,
  Heading,
  Type,
  StyledLink,
} from './styles'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0,
    }
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth })
    window.addEventListener('resize', this.updateDimensions)
    if (window.pageYOffset < window.innerHeight) {
      document.body.addEventListener('mousemove', e => {
        const X = (e.clientX * -0.05) / 8
        const Y = (e.clientY * -0.05) / 8
        const element = document.getElementsByClassName('parallax-hero-item')
        let i
        for (i = 0; i < element.length; i++) {
          element[i].style.transform = `translate(${X}px, ${Y}px)`
        }
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    if (this.state.height !== window.innerHeight) {
      this.setState({ height: window.innerHeight })
    }
    if (this.state.width !== window.innerWidth) {
      this.setState({ width: window.innerWidth })
    }
  }

  render() {
    return (
      <Section id="home">
        <Overlay
          style={{
            height: `${this.state.width > 500 ? this.state.height : 350}px`,
          }}
        >
          <HeadingBox className="parallax-hero-item animate">
            <SubHeading className="parallax-hero-item">Hello, I'm</SubHeading>
            <Heading className="parallax-hero-item">
              <Glitch text="Colin Gibson" />
            </Heading>
            <Type className="parallax-hero-item">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'Web Designer',
                    'UX Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Type>
            <StyledLink href="./">Get In Touch</StyledLink>
          </HeadingBox>
          <Shapes />
        </Overlay>
      </Section>
    )
  }
}

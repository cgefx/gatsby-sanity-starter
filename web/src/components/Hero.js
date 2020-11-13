/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Glitch from './Glitch'
import Shapes from './Shapes'
import bg from '../images/background-poly.jpg'
import { flexCenter } from './_shared/styled-mixins'
import { gradientAnimation } from './_shared/animation'

const Section = styled.section`
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`

const Overlay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--overlay-black);
`

const HeadingBox = styled.div`
  height: 50rem;
  width: 90rem;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: var(--gradient);
    /* background: var(--primary-color); */
    background-size: 300% 300%;
    --width: 3px;
    clip-path: polygon(
      0% 100%,
      var(--width) 100%,
      var(--width) var(--width),
      calc(100% - var(--width)) var(--width),
      calc(100% - var(--width)) calc(100% - var(--width)),
      var(--width) calc(100% - var(--width)),
      var(--width) 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  &.animate:after {
    animation: ${gradientAnimation} 2s ease-in-out infinite;
  }
  @media (max-width: 767px) {
    height: 35rem;
  }
`

const SubHeading = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: var(--body-color);
  text-transform: uppercase;
  letter-spacing: 4px;
`

const Heading = styled.div`
  .glitch {
    font-size: 125px;
    line-height: 140px;
    font-weight: 600;
    @media (max-width: 767px) {
      font-size: 40px;
      line-height: 50px;
    }
  }
`

const Type = styled.div`
  font-size: 50px;
  line-height: 50px;
  text-transform: uppercase;
  margin-left: 6px;
  @media (min-width: 768px) and (max-width: 1500px) {
    font-size: 23px;
    line-height: 20px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 20px;
  }
  span {
    /* font-family: Teko; */
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  border-bottom: 2px solid;
  font-weight: 300;
  transition: 0.5s;
  margin-top: 4rem;
  &:hover {
    text-decoration: none;
    border-color: var(--primary-color);
  }
`

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

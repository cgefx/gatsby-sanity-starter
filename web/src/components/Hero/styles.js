import styled, { keyframes } from 'styled-components'
import bg from '../../images/background-poly.jpg'
import { flexCenter } from '../_shared/styled-mixins'

const gradientAnimation = keyframes`
			0% {
				background-position: 15% 0%;
			}
			50% {
				background-position: 85% 100%;
			}
			100% {
				background-position: 15% 0%;
			}
		`

export const Section = styled.section`
  position: relative;
  background-image: url(${bg});

  background-size: cover;
  background-repeat: no-repeat;
`

export const Overlay = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: var(--overlay-black);
`

export const HeadingBox = styled.div`
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

export const SubHeading = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: var(--body-color);
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const Heading = styled.div`
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

export const Type = styled.div`
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

export const StyledLink = styled.a`
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

import styled, { keyframes } from 'styled-components'
import bg from '../../../images/background-poly.jpg'

export const Section = styled.section`
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Heading = styled.div`
  .glitch {
    font-size: 125px;
    line-height: 140px;
    font-weight: 600;
    color: #fff;
    @media (max-width: 767px) {
      font-size: 40px;
      line-height: 50px;
    }
  }
`

export const SubHeading = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const Overlay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`

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

export const HeadingBox = styled.div`
  height: 500px;
  width: 900px;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: var(--gradient);
    background-size: 300% 300%;
    clip-path: polygon(
      0% 100%,
      5px 100%,
      5px 5px,
      calc(100% - 5px) 5px,
      calc(100% - 5px) calc(100% - 5px),
      5px calc(100% - 5px),
      5px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  &.animate:after {
    animation: ${gradientAnimation} 2s ease-in-out infinite;
  }
  @media (max-width: 767px) {
    height: 350px;
  }
`

export const Type = styled.div`
  font-size: 50px;
  line-height: 50px;
  color: #fff;
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
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid;
  font-weight: 300;
  transition: 0.5s;
  margin-top: 40px;
  &:hover {
    color: #fff;
    text-decoration: none;
    border-color: #04e5e5;
  }
`

import styled, { keyframes } from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

const AnimatedShadow = keyframes`
			0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
			10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
			20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
			30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
			40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
			50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
			60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
			70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
			80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
			90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
			100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
	`

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--darkest-grey);
  padding-top: 5rem;
  @media (max-width: 767px) {
    padding: 8rem 2rem;
  }
  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`

export const AboutContainer = styled(Container)`
  padding: 10rem 0;
  @media (max-width: 500px) {
    padding: 50rem 0;
  }
`

export const StyledRow = styled(Row)``

export const LeftCol = styled(Col)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  @media (max-width: 500px) {
    margin-bottom: 5rem;
  }
`
export const RightCol = styled(Col)``

export const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  animation: ${AnimatedShadow} 10s infinite alternate;
  @media (max-width: 767px) {
    margin-bottom: 5rem;
  }
`

export const Image = styled.img`
  max-width: 400px;
  @media (max-width: 767px) {
    max-width: 20rem;
  }
  @media (max-width: 1400px) {
    max-width: 28rem;
  }
`

export const Heading = styled.h2`
  font-size: 5.6rem;
  color: var(--white);
  line-height: 5rem;
`

export const Separator = styled.div`
  height: 0.5rem;
  width: 5rem;
  background-color: var(--blue);
  margin: 20px 0;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--grey);
  margin-bottom: 0.3;
`

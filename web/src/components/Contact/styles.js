import styled, { keyframes } from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

export const gradientAnimation = keyframes`
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
  overflow: hidden;
  background-color: var(--black);
  padding: 10rem 0;
`

export const StyledContainer = styled(Container)``

export const FormRow = styled(Row)`
  background-color: var(--dark-grey);
`

export const ContactCol = styled(Col)`
  /* min-height: 60rem; */
  max-height: 60rem;
  padding: 0;
  display: flex;
  align-items: center;
`

export const Gradient = styled.div`
  position: absolute;
  border-radius: 1px;
  height: 100%;
  width: 100%;
  top: 0;
  --width: 2px;
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
  background: var(--gradient);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 5s ease-in-out infinite;
`

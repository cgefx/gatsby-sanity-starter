import styled, { keyframes } from 'styled-components'

const ColorAnimation = keyframes`
			0%  {fill: #04e5e5;}
			10% {fill: #f37055;}
			20% {fill: #ef4e7b;}
			30% {fill: #a166ab;}
			40% {fill: #5073b8;}
			50% {fill: #04e5e5;}
			60% {fill: #07b39b;}
			70% {fill: #6fba82;}
			80% {fill: #5073b8;}
			90% {fill: #1098ad;}
			100% {fill: #f37055;}
  `

const Fade = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 2rem;
  @media (max-width: 767px) {
    margin-top: 5rem;
    /* padding: 0 20px; */
  }
`

export const Heading = styled.h4`
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  border: none;
  margin: 0 0 1.5rem 0;
  transition: 0.5s;

  &:focus {
    outline: none;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(10rem, 15rem));
  gap: 0.5rem;
  justify-items: start;
  animation: ${Fade} 1s forwards;
`
export const SkillContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  /* justify-content: flex-end; */
  align-items: flex-end;
`

export const IconWrapper = styled.div`
  height: 100%;
  transition: 2s;

  > svg {
    height: 100%;
    animation: ${ColorAnimation} 10s infinite alternate;
  }
`

export const Text = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  color: var(--grey);
  font-weight: bold;
  margin-left: 0.8rem;
  margin-bottom: 0.2rem;
`

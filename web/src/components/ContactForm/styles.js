import styled, { keyframes } from 'styled-components'

const ErrorInputAnimation = keyframes`
			0% {
				border-bottom: 1px solid var(--dark-grey);
			}
			100% {
				border-bottom: 1px solid var(--red);
			}
	`

export const StyledForm = styled.form`
  padding: 4rem;
  width: 100%;
  position: relative;
  z-index: 5;
`

export const Heading = styled.h2`
  font-size: 56px;
`

export const Separator = styled.div`
  height: 0.5rem;
  width: 5rem;
  margin-bottom: 3rem;
  margin-left: 0.6rem;
  background-color: var(--blue);
`

export const InputElement = styled.div`
  margin: 2rem 0;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1rem 0.5rem;
  border-radius: 0;
  color: var(--white);
  transition: 0.5s;
  border-bottom: 1px solid var(--med-grey);
  background-color: var(--dark-grey);
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--blue);
  }
  &.error {
    animation: ${ErrorInputAnimation} 1s forwards;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  background-color: var(--dark-grey);
  border: none;
  padding: 1rem 0.5rem;
  border-radius: 0;
  color: var(--white);
  transition: all 0.5s ease 0s;
  min-height: 10rem;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 1px solid var(--med-grey);
  height: 100px;
  &:focus {
    border-bottom: 1px solid var(--blue);
    outline: none;
  }
`

export const Submit = styled.button`
  display: block;
  height: 5rem;
  width: 18.6rem;
  position: relative;
  border: none;
  overflow: hidden;
  transition: 0.5s;
  background-color: var(--black);
  &:hover {
    background: var(--med-grey);
  }
  span {
    position: relative;
    top: 0;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

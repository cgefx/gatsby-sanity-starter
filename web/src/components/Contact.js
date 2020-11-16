import React from 'react'
import styled from 'styled-components'
import { gradientAnimation, ErrorInputAnimation } from './_shared/animation'
import { StyledSection } from './_shared/styled-section'
import { contentBox } from './_shared/styled-mixins'
import { StyledH2 } from './_shared/styled-headings'
import useForm from '../utils/useForm'

const StyledContainer = styled.div`
  background: var(--gradient);
  border-radius: var(--radius);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 5s ease-in-out infinite;
  max-width: 825px;
  margin: 0 auto;
  width: 100%;
  padding: 1px;
`

const StyledForm = styled.form`
  ${contentBox}
`
const InputElement = styled.div`
  margin: 1.6rem 0;
`

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1rem 0.5rem;
  border-radius: 0;
  color: var(--title-color);
  transition: 0.5s;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-content-color);
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--primary-color);
  }
  &.error {
    animation: ${ErrorInputAnimation} 1s forwards;
  }
`

const Submit = styled.button`
  display: block;
  height: 5rem;
  width: 18.6rem;
  position: relative;
  border: none;
  overflow: hidden;
  transition: 0.5s;
  background-color: var(--black);
  &:hover {
    background: var(--border-color);
  }
  span {
    position: relative;
    top: 0;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

export default function Contact() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
    error: false,
    mapleSyrup: '',
  })
  return (
    <StyledSection id="contact">
      <StyledContainer>
        <StyledForm>
          <StyledH2>Get In Touch</StyledH2>
          <InputElement>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={updateValue}
              // className={`name ${this.check(this.state.name) ? "" : "error"}`}
            />
          </InputElement>
          <InputElement>
            <Input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={updateValue}
              placeholder="Email"
              // className={`email ${this.check(this.state.email) ? "" : "error"}`}
            />
          </InputElement>

          <Submit>
            <span>Submit</span>
          </Submit>
        </StyledForm>
      </StyledContainer>
    </StyledSection>
  )
}

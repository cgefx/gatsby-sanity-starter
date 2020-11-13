import React from 'react'
import styled from 'styled-components'
import { gradientAnimation, ErrorInputAnimation } from './_shared/animation'
import { StyledSection } from './_shared/styled-section'
import { contentBox } from './_shared/styled-mixins'
import { StyledH2 } from './_shared/styled-headings'
import useForm from '../utils/useForm'

const Gradient = styled.div`
  border-radius: 1px;
  height: 100%;
  width: 100%;
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

const StyledContainer = styled.div`
  ${contentBox}
  padding: 1.6rem;
  width: 100%;
`

const StyledForm = styled.form`
  padding: 4rem;
  width: 100%;
  position: relative;
  z-index: 5;
`
const InputElement = styled.div`
  margin: 2rem 0;
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

const Textarea = styled.textarea`
  width: 100%;
  background-color: var(--bg-content-color);
  border: none;
  padding: 1rem 0.5rem;
  border-radius: 0;
  color: var(--title-color);
  transition: all 0.5s ease 0s;
  min-height: 10rem;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 1px solid var(--border-color);
  height: 100px;
  &:focus {
    border-bottom: 1px solid var(--primary-color);
    outline: none;
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
        <Gradient />
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
          <InputElement>
            <Textarea
              type="textarea"
              id="message"
              name="message"
              value={values.message}
              onChange={updateValue}
              placeholder="Message"
              // className={`message ${
              // 	this.check(this.state.message) ? "" : "error"
              // }`}
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

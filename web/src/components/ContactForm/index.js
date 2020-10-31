import React from 'react'

import {
  Separator,
  StyledForm,
  Heading,
  InputElement,
  Input,
  Textarea,
  Submit,
} from './styles'

import useForm from '../../utils/useForm'

export default function ContactForm() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
    error: false,
    mapleSyrup: '',
  })
  return (
    <StyledForm>
      <Heading>Get In Touch</Heading>
      <Separator />
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
  )
}

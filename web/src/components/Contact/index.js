import React from 'react'
import {
  Section,
  StyledContainer,
  FormRow,
  ContactCol,
  Gradient,
} from './styles'
import ContactForm from '../ContactForm'

export default function Contact() {
  return (
    <Section id="contact">
      <StyledContainer>
        <FormRow>
          <ContactCol md={12}>
            <ContactForm />
            <Gradient />
          </ContactCol>
        </FormRow>
      </StyledContainer>
    </Section>
  )
}

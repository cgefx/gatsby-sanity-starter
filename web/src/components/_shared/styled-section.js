import styled from 'styled-components'

export const StyledSection = styled.section`
  margin: 0 auto;
  padding: 1.6rem;
  max-width: 1000px;
`

export const StyledFullHeightSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
  justify-content: start;
`

import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 6rem 2rem;
  max-width: 1000px;
`

export const StyledFullHeightSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
  justify-content: start;
`

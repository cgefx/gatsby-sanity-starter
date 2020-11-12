import styled from 'styled-components'
import { contentBox, flexCenter } from '../_shared/styled-mixins'

export const StyledFeaturedProject = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 7rem;
  padding: 4rem 0;

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`

export const StyledProjectInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const StyledLinkContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);

    &:hover {
      color: var(--body-color);
    }
  }

  & svg {
    margin: 0 0.5rem;
  }
`

export const StyledDescription = styled.section`
  ${contentBox}
  position: relative;
  padding: 1.6rem;

  p {
    font-size: 1.6rem;
  }
`

export const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`

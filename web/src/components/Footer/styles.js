import styled, { css } from 'styled-components'
import { mq } from '../_shared/media'
import { flexCenter } from '../_shared/styled-mixins'

const marginMediaQuery = css`
  ${mq.gt.xs} {
    margin-top: 0;
  }
`
export const StyledFooter = styled.footer`
  ${flexCenter};
  flex-direction: column;
  background-color: var(--bg-content-color);
  padding: var(--space);
  text-align: center;
  font-size: 1.6rem;

  ${mq.gt.xs} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  ${mq.lt.md} {
    margin-bottom: var(--header-height);
  }
`
export const StyledSocialContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 2rem;
  ${marginMediaQuery};

  ${mq.gt.xs} {
    > div {
      margin-right: 2rem;
    }
    flex-direction: row;
    align-items: center;
  }
`
export const StyledCopyright = styled.span`
  font-weight: 500;
  margin-bottom: 1.6rem;
  ${mq.gt.xs} {
    margin-right: 1.6rem;
    margin-bottom: 0;
  }
`
export const StyledRotator = styled.div`
  ${flexCenter};
  margin: 1.6rem 0;
  font-size: 1.6rem;

  & > span {
    margin-left: 0.5rem;
  }

  ${mq.gt.xs} {
    margin: 0;
  }
`

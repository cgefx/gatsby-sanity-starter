import styled from 'styled-components'
import line from '../../images/shapes/7.png'

export const StyledH1 = styled.h1`
  width: 100%;
  position: relative;
  font-weight: 800;
  margin: 20px 0;

  /* &:first-letter {
    color: var(--primary-color);
  } */

  &:after {
    /* background-color: var(--primary-color); */
    /* content: '';
    background-image: url(${line});
    background-repeat: no-repeat;
    background-position: center 100%;

    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 10px; */
  }
`

export const StyledH2 = styled.h2`
  color: var(--title-color);
  margin: 20px 0;
  position: relative;

  &:after {
    background-color: var(--primary-color);
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 30px;
    height: 2px;
  }
`

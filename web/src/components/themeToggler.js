import React from 'react'
import styled from 'styled-components'

import { darkTheme } from '../styles'

const ToggleContainer = styled.button`
  padding: 0 0.3rem;
  margin-left: 1rem;
  width: 4.8rem;
  height: 2.4rem;
  cursor: pointer;
  display: flex;
  border: none;
  outline: 0;
  align-items: center;
  border-radius: 30px;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: ${({ theme }) => theme.gradient};
  transition-property: color;
  transition-duration: 0.2s;
  :before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${darkTheme.gradient};
    border-radius: 30px;
    transform: scaleY(0);
    transform-origin: 50%;
    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }
  :hover:before {
    transform: scaleY(1);
  }
`

const ToggleSwitch = styled.div`
  background: ${({ theme }) => theme.backgroundTop};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  transition: all 0.15s;
  transform: ${({ lightTheme }) =>
    lightTheme ? `translateX(2rem)` : `translateX(0)`};
`

function ThemeToggler({ theme, toggleTheme }) {
  const isLight = theme === 'light'

  return (
    <ToggleContainer
      aria-label="theme toggle"
      hoverColor={darkTheme}
      onClick={toggleTheme}
    >
      <ToggleSwitch lightTheme={isLight} />
    </ToggleContainer>
  )
}

export default ThemeToggler

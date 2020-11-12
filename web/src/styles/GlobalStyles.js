import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
		:root {
			--primary-color: rgb(80, 115, 184);
			--secondary-color: #f18731;
			--bg-color: #000;
			--bg-color-light: #050505;
			--bg-content-color: #111;
			--bg-code: rgba(0, 0, 0, 0.3);
			--title-color: #fff;
			--body-color: #ced8de;
			--border-color: #444;
			--disabled-color: #888;
			--overlay-black-dark: rgba(0, 0, 0, 0.8);
			--overlay-black: rgba(0, 0, 0, 0.7);
			--red: #ff0000;
			--bright-blue: #00fff9;
			--pink: #ff00c1;
			--radius: 6px;
			--space: 7rem;
			--header-height: 110px;
			--content-width: 860px;
			--transition-fast: 0.2s;
			--transition-normal: 0.4s;
			--transition-slow: 0.6s;
			--gradient: linear-gradient(
				120deg,
				#04e5e5,
				#f37055,
				#ef4e7b,
				#a166ab,
				#5073b8,
				#1098ad,
				#07b39b,
				#6fba82
			);
		}
  *,
  html,
  body {
    margin: 0;
    padding: 0;
  }
  html {
		font-size: 62.5%; // 1rem = 10px
  }
  body {
		font-size: 2rem;
		background-color: var(--bg-color);
		color: var(--body-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
	button {
		color: inherit;
		cursor: pointer;
	}

	a {
		color: inherit;

		&:not(.button) {
			text-decoration: none;
			color: var(--primary-color);
		}

		&.active {
			color: var(--primary-color);
			border-bottom: 2px solid currentColor;
		}

		&:hover {
			color: var(--secondary-color);
		}
	}




`

export default GlobalStyles

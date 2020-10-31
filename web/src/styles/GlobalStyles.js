import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
		:root {
			--overlay-black-dark: rgba(0, 0, 0, 0.8);
			--overlay-black: rgba(0, 0, 0, 0.7);
			--black: #000;
			--dark-grey: #111;
			--darkest-grey: #050505;
			--med-grey: #444;
			--grey: #ccc;
			--white: #fff;
			--blue: #04e5e5;
			--red: #ff0000;
			--bright-blue: #00fff9;
			--pink: #ff00c1;
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
		background-color: var(--black);
		color: var(--white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
	button {
		color: inherit;
		cursor: pointer;
	}

	a {
		color: inherit;
	}

`

export default GlobalStyles

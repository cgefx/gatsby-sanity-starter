import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
		:root {
			--blue: #04e5e5;
			--grey: #ccc;
			--white: #fff;
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
		background-color: #000;
		color: white;
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

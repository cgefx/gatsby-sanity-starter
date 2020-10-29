import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
		:root {
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
  *::after,
  *::before {
    box-sizing: border-box;
  }
  *,
  html,
  body {
    margin: 0;
    padding: 0;
  }
  html {
	//100% = 16px;
	font-size: 62.5%; // 1rem = 10px
  }
  body {
		font-size: 2rem;
		background-color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
	#___gatsby {
  overflow-x: hidden;
}
`

export default GlobalStyles

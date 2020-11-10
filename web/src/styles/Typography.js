import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 400;
		line-height: 1.45;
	}

	p {
		margin-bottom: 1.25em;
	}

  h1,h2,h3,h4,h5 {
		transition: color  var(--transition-slow);
		color: var(--title-color);
		margin: 2.75rem 0 1rem;
		${'' /* font-family: 'Poppins', sans-serif; */}
		font-weight: 600;
		line-height: 1.15;
  }

	h1 {
		margin-top: 0;
		font-size: 1.802em;
	}

	h2 {
		font-size:  1.602em;
	}

	h3 {
		font-size: 1.424em;
	}

	h4 {
		font-size: 1.266em;
	}

	h5 {
		font-size: 1.125em;
	}

	small {
		font-size: 0.889em;
	}

	strong {
		font-weight: 600;
	}
`

export default Typography

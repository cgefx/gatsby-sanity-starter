import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
	body {
		
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-weight: 400;
  font-size: 1rem;
		line-height: 1.75;
	}

	p {
		${'' /* margin-bottom: 1.25em; */}
	}

	${'' /* TAnia from here on */}
	h1,
h2,
h3,
h4,
h5 {
  margin: 0 0 1.5rem 0;
  font-weight: 700;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child),
h4:not(:first-child) {
  margin-top: 3rem;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.1;
}

h2 {
  font-size: 1.75rem;
  padding-bottom: 0.5rem;
 
}

h2 code {
  font-size: 1.75rem !important;
}

h3 {
  font-size: 1.5rem;
  ${'' /* color: var(--font-color); */}
  font-weight: 600;
  margin-bottom: 1rem;
}

h3 code {
  font-size: 1.4rem !important;
}

h4 {
  font-size: 1.3rem;
  ${'' /* color: var(--font-color); */}
  font-weight: 500;
  margin-bottom: 1rem;
  ${'' /* border-bottom: 2px solid var(--light-background); */}
  padding-bottom: 0.25rem;
}

h5 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  h2 code {
    font-size: 1.9rem !important;
  }

  h3 {
    font-size: 1.7rem;
    ${'' /* color: var(--font-color); */}
    font-weight: 600;
  }

  h3 code {
    font-size: 1.6rem !important;
  }

  h4 {
    font-weight: 400;
    font-size: 1.4rem;
  }
}



	p,
ol,
ul,
dl,
table,
blockquote {
  font-size: 1.05rem;
  margin: 0 0 1.5rem 0;
}

ul {
  padding: 0 1rem;
}

@media screen and (min-width: 800px) {
  p,
  ol,
  ul,
  dl,
  table,
  blockquote {
    font-size: 1.125rem;
  }

  ul {
    padding: 0 2rem;
  }
}

ul li p {
  margin: 0;
}

ul li ul {
  padding-left: 1rem;
  margin: 0;
}

ul li ul li {
  margin: 0;
}

ol li ol {
  margin-bottom: 0;
}

${'' /* until here */}

  h1,h2,h3,h4,h5 {
		transition: color  var(--transition-slow);
		color: var(--title-color);
		${'' /* margin: 2.75rem 0 1rem; */}
		${'' /* font-family: 'Poppins', sans-serif; */}
		${'' /* font-weight: 600; */}
		${'' /* line-height: 1.15; */}
  }

	h1 {
		${'' /* margin-top: 0;
		font-size: 1.802em; */}
	}

	h2 {
		${'' /* font-size:  1.602em; */}
	}

	h3 {
		${'' /* font-size: 1.424em; */}
	}

	h4 {
		${'' /* font-size: 1.266em; */}
	}

	h5 {
		${'' /* font-size: 1.125em; */}
	}

	small {
		${'' /* font-size: 0.889em; */}
	}

	strong {
		${'' /* font-weight: 600; */}
	}
`

export default Typography

import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
	body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1rem;
		line-height: 1.75;
	}

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1rem;
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
    margin-bottom: 1rem;
  }

  h3 code {
    font-size: 1.4rem !important;
  }

  h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
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
    margin-bottom: 1.5rem;
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
`

export default Typography

import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Koła Gospodyń' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="app">
      <header>
        <Link href={{ pathname: '/' }}><a>Logo</a></Link>
        <h1>App Header</h1>
      </header>
      { children }
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>

    <style global jsx>
      {``}
    </style>

    <style jsx>
      {``}
    </style>
  </div>
)

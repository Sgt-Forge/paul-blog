import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/util.module.css'

const name = 'Paul Nakoniecnzy'
const title = 'Paul Blog'

export default function Layout({ children, home }) {
    return <div className={layoutStyles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Read some boring things I have to say"
            />

        </Head>
        <header className={layoutStyles.container}>
            { home ?  (
                <>
                    <Image
                        priority
                        src="/../public/images/paul_nakonieczny.JPG"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/../public/images/paul_nakonieczny.JPG"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>
            {children}
        </main>
        {!home && (
        <div className={utilStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
}
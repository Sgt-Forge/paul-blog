import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Paul's Blog
        </h1>

        <div className={styles.grid}>
          <a href="/posts/all" className={styles.card}>
            <h2>Here are my blog posts</h2>
          </a>
          <a href="/photos/all" className={styles.card}>
            <h2>Here are my photos</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&#169;Paul Nakonieczny 2021</p>
      </footer>
    </div>
  )
}

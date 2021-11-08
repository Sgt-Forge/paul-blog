import Link from 'next/link'

import Layout from '../components/layout'
import utilStyles from '../styles/util.module.css'
import { getSortedPostsData } from '../lib/posts'

// export async function getStaticPaths() {
//     const paths = getAllPostsIds()
//     return {
//         paths,
//         fallback: false
//     }
// }

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function All({ allPostsData }) {
    return ( 
        <Layout>
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, date, title}) => (
                    <li key={id} className={utilStyles.listItem}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
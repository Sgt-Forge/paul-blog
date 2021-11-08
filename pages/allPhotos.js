import Link from 'next/link'

import Layout from '../components/layout'
import utilStyles from '../styles/util.module.css'
import { getSortedPhotoData } from '../lib/photos'

// export async function getStaticPaths() {
//     const paths = getAllPhotoIds()
//     return {
//         paths,
//         fallback: false
//     }
// }

export async function getStaticProps() {
    const allPhotoData = await getSortedPhotoData()
    return {
        props: {
            allPhotoData
        }
    }
}

export default function All({ allPhotoData }) {
    return ( 
        <Layout>
            <ul className={utilStyles.list}>
                {allPhotoData.map( ({id, fullPath, order}) => (
                    <li key={id} className={utilStyles.listItem}>
                        <Link href={`/photos/${id}`}>
                            <a>{id}</a>
                        </Link>
                        <p>{fullPath}, {order}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
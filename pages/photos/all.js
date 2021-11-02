import Link from 'next/link'

import Layout from '../../components/layout'
import utilStyles from '../../styles/util.module.css'
import { getAllPhotoIds } from '../../lib/photos'

// export async function getStaticPaths() {
//     const paths = getAllPostsIds()
//     return {
//         paths,
//         fallback: false
//     }
// }

export async function getStaticProps() {
    const allPhotoIds = await getAllPhotoIds()
    return {
        props: {
            allPhotoIds
        }
    }
}

export default function All({ allPhotoIds }) {
    return ( 
        <Layout>
            <ul className={utilStyles.list}>
                {allPhotoIds.map(({id}) => (
                    <li className={utilStyles.listItem}>
                        <Link href={`/photos/${id}`}>
                            <a>Photo</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
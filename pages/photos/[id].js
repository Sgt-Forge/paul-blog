import Image from 'next/image'
import path from 'path'

import utilStyles from '../../styles/util.module.css'
import Layout from '../../components/layout'
import { getAllPhotoIds, getPhotoData } from '../../lib/photos'

const photosDirectory = path.join(process.cwd(), 'public/images/')

export async function getStaticPaths() {
    const paths = getAllPhotoIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const photoData = getPhotoData(params.id)
    return {
        props: {
            photoData
        }
    }
}

export default function Photo({ photoData }) {
    return ( 
        <Layout>
            <Image
                priority
                src={photoData.fullPath}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={photoData.fullPath}
            />
        </Layout>
    )
}
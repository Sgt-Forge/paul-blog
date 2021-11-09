import Image from 'next/image'
import path from 'path'

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
    const photoData = await getPhotoData(params.id)
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
                height={648}
                width={864}
                alt={photoData.title}
            />
            <h1>{photoData.title}</h1>
            <h3>{photoData.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: photoData.contentHtml }} />
        </Layout>
    )
}
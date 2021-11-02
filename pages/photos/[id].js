import Layout from '../../components/layout'
// import { getAllPostsIds, getPostData } from '../../lib/photos'

// export async function getStaticPaths() {
//     const paths = getAllPostsIds()
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const postData = await getPostData(params.id)
//     return {
//         props: {
//             postData
//         }
//     }
// }

export default function Photo({ postData }) {
    return ( 
        <Layout>
            <h1>Hi</h1>
        </Layout>
    )
}
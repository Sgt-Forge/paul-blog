import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const photosDirectory = path.join(process.cwd(), 'public/images/')
const descriptionDirectory = path.join(process.cwd(), 'public/image_descriptions/')

export function getSortedPhotoData() {
    const fileNames = fs.readdirSync(photosDirectory)
    const allPhotosData = fileNames.map(fileName => {
        const id = fileName.replace(/\.JPG$/, '')
        const fullPath = path.join(photosDirectory, fileName)
        const order = fileName.split('_')[1]

        // Read markdown file as string
        const descriptionPath = path.join(descriptionDirectory, `${id}.md`)
        const fileContents = fs.readFileSync(descriptionPath, 'utf-8')

        // Use gray=matter to parse the post metadata section
        const matterResult = matter(fileContents)
        
        return {
            id, 
            fullPath, 
            order, 
            ...matterResult.data
        }
    })
    console.log(allPhotosData)

    return allPhotosData.sort(( {order: a}, { order: b } ) => {
        if (a < b) {
            return 1
        } else if (b > a) {
            return -1 
        }
        return 0
    })
}

export function getAllPhotoIds() {
    const fileNames = fs.readdirSync(photosDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.JPG$/, '')
            }
        }
    })
}

export async function getPhotoData(id) {
    const fullPath = `/images/${id}.JPG`
    const descriptionPath = path.join(descriptionDirectory, `${id}.md`)
    const descriptionContents = fs.readFileSync(descriptionPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(descriptionContents)
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return {
        id,
        fullPath,
        contentHtml,
        ...matterResult.data
    }
}

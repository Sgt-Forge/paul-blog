import fs from 'fs'
import path from 'path'

const photosDirectory = path.join(process.cwd(), 'posts/photos')

export function getAllPhotoIds() {
    const fileNames = fs.readdirSync(photosDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.jpg$/, '')
            }
        }
    })
}

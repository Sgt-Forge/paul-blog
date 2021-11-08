import fs from 'fs'
import path from 'path'

const photosDirectory = path.join(process.cwd(), 'public/images/')

export function getSortedPhotoData() {
    const fileNames = fs.readdirSync(photosDirectory)
    const allPhotosData = fileNames.map(fileName => {
        const id = fileName.replace(/\.JPG$/, '')
        const fullPath = path.join(photosDirectory, fileName)
        const order = fileName.split('_')[1]

        return {
            id, fullPath, order
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

export function getPhotoData(id) {
    const photoPath = `/images/${id}.JPG`
    return {
        id: id,
        fullPath: photoPath 
    }
}

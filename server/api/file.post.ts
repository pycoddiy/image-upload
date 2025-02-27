import path from 'path'
import fs from 'fs'

export default defineEventHandler(async (event) => {
    try {
        const files = await readMultipartFormData(event)
        // console.log(files)
        if (!files) {
            return createError({statusCode: 400, data: "No files found in the request"})
        }
        const uploadedFilePaths: string[] = []
        files.forEach((file) => {
            const filePath = path.join(process.cwd(), 'public', file.filename as string)
            fs.writeFileSync(filePath, file.data)
            uploadedFilePaths.push(file.filename as string)
        })
        return uploadedFilePaths
    } catch (error) {
        return createError({statusCode: 500, data: "Unknown error on server side"})
    }
})

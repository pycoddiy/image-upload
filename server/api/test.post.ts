import { writeFile } from "fs/promises"
import  { v4 } from "uuid"


export default defineEventHandler(async (event) => {
    try {
        const files = await readMultipartFormData(event)
        if (!files) {
            return createError({status: 400, data: "No files selected"}) 
    }
    } catch (error) {
        return createError( {statusCode: 500, data: "Something went wrong in the server"} )
    }
    // const formData:any = await readMultipartFormData(event)

    // const file = formData.find( (item:any) => item.name === 'avatar')
    // const originalFileName = file.filename

    // const path = './uploads/' + v4() + '.' + originalFileName.split('.').pop()
    // await writeFile(path, file.data)
    // return { path }
})

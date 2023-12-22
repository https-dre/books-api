import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'storage')
    },
    filename: (req, file, cb)=>{
        const nameFile = file.fieldname + '-' + req.body.name.replace(' ', '_')
        cb(null,  nameFile)
    }
})

const upload = multer({
    storage : storage
})

export { upload }
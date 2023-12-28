import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        if(file)
        {
            console.log('Salvando ' + file.filename)
            cb(null, 'storage')
        }
    },
    filename: (req, file, cb)=>{
        if(file)
        {
            const reqName = req.body.name.toString().replace(' ', '-').replace('.', '_')
            const nameFile = file.fieldname + "-" + reqName + "-" + file.originalname
            cb(null,  nameFile)
        }
    }
})

const upload = multer({
    storage : storage
})

export { upload }
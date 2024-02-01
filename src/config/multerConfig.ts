import multer from "multer"

import * as path from "path"

const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'aplication/epub', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file) {
            console.log('Salvando ' + file.filename)
            cb(null, 'storage')
        }
    },
    filename: (req, file, cb) => {
        if (allowedMimes.includes(file.mimetype)) {
            const reqName = req.body.name ? req.body.name.toString().replace(/\s/g, '-').replace(/\./g, '_') : 'default';
            const nameFile = `${file.fieldname}-${reqName}-${Date.now()}${path.extname(file.originalname)}`;
            cb(null, nameFile);
        } else {
            cb(new Error('Tipo de arquivo não permitido.'), "null");
        }
    }
})

const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.includes('php') || file.mimetype.includes('ph') || file.mimetype.includes('py')) {
        cb(new Error('Tipo de arquivo inválido. Apenas documentos e imagems são permitidos.'), false); // Rejeita o arquivo
    }
    else if (allowedMimes.includes(file.mimetype)) {
        cb(null, true); // Aceita o arquivo
    } else {
        cb(new Error('Tipo de arquivo inválido. Apenas documentos e imagems são permitidos.'), false); // Rejeita o arquivo
    }
};

const upload = multer({
    storage: storage,
    fileFilter
})

export { upload }
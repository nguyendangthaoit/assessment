import Controller from "interfaces/controller.interface";
import * as express from 'express';
import * as multer from "multer";
const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        cb(null, true);
    },
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            if (file.mimetype.includes('image'))
                next(null, 'src/uploads/images');
            else
                next(null, 'src/uploads/files');
        },
        filename: function (req, file, next) {
            if (file.mimetype.includes('image')) {
                const ext = file.mimetype.split('/')[1];
                next(null, "image" + '-' + Date.now() + '.' + ext);
            } else {
                next(null, Date.now() + '-' + file.originalname);
            }

        },
    })
});

class AccountController implements Controller {

    public router = express.Router();
    public path = '/account';
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router
            .get(this.path + '/detail' + '/:_id', this.detail)
            .post(this.path + "/uploadImage", upload.single("image"), this.uploadImage)
    }

    private detail = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        return response.send();
    }

    private uploadImage = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
		if (!request.file) {
		  return response.send({
		    status: -1,
		    message: "don't have file",
		  });
		}
		return response.send({
		  logo_path: request.file.filename
		});
	};

}
export default AccountController;
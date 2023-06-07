import createHandler from '../../lib/middlewares/nextConnect'

import validate from '../../lib/middlewares/validation'
import { signupUser } from "../../modules/user/user.service";
import { signupSchema } from "../../modules/user/user.schema"

const signup = createHandler()

signup.post(validate({body: signupSchema}),(req, res) => {
    signupUser(req.body)
    res.status(200).json({teste: "okokokok"})
})

export default signup;
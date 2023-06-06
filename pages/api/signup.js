import connect from 'next-connect';
import Joi from 'joi';
import validate from '../../lib/middlewares/validation'
import { signupUser } from "../../modules/user/user.service";
import { signupSchema } from "../../modules/user/user.schema"


  const signup = connect()
    .post(validate({body: signupSchema}),(req, res) => {
      signupUser(req.body)
      res.status(200).json({teste: "okokokok"})
  })

export default signup;
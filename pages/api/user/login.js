import Joi from 'joi'
import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validate'
import { login } from '../../../modules/user/user.service'

import { loginSchema } from '../../../modules/user/user.schema'
import { ironConfig } from '../../../lib/middlewares/ironSession'

const handler = createHandler()

handler.post(validate({ body : loginSchema }), async (req, res) => {
  try{
    const user = await login(req.body)
    req.session.user = {
      id: user._id,
      email: user.email
    }
    await req.session.save()
    res.send({ ok: true })

  } catch(err) {  
    console.error(err)
    throw err
  }
})

export default withIronSessionApiRoute(handler, ironConfig)
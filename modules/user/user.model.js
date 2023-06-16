import mongoose from 'mongoose'

const UserSchema =  new mongoose.Schema({
  firstName: {type: String, required: true, maxlength: 50},
  lastName: {type: String, required: true, maxlength: 50},
  date:{type: String, required: true},
  email: {type: String, required: true, maxlength: 30, unique: true},
  cpf: {type: String, required: true, maxlength: 11, minLength:11, unique: true},
  sex: {type: String, required: true, maxlength: 50},
  password: { type: String, required: true },
  number:{type: String, required: true}
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
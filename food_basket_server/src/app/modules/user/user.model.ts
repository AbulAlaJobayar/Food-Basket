import mongoose from 'mongoose'
import { TUser } from './user.interface'
const { Schema } = mongoose
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUser>(
  {
    name: String,
    email: { type: String, unique: true },
    facebookId: { type: String, unique: true },
    googleId: { type: String, unique: true },
    password: String,
    image: String,
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
)
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  user.password = await bcrypt.hash(user.password, 10)
  next()
})
userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})
export const User = mongoose.model<TUser>('User', userSchema)

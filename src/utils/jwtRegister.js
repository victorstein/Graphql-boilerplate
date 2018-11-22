import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const { JWT_SECRET } = process.env

export default (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn: '1 day' }, (err, token) => {
      if (err) {
        reject(err)
      }
      resolve(token)
    })
  })
}

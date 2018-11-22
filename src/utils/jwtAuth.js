import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const { JWT_SECRET } = process.env

export default (token) => {
  // Split token from bearer
  token = token.split(' ')[1]

  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err)
      }
      resolve(decoded)
    })
  })
}

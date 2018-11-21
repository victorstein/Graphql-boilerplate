import bcrypt from 'bcrypt'

export default (pw) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pw, 10, (e, hash) => {
      if (e) { reject(e) }
      resolve(hash)
    })
  })
}

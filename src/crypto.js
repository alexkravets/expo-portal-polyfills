
import sha256 from 'js-sha256'
import { Buffer } from 'buffer'

const createHash = () => {
  return {
    update: (value) => {
      const hash = sha256(value)

      return {
        digest: () => Buffer.from(hash)
      }
    }
  }
}

export default {
  createHash
}

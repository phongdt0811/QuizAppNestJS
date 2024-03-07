import * as crypto from 'crypto';
import * as _ from 'lodash';

const algorithm = 'aes-256-cbc';
const key = process.env.SECRET;
const iv = crypto.randomBytes(16);

export const encryptPassword = (text: string): string => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export const decryptPassword = (encryptedText: string): string => {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

export const comparePassword = (params: {passwordRaw: string, encryptedPassword:string}) : boolean => {
    const decryptPasswordValue = decryptPassword(params.encryptedPassword);
    return _.isEquals(params.passwordRaw, decryptPasswordValue);
}
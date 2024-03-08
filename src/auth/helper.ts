import * as crypto from 'crypto';
import * as _ from 'lodash';
import { SALT, SECRET_HASH } from '../constants';

const algorithm = 'AES-256-CBC';
const key = SECRET_HASH;
const iv = crypto.randomBytes(16);
const salt = SALT
const derivedKey = crypto.scryptSync(key, salt, 32);

import { hash, compare } from 'bcrypt'

export const encryptPassword = function (password: string) : Promise<string> {
  const saltRounds = 10
  return hash(password, saltRounds)
}

export const comparePassword = async (password: string, hash: string) : Promise<boolean> => {
  return compare(password, hash)
}

export const _encryptPassword = (text: string): string => {
  console.log(text);
  const cipher = crypto.createCipheriv('AES-256-CBC', derivedKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export const decryptPassword = (encryptedText: string): string => {
  const decipher = crypto.createDecipheriv('AES-256-CBC', derivedKey, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export const _comparePassword = (params: {passwordRaw: string, encryptedPassword:string}) : boolean => {
  
    const a = encryptPassword("123456");
    console.log(a);
    const b = decryptPassword("49dd81615e13ab667dd01acb90d040c2");
    console.log(b);
    const decryptPasswordValue = decryptPassword(params.encryptedPassword);
    console.log('decryptPasswordValue: ', decryptPasswordValue);
    return _.isEquals(params.passwordRaw, decryptPasswordValue);
}

function generateStrongKey(length: number): string {
  return crypto.randomBytes(length).toString('hex');
}

// Example: Generate a 32-byte (256-bit) key
// const strongKey = generateStrongKey(32);
// console.log(strongKey);  
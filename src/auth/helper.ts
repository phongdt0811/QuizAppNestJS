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
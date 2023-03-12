import * as Crypto from 'expo-crypto';

export const generateRandomHex = (size = 10) =>
  [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

export const generateUuid = () => Crypto.randomUUID();

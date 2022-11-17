require('dotenv').config()

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': process.env.transform == 'swc' ? '@swc/jest' : 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  cacheDirectory: "./node_modules/.jest",
}
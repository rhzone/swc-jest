/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
}
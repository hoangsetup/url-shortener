module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/{ApiApp,server}.ts"
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
}

module.exports = {
  preset: '@shelf/jest-mongodb',
  roots: ["<rootDir>/"], // NOTE Not `"<rootDir>/src"` - this is to include `test` folder, sibling to `src`
  testMatch: [
    "**/test/**/*.+(ts|tsx|js)",
    // "!**/test/shared/*.+(ts|tsx|js)",
    "!**/test/shared/(*.)+(spec|test).+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc-node/jest",

      // configuration
      {
        sourcemap: "inline"
      },
    ],
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 10,
    },
  },
};

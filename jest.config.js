
module.exports = {
  "collectCoverage": true,
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  "setupFilesAfterEnv": [
    "./setupTests.js"
  ],
  "testEnvironment": "jsdom",
  "collectCoverageFrom": [
    "**/*.{js,jsx,ts,tsx}",
  ],
  "coverageDirectory": "cover",
  "coverageReporters": ["clover", "json", "lcov", ["text", {"skipFull": true}]]
}
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",             
  testEnvironment: "jsdom",     
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], 
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)"  
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

module.exports = {
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@common(.*)$': '<rootDir>/src/common$1',
    '^@context(.*)$': '<rootDir>/src/common/context$1',
    '^@components(.*)$': '<rootDir>/src/common/components$1',
    '^@features(.*)$': '<rootDir>/src/features$1',
    '^@pages(.*)$': '<rootDir>/src/pages',
    '^@utils(.*)$': '<rootDir>/src/common/utils$1',
    '^@styles(.*)$': '<rootDir>/src/common/styles$1',
    '^@static(.*)$': '<rootDir>/static',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js'],
};

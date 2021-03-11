module.exports = {
    rootDir: '../src',
    transform: {
        '\\.tsx?$': 'babel-jest',
        '\\.js$': 'babel-jest',
    },
    testRegex: '\\.(test|spec)\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['../jest/setupJest.js', '../jest/setupEnzyme.ts'],
    transformIgnorePatterns: [
        // compile just antd for tests
        '/node_modules/(?!.*@(babel|ant-design)|antd|css-animation|rc-[s]*).+\\.js$',
    ],
    reporters: ['default', ['jest-junit', { output: './tests.xml' }]],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/../jest/svgrMock.js',
        '\\.png$': '<rootDir>/../jest/fileMock.js',
        '\\.css$': '<rootDir>/../jest/styleMock.js',
        '\\.scss$': '<rootDir>/../jest/styleMock.js',
        '^components/(.*)$': '<rootDir>/components/$1',
        '^sections/(.*)$': '<rootDir>/sections/$1',
        '^utils/(.*)$': '<rootDir>/utils/$1',
        '^hooks/(.*)$': '<rootDir>/hooks/$1',
        '^types/(.*)$': '<rootDir>/types/$1',
    },
    setupFiles: ['jest-localstorage-mock', 'jest-canvas-mock'],
    globals: {
        CONFIG: {
            ENVIRONMENT: 'development',
            API_URL: 'http://localhost:8080',
            PRODUCTS_LIST_LIMIT: 5,
        },
    },
    testTimeout: 30000,
};
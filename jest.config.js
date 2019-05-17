// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
module.exports = {
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testRegex: "tests/Translation.*Tests\\.ts$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/", "/src/"],
    moduleFileExtensions: ["ts", "js", "jsx", "json", "node"],
    collectCoverage: true,
    "reporters": [ "default", "jest-junit" ],
    setupTestFrameworkScriptFile:"./secrets/TestConfiguration.ts"
};

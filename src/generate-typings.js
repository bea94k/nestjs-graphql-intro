"use strict";
exports.__esModule = true;
var graphql_1 = require("@nestjs/graphql");
var path_1 = require("path");
var definitionsFactory = new graphql_1.GraphQLDefinitionsFactory();
definitionsFactory.generate({
    // where is the schema - any file in src that has .graphql extension
    typePaths: ['./src/**/*.graphql'],
    // where the TS classes will be created
    path: path_1.join(process.cwd(), 'src/graphql.ts'),
    // by default output is interfaces
    outputAs: 'class'
});

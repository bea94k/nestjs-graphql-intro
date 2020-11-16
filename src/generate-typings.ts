import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";


const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
    // where is the schema - any file in src that has .graphql extension
    typePaths: ['./src/**/*.graphql'],
    // where the TS classes will be created
    path: join(process.cwd(), 'src/graphql.ts'),
    // by default output is interfaces
    outputAs: 'class'
});
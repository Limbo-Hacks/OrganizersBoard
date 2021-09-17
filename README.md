# About

A board where all the organizers have access to the details of the hackers, organizers and mentors.

## Frontend

### Notice
Frontend is not complete.

### Directories
[Kofta](https://github.com/Limbo-Hacks/OrganizersBoard/tree/main/kofta) is the directory for the frontend part.

[GraphQL](https://github.com/Limbo-Hacks/OrganizersBoard/tree/main/kofta/src/graphql) is for all the mutations and queries schemas.

### Stacks
- `ReactJS` with TypeScript
- `ApolloClient` for Client side GraphQL
- `GraphQL Codegen` for creating client side frontend GraphQL classes.

## Backend

### Directories

[src](https://github.com/Limbo-Hacks/OrganizersBoard/tree/main/server/src) is for all the backend code.

[index.ts](https://github.com/Limbo-Hacks/OrganizersBoard/blob/main/server/src/index.ts) is the root file and the lambda function is there.

### Stacks
- `apollo-server-express` is used as graphql provide with express as a middleware
- `TypeORM` for all the SQLite database entities and database operations in general
- `TypeGraphQL` helps to use GraphQL in typescript more easily.

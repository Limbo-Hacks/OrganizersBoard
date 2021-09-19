## Setting up backend
- Node.js v16.1.0
- Sqlite3
- TypeORM CLI


Steps to run this project:

1. Run `yarn` command
2. Setup database settings inside `ormconfig.yml` file
3. Replace `.env.example` file with `.env` and replace the password and accessToken
4. Run `yarn start` command
5. Open `http://localhost:4000/graphql` in your browser.

Schemas and Mutations:

1. ### Schemas
- `query{hello}`   For checking if the graphql server is working or not

- `query{bye}`     For checking if middleware is working or not

- `query{hacker}`  For returning all the hackers which are registered.

2. ### Mutations

``Will update soon...``
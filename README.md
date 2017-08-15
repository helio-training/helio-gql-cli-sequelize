<img src="http://i.imgur.com/UzC7XPe.png" alt="Helio Training" width="226" align="center"/> v1.0

---------------

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# GraphQL Sequelize

Basic template for initializing a GraphQL service with Express, Apollo Server, and Sequelize (Postgres) - with a little touch of magic.

## Quick Start (Requires Docker)

1. `docker-compose up`
2. Navigate to [Adminer](http://localhost:8080)
3. Login with credentials (Postgres)
    - _Username:_ dev
    - _Password_: devdb
4. Create a new database for your application
5. Edit the `src/db/connections.json` file and put in your db name
6. Kill the docker service with `Ctrl+C` and re-run `docker-compose up`


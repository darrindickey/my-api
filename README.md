# my-api
A simple generic API service using NodeJS, Prisma and Apollo Server 2

Clone the repo to your machine

"cd my-api"

Update the docker-compose.yml to connect to your Postgres database

"docker-compose up -d" - Bring up your Docker container and connect to database

"prisma deploy" - This will deploy Prisma, then run the generator

"yarn run" - This will start the Apollo Server

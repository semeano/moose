# Moose


## System dependencies

[NodeJS](https://nodejs.org/)
[MongoDB](https://www.mongodb.org)


## Install app dependencies

		$ npm install && bower install


## Build

		$ gulp

or

		$ gulp build


## Run dev server on localhost

		$ gulp serve

You'll need a server running in the back. Open a new window and run

		$ node server/app


## Run prod server on localhost

		$ gulp && node server/app

### Note: for a dev or prod serve you'll need MongoDB deamon running in the back

		$ mongod

## Seed DB

		$ mongoimport --db moose-dev --collection projects --type json --file server/seed/projects.json --jsonArray --drop

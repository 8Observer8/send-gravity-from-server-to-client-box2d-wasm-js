Instructions for building and running the project in debug and release:

- Install this package globally with the command:

> npm i -g nodemon rollup uglify-js

- Run http-server in the project directory:

> nodemon src/server/app.js

- Start development mode with the following command:

> npm run dev

Note. Rollup will automatically keep track of saving changes to files and build a new index.js file ready for debugging. You can debug your project step by step in the browser by setting breakpoints.

- Go to the browser and type: localhost:3000

- Create a compressed file ready for publishing. Stop development mode, for example, with this command Ctrl + C in CMD, if it was launched before and enter the command:

> npm run release

Note. After this command, Rollup will create a compressed index.js file. Compression is done using the uglify-js package.

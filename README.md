# Web API Stories

User stories for practice building web APIs.

## Install

Enter the commands below in your terminal to get started:

```sh
cd ~/workspace
git clone git@github.com:dev-academy-challenges/web-api-stories.git
cd web-api-stories
git checkout -b <branchname>
npm install
npx knex migrate:latest
npx knex seed:run
```

Visit http://localhost:3000/users in your browser. If all went well, you should see a list of users.

## MVP

_As a developer, I want a list of users so that I can display a list of users on the site._

_As a developer, I want to get the details of a single user so that I can populate their profile page._

_As a developer, I want to add a new user so that their information can be recalled at a later time._

* You'll have to add a new `addUser` function to `db.js` in order for the route to save the new user.
* You can use Postman to pass a new JSON user to the API.
* You can leave off the `id` because the database schema has an auto-increment on the `id` field.

_As a developer, I want to update an existing user so they can keep their details current._

* You'll have to add a new `updateUser` function to `db.js` in order for the route to save the new user.
* You can use Postman to pass an existing JSON user to the API.
* You'll need to use the `id` of an existing user so it will know which user to update.


## Testing

Create tests for each of the routes in the MVP.


## Stretch

_As a developer, I want to select, add, update and delete `activities` (like hobbies) that have `name`, `frequency`, `level` attributes._

* You'll need to create a `routes/activities.js` file and the middleware link in `server.js`.
* You'll need to create the appropriate migrations, seeds and functions in `db.js`.

_As a developer, I want an example of a script that consumes the MVP API._

* Write a standalone `index.js` file that uses `superagent` to consume the MVP API.

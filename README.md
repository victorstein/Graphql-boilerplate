# GraphQL API boilerplate

This is a boilerplate of a graphQL API with apollo server 2.0, Express, Webpack, Babel, dotenv, nodemon, jsonwebtoken, bcrypt and mongoose.

### Installation

Just clone the repo
```git clone https://github.com/victorstein/Graphql-boilerplate```

add a .env file to the root containing the following schema

```
PORT = INT //Port to run the app
NODE_ENV = STRING //"development" or "production"
DB_USER = STRING //mongodb user
DB_PASS = STRING //mongodb password
DB_URI = STRING //mongodb URI comes after the @ and before the port
DB_PORT = INT //mongodb port
DB_NAME = string //mongodb database name
```

### Run the server

After cloning cd into the directory and run :
```npm install```

when done run:
```npm run dev```

If you want to just build you may also:
```npm run build```
for just webpack compilation

### Contributions
Feel free to contribute to the growth or enhancement of the boilerplate by submitting a PR

### Author
Alfonso Gomez

### Pending stuff
```
adding jsonwebtoken
```

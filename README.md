# jepretgram
web app | mini social media

# REST API
Demo app with basic REST API
server use express, mongoose
client vuejs

#### List of endpoint USER API:
Route | HTTP | Description
----- | ---- | -----------
`/api/users` | GET | Get all the users info(admin only)
`/api/users/:id` | GET | Get a single user info(admin & user Auth)
`/api/users` | POST | Create a user(admin only)
`/api/users/:id` | DELETE | Delete a user(admin only)
`/api/users/:id` | PUT | Update a user with new info(admin & user Auth)
`/api/signup` | POST | Sign up with new User info
`/api/signin` | POST | Sign up while get an access token based on credentials

## Usage
#### With only npm:
```
cd server
npm install
touch .env | secretKey=yoursecretkey
npm start
```
```
cd client
npm install
npm run dev
```

Acces the via API   `http://localhost:3000/api`

Acces the website via client   `http://localhost:8080`

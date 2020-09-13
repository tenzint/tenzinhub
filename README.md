# tenzinhub
This is my 'MEVN' (MongoDB, Express.js, Vue.js, Node.js) full-stack web app. 

### Here is my plan for this project:
The server here will webscrape weather API, TTC API and show them to my Vue.js front end. I also plan to have some basic board games like 'Connect 4', and a Tibetan board game named 'Sho'. For this, I plan to implement a basic JWT-based authentication system and integrate socket.io for the games.

### Here is my progress:
- [ ] Front-end (Vue.js, VueX Store, Vue Router, Vuetify.js)
  - [ ] Setup a Nuxt.js web app skeleton (I'll try Nuxt.js instead of Vue CLI. I'm already very proficient with Vue CLI and only familiar with Nuxt.js)
  - [ ] Create a main dashboard page
    - [ ] Initialize and style the dashboard
    - [ ] Integrate all related components and finalize the dashboard page
  - [ ] Authentication pages
    - [ ] Create and style signup page
    - [ ] Create and style login page
  - [ ] Develop and style a weather page
    - [ ] Use axios to get weather API data from server
  - [ ] Develop and style TTC page
    - [ ] Use axios to get TTC data from server
  - [ ] Integrate socket.io to client-side
  - [ ] Create a dashboard page for games (path: `/games`)
  - [ ] Create a hub page for connect-4 game. Allow users to create game lobbies for other users to join and start a connect-4 game. Show all open lobbies.
    - [ ] Develop the main connect-4 game page. Create a div container to show the connect-4 game. Visualize the connect-4 stones and their placement properly based on their position data from the server.
  - [ ] Create a hub page for `Sho` - a Tibetan dice game. Allow users to create game lobbies for other users to join and start a connect-4 game. Show all open lobbies.
    - [ ] Develop the main `Sho` game.

-------------------------

- [ ] Back-end (Express.js, MongoDB/Mongoose, bcrypt)
  - [x] Setup an express.js skeleton server code via `npx express-generator`. Follow the [express.js guide page](https://expressjs.com/en/advanced/best-practice-security.html)
  - [ ] Connect the express.js server with Mongoose
  - [ ] Integrate a JWT-based authentication system with the server and store it persistently with MongoDB database
    - [ ] Develop logic for signing up new users
    - [ ] Develop logic for logging in and logging out users
  - [ ] Develop an API handler for weather API
    - [ ] Web scrape weather API data from external source given some options (locations, etc)
    - [ ] Serve the front-end with meaningful weather data
  - [ ] Develop an API handler for TTC API
    - [ ] Web scrape TTC API data from external source
    - [ ] Serve the front-end with meaningful TTC arrival data
  - [ ] Integrate socket.io to server side
  - [ ] Develop a system to simulate a connect-4 game progress and ending conditions
  - [ ] Develop a game system for the Tibetan die (2 ~~dice~~ plural) game. Simulate game progress and ending conditions, etc

-------------------------
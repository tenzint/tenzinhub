# tenzinhub
This is my 'MEVN' (MongoDB, Express.js, Vue.js, Node.js) full-stack web app. 

### Here is my plan for this project:
The server here will webscrape weather API, TTC API and show them to my Vue.js front end. I also plan to have some basic board games like 'Connect 4', and a Tibetan board game named 'Sho'. For this, I plan to implement a basic JWT-based authentication system and integrate socket.io for the games.

### Here is my progress:
#### Front-end (Vue.js, VueX Store, Vue Router, Vuetify.js + Nuxt.js)
- [ ] Overall front-end
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

-------------------------

#### Back-end (Express.js, MongoDB/Mongoose (ODM), JWT + bcrypt)
- [x] Overall backend
  - [x] Setup an express.js skeleton server code via `npx express-generator`. Follow the [express.js guide page](https://expressjs.com/en/advanced/best-practice-security.html)
  - [x] Connect the express.js server with Mongoose ODM (Object Data Mapping for MongoDB)
  - [x] Integrate a JWT-based authentication system with the server and store it persistently with MongoDB database. Use bcrypt to salt password
    - [x] Develop logic for signing up new users
    - [x] Develop logic for logging in users
  - [x] Develop an API handler for weather API
    - [x] Web scrape weather API data from external source given some options (locations, etc)
    - [x] Serve the front-end with meaningful weather data
  - [x] Develop an API handler for TTC API
    - [x] Web scrape TTC API data from external source
    - [x] Serve the front-end with meaningful TTC arrival data

-------------------------
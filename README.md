# tenzinhub
This is my 'MEVN' (MongoDB, Express.js, Vue.js, Node.js) full-stack web app. 

### Here is my plan for this project:
The server here will webscrape ~~weather API,~~ TTC API and show them to my Vue.js front end.

I have found an npm package named `weather-js` that scrapes weather data from weather.msn.com for me. Other alternatives require me to have API key or a user account. Those were simple and doable, but I felt `weather-js` is good enough for me.

I initially planned to have board games in this project but I am now seperating them into another project named `tenzingames`. I did integrate mongoose, bcryptjs, jsonwebtoken into backend server and created authentication API that will be left unused for this project.

### Here is my progress:
----------------------

#### Front-end (Vue.js, VueX Store, Vue Router, Vuetify.js + Nuxt.js)
- [ ] Overall front-end
  - [x] Setup a Nuxt.js web app skeleton (I'll try Nuxt.js instead of Vue CLI. I'm already very proficient with Vue CLI and only familiar with Nuxt.js)
  - [x] Create a main dashboard page
    - [x] Initialize and style the dashboard with a carousel
    - [x] Integrate all related components and finalize the dashboard page
  - [x] Develop and style a weather page
    - [x] Use Nuxt's http module (that has `ky` - made by same author of `got`) to get weather API data from server
  - [ ] Develop and style TTC page
    - [ ] Use Nuxt's http module to get TTC data from server
    - [x] ~~Use Google Map API~~ - Not going to use Google Map API for visual representation. They require credit card info and I don't want unwanted bill in the long run.

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

### Screenshots of working project

#### Client - Browser

Weather Page of Nuxt.js powered UI
![Weather Page](https://raw.githubusercontent.com/tenzint/tenzinhub/master/client/weather.png)

#### Server - Postman

Weather API using the Postman app
![Weather API](https://raw.githubusercontent.com/tenzint/tenzinhub/master/server/weather.png)

TTC Transit API specific route - Postman
![TTC specific route API](https://raw.githubusercontent.com/tenzint/tenzinhub/master/server/ttc-specific-route.png)

TTC Transit API predictions - Postman
![TTC Predictions API](https://raw.githubusercontent.com/tenzint/tenzinhub/master/server/ttc-predictions.png)

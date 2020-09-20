# Server's README file

To start in dev mode, run the code from the express generator page:

```
$env:DEBUG='server:*'; npm start
```
For more details, visit the [Express.js website](https://expressjs.com/en/starter/generator.html)

------------------------------

#### Personal experience notes:

- The server side follows the express.js framework, therefore it is about how well I adhere to it's documentation at its base and then add my own needed logic on top of it.
- The express.js documentation is decent. I liked the express generator, this way I am given a skeleton structure that makes sense to me. I'm using a MVC-like directory structure without the view, while using Mongoose as the ODM. Express.js is a minimalistic server that can `use` additional features on top of it. I liked the [Security best practices]() page that introduces helmet(https://expressjs.com/en/advanced/best-practice-security.html) etc
- For authentication, I chose Javascript Webtokens (JWT) over cookie-session combo. JWT is simple and a modern alternative to session (I believe JWT is newer, didn't research recently)
- For password hashing, I did read a [stack overflow](https://security.stackexchange.com/questions/26245/is-bcrypt-better-than-scrypt) and [reddit](https://www.reddit.com/r/node/comments/4u1jcn/is_bcrypt_the_best_possible_password_hashing/) post about bcrypt, scrypt, and PBKDF2. I ultimately decided to choose the time-tested bcrypt hash. I decided to install `bcrypt-js` because it is made with only javascript related code (and not C++ as most Node.js packages are)
- The weather API was really simple. A developer made an NPM package based on microsoft's weather system, named `weather-js`. This is good enough for me
- The TTC API wasn't easy to get my hands on (relative to weather API, but it is out there and free). After some minutes of searching, I came across the `myTTC.com` site, made by a group of passionate third-party devs. They have cool example sites made by others. I liked [http://whereismystreetcar.appspot.com/] the most and I plan to take inspiration from here! I was encouraged by `myTTC.com` to search city of Toronto's official website about free TTC API. Ultimately I got the API but I had a few misconceptions that are now cleared. 
  - I got to [Toronto.ca/Route-info-source](https://open.toronto.ca/dataset/ttc-routes-and-schedules/). There they had a code sample for "Developers". Turns out it was the same .zip folder available for download on the same page. I did read about GTFS, so that's a new thing I learned, which is cool. I didn't like the idea of parsing but turns out I didn't need to. 
  - I had the same misunderstanding with [Toronto.ca/nvas](https://open.toronto.ca/dataset/ttc-real-time-next-vehicle-arrival-nvas/). In my Postman app, I got the long JSON data that I skimmed through and only realized a while later that a field named `url` had the downloadable .zip file (for the routes and schedules) and a PDF file for this nvas. The PDF file had long and detailed explanation of how to use XML to get everything related to TTC API. In hindsight, they wrote it there that I should read the PDF doc to understand how to use the XML API.
- Web scraping is a cool, simple but very useful technique. I was already familiar with request, request-promise, bluebird, axios and fetch. I read [Github/Request-Past-Present-Future](https://github.com/request/request/issues/3142) page written by `mikeal` the original dev of request. He wrote about how request used to be a pioneer and now it is too big to cope up with recent rapid development. The post was very meaningful and cool. But basically, request will not be maintained any more. I felt like axios might face the same issue. I came across [got](https://github.com/sindresorhus/got#comparison) and decided to try/learn it. I don't really need a fancy package for this but I decided to get used to it.

#### Important Info

- [Official TTC API Documentation](https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/8217e43a-bba2-4e6c-82f5-bf6d1a52545d/resource/ec9a4a76-a963-4cfb-85d9-044b5a87af77/download/xml-feed-documentation.pdf)

### Screenshots of working project

#### Server - Postman

Weather API using the Postman app
![Weather API](https://raw.githubusercontent.com/tenzint/tenzinhub/master/server/weather.png)

TTC Transit API specific route - Postman
![TTC specific route API](https://raw.githubusercontent.com/tenzint/tenzinhub/master/server/ttc-specific-route.png)

TTC Transit API predictions - Postman
![TTC Predictions API](https://raw.githubusercontent.com/tenzint/tenzinhub/master/server/ttc-predictions.png)
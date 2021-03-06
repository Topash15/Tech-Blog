const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');
const hbs = exphbs.create({helpers});
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ||3001;

// session object
const sess = {
    secret: process.env.cookieSecret,
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

// intialize handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// use routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}.`));
})
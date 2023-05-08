const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var PORT = 3002
const userRouter = require("./routes/users");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy; 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); //<--blake what does this do
app.use(session({
  secret: '12345-67890-09876-54321',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
 
var uri = "mongodb+srv://eebalboni:j3Am4vgTXuRUufCf@cluster0.shlik9e.mongodb.net/autoGrader?retryWrites=true&w=majority";

const Student = require("./models/student");

//const Professor = require("./models/professor");
app.use(passport.initialize());

passport.use(new LocalStrategy(Student.authenticate())); //user.authenticated will be exported by  user model it will use passport-user-mongoose
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());


/* passport.use(new LocalStrategy(Professor.authenticate())); //user.authenticated will be exported by  user model it will use passport-user-mongoose
passport.serializeUser(Professor.serializeUser());
passport.deserializeUser(Professor.deserializeUser()); */

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));


// Routes
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie } = require("./movie/functions");
const { readMovie } = require("./movie/functions");
const { updateMovie } = require("./movie/functions");
const { deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to DB
  } 
  else if (yargsObj.read) {
    await readMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //list all movies from DB
  } 
  else if (yargsObj.update) {
    await updateMovie({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor });
    //update one movie from DB
  } 
  else if (yargsObj.delete) {
    await deleteMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //delete one movie from DB
  } 
  else {
    console.log("Incorrect command");
  }
  await mongoose.disconnect();
};

app(yargs.argv);
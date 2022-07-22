require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovie, filterMovie, updateMovie, deleteMovie } = require("./movie/functions");
const { createTVShow, readTVShow, filterTVShow, updateTVShow, deleteTVShow } = require("./tvShow/functions");


const app = async (yargsObj) => {
  if (yargsObj.create) {
    if (yargsObj.movie) {
      await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
      //adds movie to DB
    }
    else if (yargsObj.tvShow) {
      await createTVShow({ title: yargsObj.title, actor: yargsObj.actor });
      //adds TV Show to DB
    }
    else {
      console.log("Please state whether you wish to (C)reate a --movie or a --tvShow")
    }
  } 
  else if (yargsObj.read) {
    if (yargsObj.movie) {
      await readMovie({ title: yargsObj.title, actor: yargsObj.actor });
      //list all movies from DB
    }
    else if (yargsObj.tvShow) {
      await readTVShow({ title: yargsObj.title, actor: yargsObj.actor });
      //list all TV Shows from DB
    }
    else {
      console.log("Please state whether you wish to (R)ead from --movie or --tvShow DB")
    }
  }
  else if (yargsObj.filter) {
    if (yargsObj.movie) {
      await filterMovie({ title: yargsObj.title, actor: yargsObj.actor });
      //list all movies from DB
    }
    else if (yargsObj.tvShow) {
      await filterTVShow({ title: yargsObj.title, actor: yargsObj.actor });
      //list all TV Shows from DB
    }
    else {
      console.log("Please state whether you wish to (R)ead from --movie or --tvShow DB")
    }
  }
  else if (yargsObj.update) {
    if (yargsObj.movie) {
      await updateMovie({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor });
      //update one movie from DB
    }
    else if (yargsObj.tvShow) {
      await updateTVShow({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor });
      //update one TV Show from DB
    }
    else {
      console.log("Updating requires a few arguments")
      console.log("Usage case: app --update --movie --title --newTitle")
    }
  }
  else if (yargsObj.delete) {
    if (yargsObj.movie) {
      await deleteMovie({ title: yargsObj.title, actor: yargsObj.actor });
      //delete one movie from DB
    }
    else if (yargsObj.tvShow) {
      await deleteTVShow({ title: yargsObj.title, actor: yargsObj.actor });
      //delete one TV Show from DB
    }
  } 
  else {
    console.log("Incorrect command");
  }
  await mongoose.disconnect();
};

app(yargs.argv);
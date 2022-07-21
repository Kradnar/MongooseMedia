const Movie = require("./model");

exports.createMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } 
  catch (error) {
    console.log(error);
  }
};
exports.readMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const results = await Movie.find()
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};
exports.updateMovie = async (movieObj) => {
  try {
    if (movieObj.title) {
      const results = await Movie.findOne({title: movieObj.title});
      console.log(results);
      console.log("Has been updated to...")
      
      await Movie.updateOne({title: movieObj.title}, {$set: {title: movieObj.newTitle}}); //! - Not Working yet
      const results2 = await Movie.findOne({title: movieObj.newTitle});
      console.log(results2);
    }
    else if (movieObj.actor) {
      const results = await Movie.findOne({actor: movieObj.actor});
      console.log(results);
      console.log("Has been updated to...")
      await Movie.updateOne({title: movieObj.actor}, {$set: {title: movieObj.newActor}}); //! - Not Working yet
      const results2 = await collection.findOne({title: movieObj.newActor});
      console.log(results2);
    }
    else {
      console.log("Please Specify (--title or --actor) and (--newTitle or --newActor) respectively")
    }
  }
  catch (error) {
    console.log(error);
  }
};
exports.deleteMovie = async (movieObj) => {
  try {
    if (movieObj.title) {
      const results = await Movie.findOne({title: movieObj.title});
      console.log(results);
      const delItem = await Movie.deleteOne({title: movieObj.title});
      console.log("Has been deleted")
      if (delItem.deletedCount === 1) {
        console.log("Successfully deleted one item");
      } 
      else {
        console.log("No documents to delete")
      }
    } 
    else if (movieObj.actor) {
      const results = await Movie.findOne({actor: movieObj.actor});
      console.log(results);
      const delItem = await Movie.deleteOne({actor: movieObj.actor});
      console.log("Has been deleted")
      if (delItem.deletedCount === 1) {
        console.log("Successfully deleted one item");
      } 
      else {
        console.log("No documents to delete")
      }
    } 
    else {
      console.log("Please Specify --title or --actor")
    }
  }
  catch (error) {
    console.log(error);
  }
};
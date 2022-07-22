const TVShow = require("./model");

exports.createTVShow = async (tvShowObj) => {
  try {
    console.log(tvShowObj);
    const newTVShow = await TVShow.create(tvShowObj);
    console.log(newTVShow);
  } 
  catch (error) {
    console.log(error);
  }
};
exports.readTVShow = async (tvShowObj) => {
  try {
    console.log(tvShowObj);
    const results = await TVShow.find()
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};
exports.filterTVShow = async (tvShowObj) => {
  try {
    console.log(tvShowObj);
    const results = await TVShow.findOne({title: tvShowObj.title});
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
}
exports.updateTVShow = async (tvShowObj) => {
  try {
    if (tvShowObj.title) {
      const results = await TVShow.findOne({title: tvShowObj.title});
      console.log(results);
      console.log("Has been updated to...")
      
      await TVShow.updateOne({title: tvShowObj.title}, {$set: {title: tvShowObj.newTitle}});
      const results2 = await TVShow.findOne({title: tvShowObj.newTitle});
      console.log(results2);
    }
    else if (tvShowObj.actor) {
      const results = await TVShow.findOne({actor: tvShowObj.actor});
      console.log(results);
      console.log("Has been updated to...")
      await TVShow.updateOne({title: tvShowObj.actor}, {$set: {title: tvShowObj.newActor}});
      const results2 = await collection.findOne({title: tvShowObj.newActor});
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
exports.deleteTVShow = async (tvShowObj) => {
  try {
    if (tvShowObj.title) {
      const results = await TVShow.findOne({title: tvShowObj.title});
      console.log(results);
      const delItem = await TVShow.deleteOne({title: tvShowObj.title});
      console.log("Has been deleted")
      if (delItem.deletedCount === 1) {
        console.log("Successfully deleted one item");
      } 
      else {
        console.log("No documents to delete")
      }
    } 
    else if (tvShowObj.actor) {
      const results = await TVShow.findOne({actor: tvShowObj.actor});
      console.log(results);
      const delItem = await TVShow.deleteOne({actor: tvShowObj.actor});
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
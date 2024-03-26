const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  UserName: String,
  image: {
    type: String,
  },
    Recipename: {
        type: String,
      },
      Description: {
        type: String,
      },
      PrepTime:{
        type: String,
      },
      cookTime:{
        type : String
      },
      ResTime :{
        type:String
      },
      TotalTime:{
        type : String
      },
      Ingredients: {
        type: Array,
      },
      Procedure: {
        type: Array,
      },
      Categories: {
        type: Array,
      },
      Tipsntricks : String
    });
    
const recipeModel = mongoose.model('recipedata', recipeSchema);
module.exports = recipeModel;
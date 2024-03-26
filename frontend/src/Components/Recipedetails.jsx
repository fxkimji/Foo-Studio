import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../style/components.css"
import "../style/Reipepage.css"
import { TbHeart } from "react-icons/tb";
import { FaHeart } from 'react-icons/fa';
import ReactPlayer from 'react-player'

export default function Recipedetails () {
    const params  = useParams();
    const recipesl = params.recipeslug
    console.log(recipesl)
    const userData = useSelector(state => state.user)  
    console.log(userData._id)
    const userID = userData._id;

    const navigate = useNavigate();
    const[isFav , setisFav] = useState(false)
    const[Recipedetails , setRecipedetails] = useState([])
    const[SimilarRecipes , setSimilarRecipe] = useState([])

    useEffect(()=>{
      const fetchrecipedata = async()=>{
        const options = {
          method: 'GET',
          url: 'https://tasty-co.p.rapidapi.com/recipes/detail',
          params: {
            slug: recipesl
          },
          headers: {
            'X-RapidAPI-Key': '0cbfa07cc5msh369627804867a88p168987jsncbc754134af0',
            'X-RapidAPI-Host': 'tasty-co.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          const res = response.data.data.recipe;
          const result = {
            RecipeId : res.id,
            RecipeName : res.name,
            RecipeSlug : res.slug,
            RecipeDescription : res.description,
            Recipeserving : res.num_servings,
            RecIngredients : res.ingredient_sections,
            Recinstructions : res.instructions,
            RecImage : res.thumbnail_url,
            RecVideo : res.video_url
          }
          console.log(result)
          setRecipedetails(result)
          console.log(Recipedetails)
          const sim = response.data.data.relatedRecipes
          console.log(sim)

          const SimilarRecipesresult = sim.map(({id, name , slug , thumbnail_url })=>({
            recipename :name,
            recipeimage : thumbnail_url,
            recipeslug : slug,
            recipeid : id
          }))
          console.log(Recipedetails)
          setSimilarRecipe(SimilarRecipesresult)
          // console.log(SimilarRecipes)
         } 
        catch (error) {
          console.error(error);
        }
      }
      fetchrecipedata();
    },[recipesl])
    const Fav = {
      RecImage : Recipedetails.RecImage,
      RecipeId : Recipedetails.RecipeId,
      RecipeName : Recipedetails.RecipeName,
      recipeslug : Recipedetails.RecipeSlug,
    }
    const addtofave=(e)=>{
      if(userID === ''){
        alert("You need to login")
      }else{
        axios.post('http://localhost:5000/addfav', {userID, Fav })
            .then(result =>{
              alert("Receipe Successfully added to favourites")
              setisFav(true);
                console.log(result);
            })
            .catch(err=> console.log(err))
      }
    }

  return (
    <div class='main'>
      {(isFav)  ? <FaHeart></FaHeart> :<TbHeart onClick={addtofave}></TbHeart>}
        <div class="recipedetails">
        <h3>{Recipedetails.RecipeName}</h3>
        <div class="recimage">
          <img src= {Recipedetails.RecImage}/>
          <ReactPlayer controls url={Recipedetails.RecVideo}/>
        </div>
        <div class="description">
          <p>
            {Recipedetails.RecipeDescription}
          </p>
          <div class="ingredients">
            {Recipedetails.RecIngredients &&
            Recipedetails.RecIngredients.map(({ingredients, name}, index)=>{
              return(
                <>
                {name}
              {ingredients.map(({name , extra_comment, primary_unit})=>{
                return(
                  <li>{primary_unit.quantity} {primary_unit.display} {name} {extra_comment}</li>
                )
              })}
                </>
              )
              })
            }
          </div>
          <div class="procedure">
            {Recipedetails.Recinstructions && 
              Recipedetails.Recinstructions.map(({display_text}, index)=>{
                return(
                  <>
                  <li>Step {index+1} : {display_text}</li>
                  </>
                )
              })
            }
          </div>
        </div>
        </div>
    </div>
  )
}

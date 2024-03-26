import React, { useEffect, useState } from 'react'
import "../style/Category.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Categories() {
  const navigator = useNavigate();
  const [categoryres, setcategoryres] = useState([]);
  const params = useParams();
  const cat = params.Category
  useEffect(()=>{
    const fetchCategoryDetails = async()=>{
      const options = {
        method: 'GET',
        url: 'https://tasty-co.p.rapidapi.com/recipes/search-by-category',
        params: {
          category: cat
        },
        headers: {
          'X-RapidAPI-Key': '0cbfa07cc5msh369627804867a88p168987jsncbc754134af0',
          'X-RapidAPI-Host': 'tasty-co.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        const result = {
          Title : response.data.data.title,
          description : response.data.data.seo_description,
          items : response.data.data.items.map(({id, name , slug , thumbnail_url})=>({
            itemname : name,
            itemid : id,
            recipeslug : slug,
            itemimg : thumbnail_url
          }))
        }
        setcategoryres(result)
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategoryDetails();
  },[cat])

  return (
    <div class="main">
      <h3>{categoryres.Title}</h3>
      <p>{categoryres.description}</p>
      <div class="Category">
        {
        categoryres.items && 
        categoryres.items.map(({
          itemid,
          itemname,
          recipeslug,
          itemimg
        },index)=>{
          return(
            <>
            <div  class="categoryitems" onClick={()=>navigator(`/recipedetails/${recipeslug}`)}>
              <img src={itemimg}></img>
              <p>{itemname}</p>
            </div>
            </>
          );
        })
        }
      </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {FaSearch} from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import "../style/components.css"
import "../style/Fav.css"

export default function Search() {

    const [searchData , setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigator = useNavigate();

        const fetchSearchData=async()=>{    
        const options = {
            method: 'GET',
            url: 'https://tasty-co.p.rapidapi.com/recipes/search',
            params: {
              query: searchQuery
            },
            headers: {
              'X-RapidAPI-Key': '0cbfa07cc5msh369627804867a88p168987jsncbc754134af0',
              'X-RapidAPI-Host': 'tasty-co.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data.data);
              const result = response.data.data;
              const res = result.map(({name, thumbnail_url, slug, id})=>({
                recipename :name,
                recipeimage : thumbnail_url,
                recipeslug : slug,
                recipeid : id
              }))
              console.log(res)
              setSearchData(res)
          } catch (error) {
              console.error(error);
          }
        }
  return (
    <div class="main">
        <div class="seachbar">
        <FaSearch onClick={setSearchQuery} style={{paddingLeft:'20px' }}  />
        <input className="NavInput" type="text"
        onKeyPress={event=> {
          if(event.key==="Enter"){
            fetchSearchData();
          }
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <div className='result' >
            {
                searchData && (
                  searchData.map(
                    (
                    {
                      recipename,
                      recipeid,
                      recipeslug,
                      recipeimage
                    },
                    index
                    )=>{
                      return(
                        <>
                        <div className="searchdatabox" onClick={()=>navigator(`/recipedetails/${recipeslug}`)}>
                           <div className="img">
                                     <img src={recipeimage} alt={recipeslug} className="image" />
                                </div>
                            <div>
                            <p>
                                {recipename}
                           </p>
                           </div>
                        </div>
                        </>
                      );
                    }
                  )
                )
              }
        </div>
    </div>
  )
}

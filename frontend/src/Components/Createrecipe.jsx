import React, { useState } from 'react'
import ImagetoBase64 from '../utils/ImagetoBase64'
import axios from 'axios';
import '../style/Login.css'
export default function Createrecipe (){

  const[Image, setImage] = useState('');
  const[Recipename, setName] = useState('');
  const[PrepTime, setPrepTime] = useState('');
  const[cookTime, setcookTime] = useState('');
  const[ResTime, setResTime] = useState('');
  const[TotalTime, setTotalTime] = useState('');
  const[Description, setDescription] = useState('');
  const[Ingredients, setIngredients] = useState([{ value: '' }]);
  const[Procedure, setProcedure] = useState([{ value: '' }]);
  const[Categories, setCategories] = useState([{ value: '' }]);
  const[Tipsntricks, setTipsntricks] = useState('');

  const Recipedetails = {
    UserName : `Foo Studio Originals's`,
    Image,
    Recipename,
    Description,
    PrepTime,
    cookTime,
    ResTime,
    TotalTime,
    Ingredients,
    Procedure,
    Categories,
    Tipsntricks
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:5000/Createnewrecipe`, Recipedetails)
    .then(result =>{
      console.log(result)
      console.log("successfully published recipe")
    })
    .catch(err=>{
      console.log("some error")
      console.log(err);
    })
    
  };

  const HandleUploadpicture= async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data)
    setImage((prev)=>{
        return{
            ...prev,
            image : data
        }
    })
  }

  const AddIngredients = () => {
    setIngredients([...Ingredients, { value: '' }]);
  };

  const handleNewIngredients = (index, event) => {
  const values = [...Ingredients];
  values[index].value = event.target.value;
  setIngredients(values);
  };

  const AddProcedure= () => {
    setProcedure([...Procedure, { value: '' }]);
  };

  const handleNewProcedure = (index, event) => {
  const values = [...Procedure];
  values[index].value = event.target.value;
  setProcedure(values);
  };

  const AddCategories= () => {
    setCategories([...Categories, { value: '' }]);
  };

  const handleNewCategories = (index, event) => {
  const values = [...Categories];
  values[index].value = event.target.value;
  setCategories(values);
  };
  return (
    <>
    <div class="main">
      <h2>Create Your own Recipe</h2> 
      <hr />
      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image</label>  
           {(Image) ? <img src={Image} alt={Recipename}></img> : <input type="file" id="img" required onChange={HandleUploadpicture} accept="image/png, image/jpeg"/> }    
        </div>

        <div>
          <label>Recipe name</label>
          <input type='text' name="RecipeName" value ={Recipename} onChange={(e)=>setName(e.target.value)}/> <br />
        </div>

        <div>
          <label>Description</label><br />
          <textarea type="text" name="description" rows={4} cols={40} required value={Description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>

        <div>
          <label>Preparation Time</label>
          <input type='text' name="RecipeName" value ={PrepTime} onChange={(e)=>setPrepTime(e.target.value)}/> <br />
        </div>

        <div>
          <label>Cook Time</label>
          <input type='text' name="RecipeName" value ={cookTime} onChange={(e)=>setcookTime(e.target.value)}/> <br />
        </div>

        <div>
          <label>Rest Time</label>
          <input type='text' name="RecipeName" value ={ResTime} onChange={(e)=>setResTime(e.target.value)}/> <br />
        </div>

        <div>
          <label>Total Time</label>
          <input type='text' name="RecipeName" value ={TotalTime} onChange={(e)=>setTotalTime(e.target.value)}/> <br />
        </div>
        <div id="Ingredientlist">
          <label>Ingredients</label><br />
          <small>Example : 1 cup rice</small><br />
          {Ingredients.map((field, index) => (
            <>
            <input
            key={index}
            type="text"
            value={field.value}
            onChange={(event) => handleNewIngredients(index, event)}/>
            <br /></>
            ))}
        </div>
        <button type='button' id="AddNewIngredientInput" onClick={AddIngredients} >Add New Ingredient</button>

        <div id="Procedures">
          <label>Procedure</label><br />
          <small>Example : Step 1 - Add all dry ingredients to a bowl</small><br />
          {Procedure.map((field, index) => (
            <>
            <input
            key={index}
            type="text"
            value={field.value}
            onChange={(event) => handleNewProcedure(index, event)}/>
            <br /></>
            ))}
        </div>
        <button type='button' onClick={AddProcedure}>Add New Step</button>


        <div id="Categories">
          <label>Categories</label><br />
          <small>Example : Thai/ Indian / desert </small><br />
          {Categories.map((field, index) => (
            <>
            <input
            key={index}
            type="text"
            value={field.value}
            onChange={(event) => handleNewCategories(index, event)}/>
            <br /></>
            ))}
        </div>

        <button type='button' onClick={AddCategories} >Add New Category</button>

        <div>
          <label>Tips and Tricks if any</label><br />
          <textarea name="tips" value={Tipsntricks} onChange={(e)=> setTipsntricks(e.target.value)} ></textarea>
        </div>

        <button>Submit Recipe</button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
      </div>
    </div>
  </>
  )
}

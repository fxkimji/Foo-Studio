import React from 'react'
import "../style/Home.css";
import { useNavigate } from 'react-router-dom';
import latest from '../assets/latest.jfif'
import HighProtein from '../assets/highprotein.jfif';
import Vegan from '../assets/vegan.jfif';
import Veg from '../assets/vegetarian.jfif';
import Lowcard from '../assets/Lowcarb.jfif';
import Healthy from '../assets/healthy.jfif';
import BreakFast from '../assets/breakfast.jfif';
import snacks from '../assets/snacks.jfif';
import dinner from '../assets/dinner.jfif';
import lunch from '../assets/lunch.jfif';
import dessert from '../assets/dessert.jfif';
import cookbook from '../assets/cookbook.png'
export default function Home() {
  
  const navigate = useNavigate()
  const Categories =[
    {
      name : 'Latest Recipes',
      value : 'LatestRecipes',
      image : latest 
    }, 
    {
      name :'High Protein',
      value : 'HighProtein',
      image : HighProtein 
    }, 
    {
      name :'Vegan',
      value:'Vegan',
      image : Vegan
    }, 
    {
      name :'Vegetarian',
      value :'Vegetarian',
      image : Veg 
    }, 
    {
      name : 'LowCarb',
      value : 'LowCarb',
      image : Lowcard
    }, 
    {
      name :'Healthy',
      value : 'Healthy',
      image : Healthy
    }
  ];
  const Courses =[
    {
      name : 'Breakfast',
      image : BreakFast
    },
    { 
      name :'Lunch',
      image : lunch
    },
    {
      name :'Snacks',
      image : snacks
    },
    { 
      name :'Dinner',
      image : dinner
    },
    { 
      name :'Desserts',
      image :dessert
    }]

  return (
    <div class="main">
      <div className='Quote'>
      <span class="Q2"><h2>Simple recipes made for</h2></span>
      <span class="Q1"><h2>real, actual, everyday life.</h2></span>
      </div>
      <h2>Top Categories</h2>
      <div class="category">
        {Categories.map((Category) =>{
          return(
            <>
            <div class='categorycard' onClick={()=>navigate(`/Categories/${Category.value}`)}>
              <img src={Category.image} alt={Category.name}></img>
              <h4>{Category.name}</h4>
            </div>
            </>
          )
        })}
      </div>
      <h2>24/7 with You</h2>
      <div class="courses">
        {Courses.map((Courses) =>{
          return(
            <>
            <div class='coursescard' onClick={()=>navigate(`/Categories/${Courses.name}`)}>
              <img src={Courses.image} alt={Courses.name}></img>
              <h4>{Courses.name}</h4>
            </div>
            </>
          )
        })}
      </div>
      <br />
      <div class="cookbook">
        <div class="cookbookimg">
          <img src={cookbook} alt="cookbookimg"></img>
        </div>
        <div class="cookbooktext">
          <h1>get it now</h1>
          <h2>FOO STUDIO COOKBOOK</h2>
          <p>The eBook includes our most popular 25 recipes in a <br/> beautiful, easy to download format. <br/>Enter your email and we'll send it right over!</p>
          <div class="cookbookinputs">
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <button>GO</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};


//   const userData = useSelector(state => state.user) 

//   const navigate = useNavigate();
//   const [todaytop10, setResult] = useState([]);
//   const [meals, setMeals] = useState([]);
//   // const ingredient = 'chicken';
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`);
//         const data = await response.json();
//         setMeals(data.meals);
//       } catch {
//         console.log("some error");
//       }
//     };

//     fetchData();
//   }, []);



   
//   return (
//     <div>
//       <h3>Meals with</h3>
//       <ul>
//         {meals.map(meal => (
//           <li key={meal.idMeal}>{meal.strMeal}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=$chicken`);
//         setMeals(response.data.meals);
//       } catch  {
//         console.log("some error");
//       }
//     };
//     fetchData();
//   }, []);
//   const mealId = '52772';

//   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
//     .then(response => response.json())
//     .then(data => console.log(data.meals[0]))
//     .catch(err => console.error(err));
//   // useEffect(()=>{
//   //   const getunder30mins = async () => {
      
//   //     const options = {
//   //       method: 'GET',
//   //       url: 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
//   //     };
      
//   //     try {
//   //       const response = await axios.get(options);
//   //       console.log(response.data.results)
//   //       console.log(response.data.results[0].name);
//   //       const result = {
//   //         recipedetails : response.data.results.map(({id, name, thumbnail_url})=>({
//   //           recipeid :id,
//   //           recipename : name,
//   //           recipeimage : thumbnail_url
//   //         }))
//   //       }
//   //       setResult(result);
//   //       console.log(result);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }
//   //   getunder30mins()
//   // },[])
  



// // const ingredient = 'chicken';

// // axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php`, {
// //   params: {
// //     i: ingredient,
// //   },
// // })
// //   .then(response => console.log("HAHA"+response.data.meals))
// //   .catch(error => console.error(error));
//   return (
//     <div>
//       <h4>Welcome {userData.name} </h4>
//       <h5>Today's top 10</h5>
//       <div class="todaytop10">
//         {
//           todaytop10.recipedetails && (
//             todaytop10.recipedetails.map((
//               {
//                 recipeid,
//                 recipename,
//                 recipeimage
//               },
//               index
//             )=>{
//               return(
//                 <>
//                 <div class="recipecard" onClick={()=>navigate(`/recipedetails/${recipeid}`)}>
//                   <img src={recipeimage} alt={recipename}></img>
//                   <h5>{recipename}</h5>
//                 </div>
//                 </>
//               )
//             })
//           )
//         }
//       </div>
//     </div>
//   )
// }

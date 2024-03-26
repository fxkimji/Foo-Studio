import Header from "./Components/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import MealPlanner from "./Components/MealPlanner";
import MyProfile from "./Components/MyProfile";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Createrecipe from "./Components/Createrecipe";
import Recipedetails  from "./Components/Recipedetails";
import Favourites from "./Components/Favourites";
import Search from "./Components/Search";
import Categories from "./Components/Categories";
export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
            <Route path="/" element={<Home/> } /> 
            <Route path="/recipedetails/:recipeslug" element={<Recipedetails/>} />
            <Route path="/Categories/:Category" element={<Categories/>} />
            <Route path="/MealPlanner" element={<MealPlanner/> } /> 
            <Route path="/AboutUS" element={<AboutUs/> } /> 
            <Route path="/Favourites" element={<Favourites/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/MyProfile" element={<MyProfile/> } />
            <Route path="/login" element={<Login/> } /> 
            <Route path="/SignUp" element={<Signup/> } />
            <Route path="/Createnewrecipe" element={<Createrecipe/> } />
            </Routes>
       <Footer/>
    </div>
  );
}
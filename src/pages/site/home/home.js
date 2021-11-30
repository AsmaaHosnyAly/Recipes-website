import Search from "../../../components/site/search/search";
import Hero from "../../../components/site/hero/hero";
import RecipeList from "../../../components/site/recipesList/recipesList";
import "./home.css";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { db, app } from '../../../firebase'
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore'



const Home = () => {
 
  const [recipes, setRecipes] = useState([])
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, 'recipes'), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )
  const TestQuery = async () => {
    // console.log('call test query', id)
    const q = query(
      collection(db, 'recipes'),
      where('categoryRecipeId', '==', `8iDR454NLFqlKe4zchS8`)
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((recipe)=>{
      console.log(recipe.id);
      console.log(recipe.data());
  })
  }

  TestQuery()
  return (
    <main>
      <Search />
      <Hero />
      <RecipeList />
    </main>
  );
};

export default Home;

import './recipesList.css'
import Recipe from '../recipe/recipe'
import { useDispatch } from 'react-redux'
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'
import {
  updateWishlist,
  removeItemWishlist,
} from '../../../redux/actions/wishlist'

const RecipeList = () => {
  // Get Recipes
  const [recipes, setRecipes] = useState([])
  useEffect(
    () =>
      onSnapshot(collection(db, 'recipes'), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  // console.log(recipes)
  const dispatch = useDispatch()
  const addToWishlist = (recipe) => {
    console.log(recipe)
    dispatch(updateWishlist(recipe))
  }

  return (
    <section className='recipe-list'>
      {recipes ? (
        recipes.map((recipe) => {
          return (
            <>
              <Recipe {...recipe} key={recipe.id} />
              <button onClick={addToWishlist(recipe)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-heart-fill'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                  />
                </svg>
              </button>
            </>
          )
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  )
}

export default RecipeList

import './filter.css'
import { collection, onSnapshot, query, where } from '@firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Filter = () => {
  // Get Recipes
  const [recipes, setRecipes] = useState([])
  const colRef = collection(db, 'recipes')

  // Handle Search
  const [searchInput, setSearchInput] = useState('')
  const [category, setCategory] = useState('all')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (category === 'all') {
      onSnapshot(colRef, (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      )
    } else {
      const q = query(colRef, where('categoryRecipeId', '==', `${category}`))
      onSnapshot(q, (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      )
    }
    console.log(recipes)
  }
  // if (!searchInput) {
  //   return recipes
  // } else {
  //   setRecipes(
  //     recipes.filter((recipe) => {
  //       return recipe.recipeName
  //         .toLowerCase()
  //         .includes(searchInput.toLocaleLowerCase())
  //     })
  //   )
  // }
  console.log(recipes)
  return (
    <section className='filter'>
      <div className='filter__filter'>
        <h3 className='filter__filter__title'>Filter</h3>
        <form
          className='filter__filter__form'
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor='regular-search' className='search__label'>
            Search:{' '}
            <input
              type='text'
              name='regular-search'
              id='regular-search'
              placeholder='Search'
              className='search__input'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <select
            name='category-search'
            id='category-search'
            className='category__input'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='appetizer'>appetizer</option>
            <option value='soap'>soap</option>
            <option value='launch'>launch</option>
            <option value='breakfast'>breakfast</option>
            <option value='dinner'>dinner</option>
            <option value='dessert'>dessert</option>
            <option value='baked goods'>baked goods</option>
            <option value='salad'>salad</option>
            <option value='snacks'>snacks</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
      <div className='filter__content'>
        <h3 className='filter__content__title'>Filtered Recipes</h3>
        <div className='filter__content__container'>
          <section className='recipe-list'>
            {recipes
              .filter((res) => {
                if (searchInput === '') {
                  return res
                } else if (
                  res.recipeName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                ) {
                  return res
                }
              })
              .map((res) => {
                const {
                  DegreeOfDifficulty,
                  categoryRecipeId,
                  imagePath,
                  recipeName,
                  recipePreperTime,
                  id,
                } = res
                return (
                  <Link to={`/${id}`} key={id}>
                    <section className='one-recipe'>
                      <div className='one-recipe__img'>
                        <img src={imagePath} alt='...' />
                      </div>
                      <div className='one-recipe__content'>
                        <div className='one-recipe__heading'>
                          <small className='one-recipe__category'>
                            {categoryRecipeId}
                          </small>
                          <h4 className='one-recipe__title'>{recipeName}</h4>
                        </div>
                        <div className='one-recipe__data'>
                          <p className='one-recipe__time'>
                            <i class='bx bx-time-five'></i> {recipePreperTime}
                          </p>
                          <p className='one-recipe__difficulty'>
                            {DegreeOfDifficulty.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </section>
                  </Link>
                )
              })}
          </section>
        </div>
      </div>
    </section>
  )
}

export default Filter

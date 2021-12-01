import './recipe.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateWishlist } from '../../../redux/actions/wishlist'

const Recipe = (recipe) => {
  const {
    DegreeOfDifficulty,
    recipeCatName,
    imagePath,
    recipeName,
    recipePreperTime,
    id,
    index,
  } = recipe
  // console.log(recipes)
  const dispatch = useDispatch()
  const addToWishlist = (recipe) => {
    console.log(recipe)
    dispatch(updateWishlist(recipe))
  }
  return (
    <section className='one-recipe'>
      <Link to={`/${index}`}>
        <div className='one-recipe__img'>
          <img src={imagePath} alt='...' />
        </div>
      </Link>
      <div className='one-recipe__content'>
        <div className='one-recipe__heading'>
          <small className='one-recipe__category'>{recipeCatName}</small>
          <h4 className='one-recipe__title'>{recipeName}</h4>
        </div>
        <div className='one-recipe__data'>
          <button onClick={() => addToWishlist(recipe)} className='favBtn'>
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
          <p className='one-recipe__time'>
            <i class='bx bx-time-five'></i> {recipePreperTime}
          </p>
          <p className='one-recipe__difficulty'>
            {DegreeOfDifficulty.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Recipe

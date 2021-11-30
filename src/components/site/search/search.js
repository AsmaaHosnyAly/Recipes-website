import './search.css'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot
} from 'firebase/firestore'

// Firebase imports

import { db } from '../../../firebase'

const Search = () => {
  // Get categories from Firebase
  const [categories, setCategories] = useState([])
  // const recipeCatId= location.search.slice(1).split("&")[0].split("=")[1]
    // const [recipesName,setRecipesName]=useState([]);
    const [searchTxt,setSearchTxt]=useState([]);


     
    
  useEffect(
    () =>
      onSnapshot(collection(db, 'Category_of_recipes'), (snapshot) =>
        setCategories(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  )
  //console.log(...categories.map((cat) => cat.Name))

  // Handle Swiper
  SwiperCore.use([Navigation, Autoplay])
  const swiperRef = useRef(null)
  // const TestQuery = async (search) => {
  //   console.log('call test query',search)
  //   const q = query(
  //     collection(db, 'recipes'),
  //     where('recipeName', '==', `${search}`)
  //   )
  //   const querySnapshot = await getDocs(q)
  //   let list = [{  }]

  //   querySnapshot.forEach((recipe) => {
  //     let item = {
  //       ...recipe.data(),
  //     }
  //     list.push(item)
  //   })
  //   console.log('list', list)
  //   setSearchTxt(list)
  
  // }

  // TestQuery(searchTxt);
  return (
    <div className='search-container'>
      <section
        className='search'
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <form>
        <div className='search__bar'>
          <label className='search__label'>
            <input className='search__input' placeholder='Search'
            value={searchTxt}
            onChange={(e) =>setSearchTxt(e.target.value)}
            />
           <Link to={`/SearchRecipe/searchTxt=${searchTxt}`} className='categorie'>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search search__icon'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
            </Link>
          </label>
          <h4 className='search__title'>
            Categories <i class='bx bx-right-arrow-alt'></i>
          </h4>
        </div>
        <div>
          {/* <Link to="">
          <button type="submit" >Search</button>
          </Link> */}
        </div>
        </form>

        <Swiper
          spaceBetween={1}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          className='categories'
          navigation
          autoplay={{ delay: 3000 }}
          ref={swiperRef}
          style={{ direction: 'rtl' }}
          breakpoints={{
            750: {
              slidesPerView: 6,
            },
          }}
        >
          {categories ? (
            categories.map((categorie) => {
              return (
                <SwiperSlide key={categorie.id}>
                  <Link to={`/RecipeCat/${categorie.Name}?id=${categorie.id}`} className='categorie'>
                  
                    <img
                      className='categorie__img'
                      src={categorie.imagePath}
                      alt='...'
                    />
                    <p>{categorie.Name}</p>
                  </Link>
                </SwiperSlide>
              )
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </Swiper>
      </section>
    </div>
  )
}

export default Search

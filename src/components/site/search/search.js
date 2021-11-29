import './search.css'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'

// Firebase imports
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../../firebase'

const Search = () => {
  // Get categories from Firebase
  const [categories, setCategories] = useState([])
  useEffect(
    () =>
      onSnapshot(collection(db, 'Category_of_recipes'), (snapshot) =>
        setCategories(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  )
  console.log(...categories.map((cat) => cat.Name))

  // Handle Swiper
  SwiperCore.use([Navigation, Autoplay])
  const swiperRef = useRef(null)
  return (
    <div className='search-container'>
      <section
        className='search'
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <div className='search__bar'>
          <label className='search__label'>
            <input className='search__input' placeholder='Search' />
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
          </label>
          <h4 className='search__title'>
            Categories <i class='bx bx-right-arrow-alt'></i>
          </h4>
        </div>

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
                  <Link to={`/${categorie.Name}`} className='categorie'>
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

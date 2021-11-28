import './search.css'
import category1 from '../../../assets/img/category1.webp'
import category2 from '../../../assets/img/category2.jfif'
import category3 from '../../../assets/img/category3.jfif'
import category4 from '../../../assets/img/category4.jfif'
import category5 from '../../../assets/img/category5.jfif'
import category6 from '../../../assets/img/category6.jfif'
import category7 from '../../../assets/img/category7.jfif'
import category8 from '../../../assets/img/category8.jfif'
import category9 from '../../../assets/img/category9.jfif'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import 'swiper/modules/navigation/navigation.min.css'

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'

const Search = () => {
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
          <h4 className='search__title'>Ingredients</h4>
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
            // when window width is >= 750px
            750: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <img className='categorie__img' src={category1} alt='...' />
            <p>Desert</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category2} alt='...' />
            <p>Candy</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category3} alt='...' />
            <p>Sea Food</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category4} alt='...' />
            <p>Grills</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category5} alt='...' />
            <p>Apetizer</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category6} alt='...' />
            <p>Breakfast</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category7} alt='...' />
            <p>Launch</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category8} alt='...' />
            <p>Dinner</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='categorie__img' src={category9} alt='...' />
            <p>Pastries</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}

export default Search

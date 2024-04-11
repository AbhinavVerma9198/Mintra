import React from 'react'
import './Navbar.css'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <>
      <form className='self-center mt-[3%]'>
        <span className='search_div h-full  justify-center items-center lg:w-72'>
          <button className='searchbtn'><FiSearch /></button>
          <input type="text" placeholder='Search for products, brands and more' className='search caret-[#ff2459]' />
        </span>
      </form>
    </>
  )
}

export default Search;
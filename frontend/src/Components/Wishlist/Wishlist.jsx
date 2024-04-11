import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClear } from 'react-icons/md'
import Nowishlist from './NoWishlist'
import { removeToWishlist } from '../../store/wishslice'

const Wishlist = () => {

  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist)
  
  return (
    <>
      {(wishlistItems !== null && wishlistItems.length > 0) ?
        <>
          <h1 className='font1 text-lg font-semibold px-4'>My Wishlist <span className='font-sans font-normal'> {wishlistItems.length} items</span></h1>
          <br />
          <div className='2xl:px-4 xl:px-4 lg:px-4 '>

            <ul className='grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 2xl:gap-10 xl:gap-10 lg:gap-10 '>
              {wishlistItems.map((item) => (
                <span className='border-[1px] border-slate-300 relative'>
                  <div className='text-base  cursor-pointer bg-slate-400 rounded-full absolute right-3 top-3 z-[5] h-max w-max' ><MdClear onClick={() => dispatch(removeToWishlist(item.id))} className='font-extralight ' /></div>
                  <img src={item.images.image1} className="max-h-[350px] w-full" width='100%' alt='product' />
                  <div className='cursor-pointer w-full text-center font1 font-semibold text-base py-2 text-[#ff3f6c] border-t-[1px] border-slate-300'>MOVE TO BAG</div>
                </span>
              ))}
            </ul>

          </div>
        </> : <Nowishlist />}

    </>
  )
}

export default Wishlist
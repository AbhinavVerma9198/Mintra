import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiRupee } from 'react-icons/bi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { addToWishlist } from '../../store/wishslice'
import { useDispatch } from 'react-redux'


const SingleProduct = ({ item }) => {

    const [Menu1, setMenu1] = useState('hidden')
    const [Menu2, setMenu2] = useState('block')
    const [Text, setText] = useState('WISHLIST')
    const dispatch = useDispatch();

    const addToWishHandler = (item) => {
        dispatch(addToWishlist(item));
        setText('WISHLISTED')
    }

    


    return (
        <li className='border-[1px] border-slate-200'  onMouseEnter={() => (setMenu1('block'), setMenu2('hidden'))} onMouseLeave={() => (setMenu1('hidden'), setMenu2('block'))}>
            <Link to={`/products/${item.id}`}>
                <div className='min-h-[200px]'>
                    <img src={item.images[0]} className="max-h-[350px] w-full" width='100%' alt='product' />
                </div>
                <div className={`${Menu2}`}>
                    <p className='font1 text-lg px-2'>{item.company}</p>
                    <p className='px-2 text-xs text-left text-ellipsis h-4 whitespace-nowrap text-slate-400'>{item.item_name}</p>
                    <p className='flex px-2'>
                        <BiRupee />
                        <span className='flex items-center text-sm font-medium'>{item.current_price}</span>
                        <BiRupee />
                        <span className='flex items-center text-sm font-medium text-slate-400 line-through'>{item.original_price}</span>
                        <span className='flex items-center text-xs font-medium text-[#f26a10]'>({Math.round(item.current_price / item.original_price * 100 - 100)}% OFF)</span>
                    </p>
                </div>
            </Link>
            <div className={Menu1}>
                <div onClick={() => addToWishHandler(item)} className='text-center mx-4 my-1 flex items-center justify-center py-1 font1 border-[1px] border-slate-300 cursor-pointer'>
                    <IoIosHeartEmpty className='text-lg mr-1' />
                    <span>{Text}</span>
                </div>
                <Link to={`/products/${item.id}`} >
                    <div>
                        <p className='font1 text-sm px-2 text-[#5f5f5f9e]'>Sizes: M</p>
                        <p className='flex px-2'>
                            <BiRupee />
                            <span className='flex items-center text-sm font-medium'>{item.current_price}</span>
                            <BiRupee />
                            <span className='flex items-center text-sm font-medium text-slate-400 line-through'>{item.original_price}</span>
                            <span className='flex items-center text-xs font-medium text-[#f26a10]'>({Math.round(item.current_price / item.original_price * 100 - 100)}% OFF)</span>
                        </p>
                    </div>
                </Link>
            </div>

        </li>
    )
}

export default SingleProduct;
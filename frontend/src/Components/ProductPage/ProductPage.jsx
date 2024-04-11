import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { IoIosArrowDown } from 'react-icons/io'
import Filter from './Filter'
import './ProductPage.css'
import SingleProduct from './SingleProduct'
import {useSelector} from "react-redux"

const ProductPage = () => {
    const [sortvalue, setsortvalue] = useState('Recommended')
    const items = useSelector(store => store.items)


    return (
        <>
            <div className="hidden 2xl:block xl:block lg:block font2 text-xl px-8 py-3">
                <span className='text-black font-light'>Home </span>
                <span className='font-light text-black capitalize'>{ window.location.pathname}</span>
            </div>
            <div className="hidden 2xl:block xl:block lg:block font2 px-8 pb-2 "> 
                <span className=" font1  text-sm capitalize">NO OF ITEMS</span>
                <span className="text-slate-400 font-light text-sm"> - items</span>  
            </div>

            {/* Filter__titile div *********************************** */}
            <div className="hidden 2xl:grid xl:grid lg:grid grid-cols-12 font2 px-8 border-b-[1px] border-slate-200 py-3 items-center">
                <div className="col-span-2 font-semibold text-base font1">FILTERS</div>
                <div className="col-span-1 text-black text-xs">Bundles</div>
                <div className="col-span-1 text-black text-xs">Country of Origin</div>
                <div className="col-span-6 text-black text-xs">Size</div>
                <div className="col-span-2 relative cursor-pointer">
                    <div className='h-10 overflow-hidden hover:overscroll-none hover:h-max z-[5] border-[1px] border-slate-300 w-[260px] absolute top-[-22px] bg-white'>
                        <div className=' text-sm w-max pl-4 pr-24 py-2 float-right  relative items-center' >
                            <span className=''>Sort by :  </span><span className='font1 font-semibold '>{sortvalue}</span> <span className='absolute right-4 font-serif text-lg'><IoIosArrowDown /></span>
                        </div>

                        <div className=' text-sm w-max pl-5  py-2 mt-12' onClick={() => (setsortvalue('What`s New'))}>
                            <span className='font1 '>What`s New</span>
                        </div>
                        <div className=' text-sm w-max pl-5  py-2 ' onClick={() => (setsortvalue('Popularity'))} >
                            <span className='font1'>Popularity</span>
                        </div>
                        <div className=' text-sm w-max pl-5  py-2 '  onClick={() => (setsortvalue('Better Discount'))}>
                            <span className='font1'>Better Discount</span>
                        </div>
                        <div className=' text-sm w-max pl-5  py-2 '  onClick={() => (setsortvalue('High To Low'))}>
                            <span className='font1'>Price : High To Low</span>
                        </div>
                        <div className=' text-sm w-max pl-5  py-2 ' onClick={() => (setsortvalue('Low To High'))} >
                            <span className='font1'>Price : Low To High</span>
                        </div>
                        <div className=' text-sm w-max pl-5  py-2 ' onClick={() => (setsortvalue('Customer Rating'))}>
                            <span className='font1'>Customer Rating</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-12'>
                {/* Filter ******************** */}
                <div className='col-span-2 border-r-[1px] border-slate-200 h-max sticky top-0'>
                    {
                        <Filter />
                    }
                </div>

                {/* Product DIV *************************************** */}
                <div className='col-span-10 w-full p-4'>
                    <ul className='grid grid-cols-5 gap-10'>
                        {items.map((item) => (<SingleProduct key={item.id} item={item}/>))}
                    </ul>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ProductPage ;

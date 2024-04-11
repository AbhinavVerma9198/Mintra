import React from 'react'
import {
    Indian_FusionWear, Western_Wear, Shop_Occassion,
    WFootwear, Sports_ActiveWear,
    Lingerie_Sleepwear, Beauty_Personal_Care
} from '../NavbarSub.jsx'
import { Link } from "react-router-dom";

const Women = ({ CMenu2, parentCallback2 }) => {
    return (

        <div className={`w-[100%] h-screen bg-[#64646435] sticky top-0 ${CMenu2} z-10 font1`}>

            <div className={` max-w-[80%] w-[80%] mx-auto h-[585px] ${CMenu2}  Mmenu bg-white `}
                onMouseEnter={() => parentCallback2('block')} onMouseLeave={() => parentCallback2('hidden')}>
                <div className='grid grid-cols-5 px-8 py-3 cursor-pointer'>
                    <div className=" h-[418px]">
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Indian & FusionWear</h1>
                        {Indian_FusionWear.map((data) =>
                         
                            <Link to="/products" className='text-decoration-none text-black'><li className=' list-none py-0.5 text-lg font-thin hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}

                        <hr className='py-1 max-w-[80%] w-[80%]' />
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Plus&nbsp;Size</h1>
                        
                    </div>
                    <div className=" h-[418px]">
                        
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Indian&nbsp;&&nbsp;Festive&nbsp;Wear</h1>
                        {Western_Wear.map((data) =>
                            <Link to="/products" className='text-decoration-none text-black'><li className='text-lg  list-none py-0.5 hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}
                    </div>
                    <div className=" h-[418px] ">
                        <h1 className='text-[#fb56c1] text-lg  font-semibold py-1'>Bottomwear</h1>
                        {Shop_Occassion.map((data) =>
                            <Link to="/products" className='text-decoration-none text-black'><li className='text-lg  list-none py-0.5  hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}

                        <hr className='py-1 max-w-[80%] w-[80%]' />

                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Innerwear&nbsp;&&nbsp;Sleepwear</h1>
                        {WFootwear.map((data) =>
                            <Link to="/products" className='text-decoration-none text-black'><li className='text-lg  list-none py-0.5 hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}
                    </div>

                    <div className=" h-[418px] ">
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Footwear</h1>
                        {Sports_ActiveWear.map((data) =>
                            <Link to="/products" className='text-decoration-none text-black'><li className='text-lg  list-none py-0.5 hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}
                        <hr className='py-1 max-w-[80%] w-[80%]' />
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Personal&nbsp;Care&nbsp;&&nbsp;Grooming</h1>
                        <hr className='py-1 max-w-[80%] w-[80%]' />
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Sunglasses&nbsp;&&nbsp;Frames</h1>
                        <hr className='py-1 max-w-[80%] w-[80%]' />
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Watches</h1>
                    </div>
                    <div className=" h-[418px] ">
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Sports&nbsp;&&nbsp;Active&nbsp;Wear</h1>
                        {Lingerie_Sleepwear.map((data) =>
                            <Link to="/products" className='text-decoration-none text-black'><li className='text-lg  list-none py-0.5 hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}
                        <hr className='py-1 max-w-[80%] w-[80%]' />
                        <h1 className='text-[#fb56c1] text-lg font-semibold py-1'>Gadgets</h1>
                        {Beauty_Personal_Care.map((data) =>
                            <Link to="/products" className='text-decoration-none text-black'><li className='text-lg  list-none py-0.5 hover:font-semibold' onClick={() => parentCallback2('hidden', false)}>{data.title}</li></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Women;
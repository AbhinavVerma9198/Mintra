import React from 'react'
import './Home.css'
import b1 from '../images/banner1.webp'
import b2 from '../images/banner2.webp'
import b3 from '../images/banner3.jpg'
import b4 from '../images/banner4.jpg'
import b5 from '../images/banner5.jpg'
import b6 from '../images/banner6.webp'
import b7 from '../images/banner.7.webp'
import b8 from '../images/banner8.webp'
import b9 from '../images/banner9.webp'
import d1 from '../images/d1.webp'
import d2 from '../images/d2.webp'
import d3 from '../images/d3.webp'
import d4 from '../images/d4.webp'
import d5 from '../images/d5.webp'
import d6 from '../images/d6.webp'
import d7 from '../images/d7.webp'
import d8 from '../images/d8.webp'
import a1 from '../images/a1.webp'
import a2 from '../images/a2.webp'
import a3 from '../images/a3.webp'
import a4 from '../images/a4.webp'
import a5 from '../images/a5.webp'
import a6 from '../images/a6.webp'
import a7 from '../images/a7.webp'
import a8 from '../images/a8.webp'
import a9 from '../images/a9.webp'
import a10 from '../images/a10.webp'
import a11 from '../images/a11.webp'
import a12 from '../images/a12.webp'
import a13 from '../images/a13.webp'
import a14 from '../images/a14.webp'
import a15 from '../images/a15.webp'
import a16 from '../images/a16.webp'
import c1 from '../images/c1.webp'
import c2 from '../images/c2.webp'
import c3 from '../images/c3.webp'
import c4 from '../images/c4.webp'
import c5 from '../images/c5.webp'
import c6 from '../images/c6.webp'
import c7 from '../images/c7.webp'
import c8 from '../images/c8.webp'
import c9 from '../images/c9.webp'
import c10 from '../images/c10.webp'
import c11 from '../images/c11.webp'
import c12 from '../images/c12.webp'
import c13 from '../images/c13.webp'
import c14 from '../images/c14.webp'
import c15 from '../images/c15.webp'
import c16 from '../images/c16.webp'
import c17 from '../images/c17.webp'
import c18 from '../images/c18.webp'
import c19 from '../images/c19.webp'
import c20 from '../images/c20.webp'
import c21 from '../images/c21.webp'
import c22 from '../images/c22.webp'
import c23 from '../images/c23.webp'
import c24 from '../images/c24.webp'
import bb1 from '../images/b1.webp'
import bb2 from '../images/b2.webp'
import bb3 from '../images/b3.webp'
import bb4 from '../images/b4.webp'
import bb5 from '../images/b5.webp'
import bb6 from '../images/b6.webp'
import bb7 from '../images/b7.webp'
import e1 from '../images/e1.webp'
import e2 from '../images/e2.webp'
import e3 from '../images/e3.webp'
import e4 from '../images/e4.webp'
import e5 from '../images/e5.webp'
import e6 from '../images/e6.webp'
import e7 from '../images/e7.webp'
import e8 from '../images/e8.webp'
import e9 from '../images/e9.webp'
import e10 from '../images/e10.webp'
import e11 from '../images/e11.webp'
import e12 from '../images/e12.webp'
import e13 from '../images/e13.webp'
import e14 from '../images/e14.webp'
import e15 from '../images/e15.webp'
import e16 from '../images/e16.webp'
import e17 from '../images/e17.webp'
import e18 from '../images/e18.webp'
import e19 from '../images/e19.webp'
import e20 from '../images/e20.webp'
import e21 from '../images/e21.webp'
import e22 from '../images/e22.webp'
import e23 from '../images/e23.webp'
import e24 from '../images/e24.webp'
import f1 from '../images/f1.webp'
import f2 from '../images/f2.webp'
import f3 from '../images/f3.webp'
import f4 from '../images/f4.webp'
import f5 from '../images/f5.webp'
import f6 from '../images/f6.webp'
import f7 from '../images/f7.webp'
import f8 from '../images/f8.webp'
import f9 from '../images/f9.webp'
import f10 from '../images/f10.webp'
import f11 from '../images/f11.webp'
import f12 from '../images/f12.webp'
import f13 from '../images/f13.webp'
import f14 from '../images/f14.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <>
      <Carousel className='mt-5'>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b1} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b2} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b3} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b4} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b5} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b6} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b7} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b8} alt='Banner_Image' /></Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to='/products'><LazyLoadImage src={b9} alt='Banner_Image' /></Link>
        </Carousel.Item>
      </Carousel>
      <div>
        <h1 className='my-5 py-5 px-5 text-lg-left'>DEAL OF THE DAY</h1>
        <div className='flex'>
          <Link to='/products'><img src={d1}/></Link>
          <Link to='/products'><img src={d2}/></Link>
          <Link to='/products'><img src={d3}/></Link>
          <Link to='/products'><img src={d4}/></Link>
          <Link to='/products'><img src={d5}/></Link>
          <Link to='/products'><img src={d6}/></Link>
          <Link to='/products'><img src={d7}/></Link>
          <Link to='/products'><img src={d8}/></Link>
        </div>
      </div>
      <div>
        <h1 className='my-5 py-5 px-5 text-lg-left'>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
        <div className='grid grid-cols-8 grid-rows-2 '>
          <Link to='/products'><img src={a1} alt="" /></Link>
          <Link to='/products'><img src={a2} alt="" /></Link>
          <Link to='/products'><img src={a3} alt="" /></Link>
          <Link to='/products'><img src={a4} alt="" /></Link>
          <Link to='/products'><img src={a5} alt="" /></Link>
          <Link to='/products'><img src={a6} alt="" /></Link>
          <Link to='/products'><img src={a7} alt="" /></Link>
          <Link to='/products'><img src={a8} alt="" /></Link>
          <Link to='/products'><img src={a9} alt="" /></Link>
          <Link to='/products'><img src={a10} alt=""/></Link>
          <Link to='/products'><img src={a11} alt=""/></Link>
          <Link to='/products'><img src={a12} alt=""/></Link>
          <Link to='/products'><img src={a13} alt=""/></Link>
          <Link to='/products'><img src={a14} alt=""/></Link>
          <Link to='/products'><img src={a15} alt=""/></Link>
          <Link to='/products'><img src={a16} alt=""/></Link>
        </div>
      </div>
      <div>
        <h1 className='my-5 py-5 px-5 text-lg-left'>DEAL OF THE DAY TOP PICKS</h1>
        <div className='grid grid-cols-7 gap-0'>
          <Link to='/products'><img src={bb1} alt="" /></Link>
          <Link to='/products'><img src={bb2} alt="" /></Link>
          <Link to='/products'><img src={bb3} alt="" /></Link>
          <Link to='/products'><img src={bb4} alt="" /></Link>
          <Link to='/products'><img src={bb5} alt="" /></Link>
          <Link to='/products'><img src={bb6} alt="" /></Link>
          <Link to='/products'><img src={bb7} alt="" /></Link>
        </div>
      </div>

      <div>
        <h1 className='my-5 py-5 px-5 text-lg-left'>DEAL OF THE DAYCATEGORIES TO BAG</h1>
        <div className='grid grid-cols-6 grid-rows-4 gap-4'>
          <Link to='/products'><img src={c1} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c2} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c3} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c4} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c5} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c6} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c7} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c8} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c9} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c10} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c11} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c12} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c13} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c14} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c15} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c16} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c17} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c18} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c19} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c20} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c21} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c22} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c23} alt="" className="min-h-[200px]" /></Link>
          <Link to='/products'><img src={c24} alt="" className="min-h-[200px]" /></Link>
        </div>
      </div>

      <div>
        <h1 className='my-5 py-5 px-5 text-lg-left'>DEALS ON TOP BRANDS</h1>
        <div className='grid grid-cols-6 grid-rows-4'>
          <Link to='/products'><img src={e1} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e2} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e3} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e4} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e5} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e6} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e7} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e8} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e9} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e10} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e11} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e12} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e13} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e14} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e15} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e16} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e17} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e18} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e19} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e20} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e21} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e22} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e23} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={e24} alt="" className='min-h-[200px]' /></Link>
        </div>
      </div>

      <div>
        <h1 className='my-5 py-5 px-5 text-lg-left'>BRANDS AT SLASHED PRICES</h1>
        <div className='grid grid-cols-7 grid-rows-2 mb-40'>
          <Link to='/products'><img src={f1} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f2} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f3} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f4} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f5} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f6} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f7} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f8} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f9} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f10} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f11} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f12} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f13} alt="" className='min-h-[200px]' /></Link>
          <Link to='/products'><img src={f14} alt="" className='min-h-[200px]' /></Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;

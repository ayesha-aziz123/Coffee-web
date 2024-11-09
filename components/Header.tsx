import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <section className='home' id='home'>
    <div className="home-content">
        <h3>Welcome to</h3>
        <h1>Coffee<span>Shop</span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel itaque expedita in sequi enim dignissimos nam ab harum commodi?</p>
        <Link className="btn" href={'/'}>Order Now</Link>
    </div>

   </section>
  )
}

export default Header
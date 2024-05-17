import React from 'react'
import { Hero } from '../component/hero/Hero'
import { Popular } from '../component/Popular/Popular'
import { Banner } from '../component/Banner/Banner'
import { Newcollection } from '../component/Newcollection/Newcollection'
import { Newsletter } from '../component/Newsletter/Newsletter'
import { Footer } from '../component/Footer/Footer'

export const Shop = () => {
  return (
    <div>
      <Hero/>
    <Popular/>
    <Banner/>
    <Newcollection/>
    <Newsletter/>
    <Footer/>
    </div>

    
  )
}

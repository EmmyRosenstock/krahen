import React from 'react'
import { Landing } from "../Landing";
import AboutUs from '../About';
import  { Book } from '../BookNow';
import WorkingDays from '../WorkingDays';
import Testimonials from '../Testimonials';
import Affiliate from '../Affiliate';
import OurLocation from '../OurLocation';
import Footer from '../Footer/';


const MainPage = () => {
  return (
    <>
        <Landing id="home"/>
        <AboutUs id="About"/>
        <WorkingDays id="working"/>
        <Affiliate id="affiliate"/>
        <Book id="book"/>

        <Footer id="Footer"/>
    </>
  )
}

export default MainPage

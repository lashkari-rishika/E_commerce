import { useEffect } from 'react';
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

const Home = () => {


  // const data ={
  //   name:"Rishika Technical",
  //   image:"./images/hero.svg"
  // }

  const {updateHomePage} =useGlobalContext();

  useEffect(()=>{
    updateHomePage();
  },[])
  return (
    <HeroSection/>
  )
}

export default Home

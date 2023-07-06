import React, { useContext, useEffect, useReducer } from "react";
import  reducer  from "./reducer";
const AppContext = React.createContext();
const API="https://64a6a5c5096b3f0fcc803494.mockapi.io/api/v1/service";
console.log(API)
const intialState = {
  name: "",
  image: "",
  services:[]
};



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Rishika Technical",
        image: "./images/hero.svg",
      },
    });
  };
  
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Rishika Lashkari",
        image: "./images/about1.svg",
      },
    });
  };

//    to Get the api data

const getServices = async (url)=>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES",payload:data})
     }
    catch(error){
        console.log(error)
    }
}
//   to call api

useEffect(()=>{
    getServices(API);
},[])

  return (
    <AppContext.Provider value={{ ...state,updateHomePage ,updateAboutPage}}>{children}</AppContext.Provider>
  );
};

//  Global Custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

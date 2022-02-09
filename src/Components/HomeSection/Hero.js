import React from "react"
import Data from "./Data"
import "./Home.css"
import Slide from "./Slide"

const Home = () => {
  return (
    <>
      <Slide slides={Data} />
    </>
  )
}

export default Home

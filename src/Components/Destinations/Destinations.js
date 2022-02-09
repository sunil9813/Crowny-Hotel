import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Sdata from "../Destinations/Sdata"

const Destinations = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <HeadTitle />
      <section className='gallery desi top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations

//import React, { useState } from "react"
//import HeadTitle from "../../Common/HeadTitle/HeadTitle"
//import Destinations from "./Destinations"
//import EmptyFile from "../../Common/Empty/EmptyFile"
//import Sdata from "../Destinations/Sdata"

//const MainPage = () => {
//  const [items, setIems] = useState(Sdata)
//  return (
//    <>
//      <Destinations />
//      {/*{!items.length ? <EmptyFile /> : <Destinations items={items} />}*/}
//    </>
//  )
//}

//export default MainPage

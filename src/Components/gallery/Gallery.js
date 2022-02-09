import React from "react"
import Cards from "./Cards"
import "./Gallery.css"
import GalleryData from "./GalleryData"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const Gallery = () => {
  return (
    <>
      <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Cards imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery

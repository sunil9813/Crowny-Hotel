import React from "react"
import "../popular/MostPopular.css"
import "./Works.css"
import Card from "./Card"
import Wdata from "./Wdata"

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>How it Works </h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {Wdata.map((value, index) => {
              return <Card key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works

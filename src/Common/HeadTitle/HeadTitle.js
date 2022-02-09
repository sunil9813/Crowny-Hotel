import React from "react"
import "./HeadTitle.css"
import { useLocation } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      <section className='image-heading'>
        <div className='container'>
          <h1>{location.pathname.slice(1, -2, -1)}</h1>
          {/*<h1>{location.pathname.replace(/ /, "")}</h1>*/}
          <button>
            <span>{location.pathname.replace("/", " ")}</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle

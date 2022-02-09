import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../Components/Destinations/Sdata"
import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../Common/HeadTitle/HeadTitle"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      <Link to='/destinations'>
        <span>&#8592;</span> Go Back
      </Link>

      {item ? (
        <div className='blog-wrap'>
          <p>Published {item.title}</p>
          <p> {item.desc}</p>
          <img src={item.image} alt='' />
        </div>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage

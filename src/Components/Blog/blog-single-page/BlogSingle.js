import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogData from "../BlogData"
import EmptyFile from "../../../Common/Empty/EmptyFile"
import HeadTitle from "../../../Common/HeadTitle/HeadTitle"
import { useParams } from "react-router-dom"

const BlogSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/blog' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex_space'>
              <div className='main-content'>
                <img src={item.cover} alt='' />

                <div className='category flex_space'>
                  <span>{item.date}</span>
                  <label>{item.catgeory}</label>
                </div>

                <h1> {item.title} </h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <h2>Two Column Text Sample</h2>

                <div className='para flex_space'>
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='category-list'>
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className='far fa-play-circle'></i>
                          {item.catgeory}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default BlogSingle

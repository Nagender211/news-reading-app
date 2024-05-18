import React from 'react'
import image from "../assets/news.png"
const NavItems = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth:"345px"}}>
  <img style={{height: "200px",width: "325px"}} className="card-img-top " src={src?src:image} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary" target='_blank'>Read more</a>
  </div>
</div>
  )
}

export default NavItems

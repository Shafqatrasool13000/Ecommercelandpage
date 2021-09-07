import React from 'react'

export const Header = () => {
    return (
        <>
        <div id="carouselExampleFade" className="my-3 carousel slide carousel-fade" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/400x200/?ecommerce,shopping" className="d-block w-75 mx-auto" alt="ecommerce"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/400x200/?shopping,ecommerce" className="d-block w-75 mx-auto" alt="shoping"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/400x200/?Sale,ecommerce" className="d-block w-75 mx-auto" alt="sale"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
           
        </>
    )
}

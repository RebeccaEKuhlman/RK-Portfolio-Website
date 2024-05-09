/**
 * Edited bootstrap carousel component
 * Goals: 
 *  -Generalize more, make carousel itself a component
 * - get images from database
 * - I don't like hard coding but here we are
 * 
 */
 import {TopNav} from "./TopNav"
 import {BottomNav} from "./BottomNav"
 import {Gallery} from "./Gallery"

export const Carousel = () => { 
    
    return <div className="m-2 p-10">
        <TopNav />

  <Gallery />


  <div id="carouselMain" class="carousel slide bg-grey" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner bg-secondary">
    <div class="carousel-item active">
      <img class="d-block w-25 h-75 mx-auto" src={require('../bqkLogo.png')} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-25 h-75 mx-auto" src={require('../silly_logo.png')} alt="Second slide"/>
    </div>
    <div class="carousel-item text-center">
      <img class="d-block w-25 h-75 mx-auto" src={require('../soulbound2.png')} alt="Third slide"/>
      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

        <span className="fixed-bottom"><BottomNav /></span>
        </div>
}
/**
 * Edited bootstrap carousel component
 * Goals: 
 *  -Generalize more, make carousel itself a component
 * 
 */
 import {TopNav} from "./TopNav"
 import {BottomNav} from "./BottomNav"

 //Should take in a list of image urls and return carousel of those images
export const slideSingle = (props) => { 
    
    const images = props.urls;
    


    return <div >
  <div id="carouselMain" class="carousel slide bg-grey" data-bs-ride="carousel">
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
        </div>
}
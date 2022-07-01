/**
 * Generalize more
 */
 import {TopNav} from "./TopNav"
 import {BottomNav} from "./BottomNav"

export const Carasel = () => { 
    
    return <div>
        <TopNav />
        
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={require('../bqkLogo.png')} alt="First slide"/>
    </div>
    <div class="carousel-item">
    <img  />
      <img class="d-block w-100" src={require('../bqkLogo.png')} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="src\bqkLogo.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        <span className="fixed-bottom"><BottomNav /></span>
        </div>
}
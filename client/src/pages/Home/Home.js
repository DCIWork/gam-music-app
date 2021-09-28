
import './Home.scss';
import {Link} from "react-router-dom";
import Music from "../../components/Music/Music";

export default function Home() {
    return (
      <header >
        {/* <Anim /> */}
        <Music />
       
        <div className="carousel-wrapper">
           <div id="carouselExampleIndicators" className="carousel slide"   data-bs-ride="carousel">

              <div className="carousel-indicators">

                  <button 
                    type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="0" 
                    className="active" 
                    aria-current="true" 
                    aria-label="Slide 1">
                    </button>

                    <button 
                    type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="1" 
                    aria-label="Slide 2">
                    </button>

                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="2" 
                    aria-label="Slide 3">
                    </button>
                    </div>

                    <div className="carousel-inner">

                    <div 
                    className="carousel-item active">
                    <img 
                    src="https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?cs=srgb&dl=pexels-gaby-tenda-2123606.jpg&fm=jpg" 
                    className="d-block w-100" 
                    alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img 
                    src="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?cs=srgb&dl=pexels-martin-lopez-2240763.jpg&fm=jpg" 
                    className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/12574/SW_Dylan%2BRives.jpg?cs=srgb&dl=pexels-snapwire-12574.jpg&fm=jpg" 
                    className="d-block w-100" 
                    alt="..." />
                    </div>

                    </div>

                    <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide="prev">
                   <span 
                   className="carousel-control-prev-icon" 
                   aria-hidden="true">
                   </span>
                  <span className="visually-hidden">Previous</span>
                  </button>

              <button className="carousel-control-next"   type="button"data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon"aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    
              <div className="b-example-divider"></div>
                <div className="all">
                  <div className="lefter">
                  <div className="text">Popcaan</div>
                 </div>
                  <div className="left">
                    <div className="text">Demarco</div>
                  </div>
                  <div className="center">
                    <div className="text">Vybz Kartel</div>
                  </div>
               <div className="right">
                <div className="text">Shensheea</div>
              </div>
              <div className="righter">
                <div className="text">Spice</div>
              </div>
            </div>
              <Link to="" target="_blank" className="ref">🔗 Dj King Bolo</Link>
                <div className="b-example-divider"></div>
                <div className="blocks">
                  <div className="block">
                    <div className="overlay">
                      <img src="http://drh.img.digitalriver.com/DRHM/Storefront/Site/atvi/cm/images/site/play-button-overlay.png" alt="Play" />
                    </div>
                    <img src="https://pen-online.com/fr/wp-content/uploads/2021/02/17171114/%E5%B1%B1%E4%B8%8B%E9%81%94%E9%83%8E%E3%80%80%E3%80%8CFor-You%E3%80%8D-1024x1011.jpg" alt="" />
                  </div>

                  <div className="block">
                    <div className="overlay">
                      <img src="http://drh.img.digitalriver.com/DRHM/Storefront/Site/atvi/cm/images/site/play-button-overlay.png" alt="Play" />
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Octoberrust.jpg" alt="" />
                  </div>

                  <div className="block">
                    <div className="overlay">
                      <img src="http://drh.img.digitalriver.com/DRHM/Storefront/Site/atvi/cm/images/site/play-button-overlay.png" alt="Play" />
                    </div>
                    <img src="https://lastfm.freetls.fastly.net/i/u/770x0/77c89fd33870424b8ef6ff6022a51c10.jpg" alt="" />
                  </div>

                  <div className="block">
                    <div className="overlay">
                      <img src="http://drh.img.digitalriver.com/DRHM/Storefront/Site/atvi/cm/images/site/play-button-overlay.png" alt="Play" />
                    </div>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71pcBizXY7L._SL1425_.jpg" alt="" />
                  </div>
                </div>
  
    </header >
  )
}




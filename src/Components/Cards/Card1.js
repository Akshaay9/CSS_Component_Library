import React from "react";

function Card1() {
  return (
    <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
      }}
    >
      <div className="card-basic">
        <div className="img">
          <img
            src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5201/products/RESTOREJACKETBLACK.A-Edit_ZH_ZH_f5587b6a-470d-47b1-88b5-10ef6dd83102.jpg?v=1614086813"
            alt=""
          />
          <span className="cardBadge">New Arrival</span>
        </div>
        <div className="description">
          <div className="descriptionLeft">Arrival-Tshirt</div>
          <div className="descriptionRight">
            <h2>20$</h2>
          </div>
        </div>

        <div className="footer">Black</div>
      </div>
      <div className="card-dismiss">
        <div className="img">
          <img
            src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5201/products/COMPOUNDSHORTCAMOGREEN.A-Edit_ZH.jpg?v=1613985620"
            alt=""
          />
          <div className="cardDismiss">
            <i class="far fa-times-circle"></i>
          </div>
        </div>
        <div className="description">
          <div className="descriptionLeft">Arrival-Shorts</div>
          <div className="descriptionRight">
            <h2>20$</h2>
          </div>
        </div>

        <div className="footer">Black</div>
      </div>
      <div className="card-text-overlay">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            Puta madre minima Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Excepturi et amet vero.
          </p>
        </div>
      </div>
      <div className="card-profile">
        <div className="card-profile-top">
          <div className="card-profile-left">
            <div className="avatar round-xs">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
                alt=""
              />
            </div>
            <div className="card-profile-top-left-name">
              <p>Shrimp and Chozio Pella</p>
              <p>septmeber 14 2020</p>
            </div>
          </div>
          <div className="card-profile-top-right">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="card-profile-image">
          <img
            src="https://im.whatshot.in/img/2018/Nov/is-image-1-pre-cropped-1542960293.jpg"
            alt=""
          />
        </div>
        <div className="card-profile-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
          obcaecati qui tempora iste commodi doloremque, laudantium architecto
          impedit id!
        </div>
        <div className="card-profile-footer">
          <div className="card-profile-footer-left">
            <i class="fas fa-heart"></i>
            <i class="fas fa-share-alt"></i>
          </div>
        </div>
      </div>

      <div className="card-profile shadow">
        <div className="card-profile-top">
          <div className="card-profile-left">
            <div className="avatar round-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
                alt=""
              />
            </div>
            <div className="card-profile-top-left-name">
              <p>Shrimp and Chozio Pella</p>
              <p>septmeber 14 2020</p>
            </div>
          </div>
          <div className="card-profile-top-right">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="card-profile-image">
          <img
            src="https://im.whatshot.in/img/2018/Nov/is-image-1-pre-cropped-1542960293.jpg"
            alt=""
          />
        </div>
        <div className="card-profile-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
          obcaecati qui tempora iste commodi doloremque, laudantium architecto
          impedit id!
        </div>
        <div className="card-profile-footer">
          <div className="card-profile-footer-left">
            <i class="fas fa-heart"></i>
            <i class="fas fa-share-alt"></i>
          </div>
        </div>
      </div>

      <div className="card-profile shadow-xl">
        <div className="card-profile-top">
          <div className="card-profile-left">
            <div className="avatar round-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
                alt=""
              />
            </div>
            <div className="card-profile-top-left-name">
              <p>Shrimp and Chozio Pella</p>
              <p>septmeber 14 2020</p>
            </div>
          </div>
        </div>
        <div className="card-profile-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
          obcaecati qui tempora iste commodi doloremque, laudantium architecto
          impedit id! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Modi ut obcaecati qui tempora iste commodi doloremque, laudantium
          architecto impedit id! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Modi ut obcaecati qui tempora iste commodi
          doloremque, laudantium architecto impedit id! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Modi ut obcaecati qui tempora iste
          commodi doloremque, laudantium architecto impedit id!
        </div>
      </div>
      <div className="test" style={{marginTop:"19px"}}></div>
     
      </div>
      <div className="card-horizontal">
        <div className="card-horizontal-left">
          <img
            src="https://cache.desktopnexus.com/thumbseg/498/498008-bigthumbnail.jpg"
            alt=""
          />
        </div>
        <div className="card-horizontal-right">
          <div className="card-horizontal-right-name">
            Jane Doe
          </div>
          <div className="card-horizontal-right-title">
         <h3>Boxing icon has the will for a couple more fights</h3>   
          </div>
          <div className="card-horizontal-right-description">
            Boxing icon has the will for a couple more fights
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis est quibusdam, officia ratione molestias porro corrupti mollitia harum quasi aperiam nesciunt accusantium cumque eum. Quaerat quidem esse tenetur modi distinctio?
          </div>
          
        </div>
      </div>
</>
  );
}

export default Card1;

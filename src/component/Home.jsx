import React, { useState, useEffect } from "react";
import { fetchDocuments } from "../service/ShopSercice";
function Home(props) {
  const [shoe, setShoe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const shoeData = await fetchDocuments("shoes");
      setShoe(shoeData);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-xl-3 size">
          <h1>
            <b>Size:</b>
          </h1>
          <button type="button" class="btn btn-secondary ">
            XS
          </button>
          <button type="button" class="btn btn-secondary  ">
            S
          </button>
          <button type="button" class="btn btn-secondary  ">
            M
          </button>
          <button type="button" class="btn btn-secondary  ">
            ML
          </button>
          <button type="button" class="btn btn-secondary ">
            L
          </button>
          <button type="button" class="btn btn-secondary ">
            XL
          </button>
          <button type="button" class="btn btn-secondary">
            XXL
          </button>
        </div>
        <div className="col-12 col-xl-9">
          <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
           
              {shoe.map((item) => (
                 <div className="col shoe">
                <div class="card">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      <b>{item.name}</b>
                    </p>
                    <h5 class="card-title"><sup>$</sup>{item.price}</h5>
                  </div>
                  <a href="#" class="btn btn-primary">
                    ADD TO CART
                  </a>
                </div>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

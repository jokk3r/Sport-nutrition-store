import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* <h1 className="home__header">Neue im Sortiment</h1> */}
      <img
        className="home__image"
        src="https://media-exp1.licdn.com/dms/image/C561BAQGX85ngOIwRFw/company-background_10000/0?e=2159024400&v=beta&t=xFSzcwgHh5m7-KaSXRqn8Xo5dmBeBg-WhyYGXMrsogQ"
        alt=""
      />
      <div className="home__row">
        <Product
          id="0123"
          title="ALL STARS 100% WHEY PROTEIN - 2270G DOSE"
          rating={5}
          price={55}
          image="https://www.all-stars.de/media/image/36/e2/09/SaltedCaramel_1.jpg"
        />
        <Product
          id="04234"
          title="Platinum 100% Creatine"
          rating={4}
          price={20}
          image="https://www.australiansportsnutrition.com.au/media/catalog/product/cache/b7f5bb984b3ae976e19af3b745d8b0a9/m/u/muscletech_platinum-100-creatine.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="32423"
          title="MuscleTech NitroTech 10lb Bundle"
          rating={5}
          price={135}
          image="https://www.australiansportsnutrition.com.au/media/catalog/product/cache/b7f5bb984b3ae976e19af3b745d8b0a9/w/e/web_-_product_image_10lb_free_gift.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="34234"
          title="Complete Cookies"
          rating={3}
          price={3.99}
          image="https://www.australiansportsnutrition.com.au/media/catalog/product/cache/d9eba05f481c5d6180cd24b361a690dc/l/e/lenny_larrys_thecompletecookie_doublechocolate_single_edited.jpg"
        />
        <Product
          id="234234"
          title="Bang Energy Drink"
          rating={5}
          price={3.5}
          image="https://www.australiansportsnutrition.com.au/media/catalog/product/cache/b7f5bb984b3ae976e19af3b745d8b0a9/v/p/vpxpearguava.jpg"
        />
        <Product
          id="234233"
          title="X50 Broccoli Chips"
          rating={3}
          price={4.5}
          image="https://www.australiansportsnutrition.com.au/media/catalog/product/cache/d9eba05f481c5d6180cd24b361a690dc/x/5/x50-broccoli-chips-wasabi_1_1.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

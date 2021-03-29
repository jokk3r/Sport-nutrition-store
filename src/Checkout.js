import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn11.vitafy.de/vitafy/image/fetch/b_white,f_auto,fl_force_strip.preserve_transparency.progressive/https%3A%2F%2Fbodylab-de.blog.vitafy.de%2Fwp-content%2Fuploads%2Fsites%2F7%2F2019%2F05%2FDesktop-FWF-1920x450-1.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p style={{ padding: "15px" }}>
              You have no items in your Basket. To buy items, click "Add to
              basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

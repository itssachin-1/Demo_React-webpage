import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Distributorship"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <p className="pricetag">{props.cost}</p>
            <p className="phone">
              <i class="fas fa-phone-alt"></i>
              {props.phone}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;

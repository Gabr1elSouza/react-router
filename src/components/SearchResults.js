import React from "react";
import { Link } from "react-router-dom";

export const SearchResults = ({ items }) => {
  return (
    <div>
      <ul className="products">
        {items &&
          items.map((item, id) => (
            <li key={id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

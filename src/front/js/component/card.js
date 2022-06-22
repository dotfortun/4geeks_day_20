import React from "react";

const Card = ({ img, title, text, link, link_text }) => {
  return (
    <div className="card mb-3 text-light bg-dark" style={{ width: "18rem" }}>
      <img
        src={img ? img : "https://placekitten.com/512"}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Filler title:"}</h5>
        <p className="card-text">{text ? text : "This is filler."}</p>
        <a href={link ? link : "#"} className="btn btn-primary">
          {link_text ? link_text : "Go somewhere"}
        </a>
      </div>
    </div>
  );
};

export { Card };

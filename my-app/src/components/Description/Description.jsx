import React from "react";

import './description.css'

const Description = ({ titulo, descripcion, imagen }) => {
  return (
    <>
      <h4 style={{ margin: "10px" }} className="titulo">
        {titulo}
      </h4>
      <div
        className=""
        style={{
          display: "flex",
          flex_direction: "row",
          justify_content: "center",
          align_items: "center",
          padding: "2rem 7rem 2rem 7rem"
        }}
      >
        <p className="parrafo col-10">{descripcion}</p>
        <img
          className="col-2 imagenIlustrativa"
          variant="top"
          src={imagen}
          alt='imagen-png'
        />
      </div>
    </>
  );
};

export default Description;

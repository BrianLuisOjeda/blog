import React from "react";
import Description from "../Description/Description";
import ilustracion from "../../images/Cannabis_Leafs_clip_art_hight.png";
import "./Germinacion.css";

const Germinacion = () => {
  return (
    <div className='containerGerminacion'>
      <Description
        titulo="¿Cómo germinar una semilla de cannabis?"
        descripcion="Una semilla es una planta en latencia esperando las condiciones adecuadas para
                  germinar y prosperar. En este post aprenderás cómo germinar semillas de marihuana con la mayor
                  efectividad posible para conseguir los mejores resultados durante esta fase tan delicada de la
                  planta."
        imagen={ilustracion}
      />
      <h3 className="tituloSecundario">Metodos de germinacion.</h3>
      <Description
      titulo='Germinacion con servilletas'
      descripcion='Es muy recomendable usar guantes de látex durante todo el proceso,
      ya que evitarán posibles contagios de enfermedades, hongos o virus a las semillas.
      También podrás llevar a cabo este método de germinación con el Germinador Pro, que contiene
      todo lo necesario para la germinación de las semillas además de un termómetro en la parte
      superior del germinador.'
      
      
      />
      
    </div>
  );
};

export default Germinacion;

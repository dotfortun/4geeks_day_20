import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import { Card } from "../component/card";

const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="row">
        <div className="col-8 offset-2 d-flex flex-row flex-wrap justify-content-evenly">
          {store.planets.map((planet, idx) => {
            return (
              <Card
                key={idx}
                title={planet.name}
                text={`${planet.name} is a planet with a gravity of ${planet.gravity}, and it has a ${planet.climate} climate.`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Planets };

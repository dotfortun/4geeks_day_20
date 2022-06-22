import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = ({}) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">
        This will show the demo element: {store.demo[params.theid].label}
      </h1>
      <img
        src={"https://placekitten.com/" + Math.floor(Math.random() * 1000)}
      />
      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  //   match: PropTypes.object,
};

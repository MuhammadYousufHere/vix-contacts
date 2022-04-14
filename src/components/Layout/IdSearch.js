import { useParams } from "react-router";
import React from "react";
import { Consumer } from "../Context/Context";

const IdSearch = () => {
  const { id } = useParams();
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return;
      }}
    </Consumer>
  );
};

export default IdSearch;

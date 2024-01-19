import React from "react";
import "./Copyright.scss";
import { FaHeart } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>
        Copyright © Gaurav. Made with
        <FaHeart />
        by Gaurv Khadke
      </p>
    </div>
  );
};

export default Copyright;

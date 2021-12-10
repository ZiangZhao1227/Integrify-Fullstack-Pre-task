import React from "react";
import "../components/card-style.css";
import testImg from "../assets/test-account.png";
const User = ({ name, username, website }) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={testImg} alt="Test Icon" className="img"></img>
      </div>
      <div className="card-body text-dark">
        <h2 className="card-title">{name}</h2>
        <a href="/#" className="card-link">http://{website}</a>
        <p className="card-text text-secondary">@{username}</p>
        <a href="/#" className="btn btn-primary">
          More Details
        </a>
      </div>
    </div>
  );
};

export default User;

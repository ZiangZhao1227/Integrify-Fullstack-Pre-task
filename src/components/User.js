import React from "react";
import "../components/card-style.css";
import { Avatar } from "@mui/material";
const User = ({ name, username, website }) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <Avatar className="avatar" sx={{ height: "100px", width: "100px" }}>
          {name.charAt(0)}
        </Avatar>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{name}</h4>
        <a href="/#" className="card-link">
          http://{website}
        </a>
        <p className="card-text text-secondary">@{username}</p>
        <a href="/#" className="btn btn-primary">
          More Details
        </a>
      </div>
    </div>
  );
};

export default User;

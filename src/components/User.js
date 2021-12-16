import React, { useEffect, useState } from "react";
import "../components/card-style.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { apiUrl } from "../api/jsonplaceholder";

const User = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      if (res.status !== 200) {
        throw new Error("cannot fetch the data");
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="row">
      {loading && <p>Loading...</p>}
      {users &&
        users.map((user) => (
          <div key={user.id} className="col-md-4">
            <div className="card text-center">
              <div className="overflow">
                <Avatar
                  className="avatar"
                  sx={{ height: "100px", width: "100px" }}
                >
                  {user.name.charAt(0)}
                </Avatar>
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">{user.name}</h4>
                <a href="/#" className="card-link">
                  http://{user.website}
                </a>
                <p className="card-text text-secondary">@{user.username}</p>
                <Link to={`/users/${user.id}`} className="btn btn-primary">
                  More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default User;

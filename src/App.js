import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import "./components/card-style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h3 className="assignment-title">
        React <span>Pre Assignment</span>
      </h3>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4">
            <User
              name={user.name}
              username={user.username}
              website={user.website}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

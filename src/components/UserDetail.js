import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../api/jsonplaceholder";
import { List, ListItem, ListItemText } from "@mui/material";

const UserDetail = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({ address: {}, company: {} });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {   
          const res = await fetch(apiUrl + `/${id}`);
          if (res.status !== 200) {
            throw new Error("cannot fetch the data");
          }
          const data = await res.json();
          setUserDetails(data);
          setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, [id]);

 

  return (
    <List
      sx={{ width: "100%", maxWidth: 370, bgcolor: "background.paper" }}
      className="user-detail-card"
    >
      {loading && <p>Loading...</p>}
      <ListItem>
        <ListItemText primary={`- name: ${userDetails.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`- username: ${userDetails.username}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`- email: ${userDetails.email}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`- phone: ${userDetails.phone}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`- website: ${userDetails.website}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`- company: ${userDetails.company.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={"street: "}
          secondary={userDetails.address.street}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={"suite: "}
          secondary={userDetails.address.suite}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={"city: "} secondary={userDetails.address.city} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={"zipcode: "}
          secondary={userDetails.address.zipcode}
        />
      </ListItem>
    </List>
  );
};

export default UserDetail;

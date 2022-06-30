//For context Api use usecontext 
//get Api data
import React, { useContext } from "react";
import { ApptoProfile } from "../App";

const Profile = () => {
  const record = useContext(ApptoProfile);
  return (
    <div>
        <p>List-Profile-Page</p>
      {record?.splice(0, 10).map((x) => {
        return (
          <ul key={x.id}>
            <li>{x.title}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default Profile;



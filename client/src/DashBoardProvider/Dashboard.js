import React, { useContext } from "react";
import { userContext } from "../App";
import style from "../Css/dashboard.css";
const Dashboard = () => {
  const {
    state: { provider, message },
  } = useContext(userContext);
  console.log(message);
  console.log(provider);
  return (
    <div className="MainWrapper">
      <div className="Complete">
        <div className="Container">
          <div className="Brand">
            <h3>CONTACT INFO</h3>
          </div>
          <div className="Current-details">
            {provider.fname} {provider.lname}
            <div>{provider.mobile}</div>
            <div>{provider.email}</div>
            <div>{provider.pincode}</div>
            <div>{provider.state}</div>
            <div>{provider.city}</div>
          </div>
        </div>
        <div>
          {message.map((item) => {
            return (
              <div>
                <h1 className="contact">
                  {" "}
                   {item.user.fname + " " + item.user.lname}
                </h1>
                <div className="message">{item.latest}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
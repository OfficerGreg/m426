import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h2>{currentUser.username}'s profile:</h2>
      <header className="jumbotron">
      <table className="projekte_table">
            <tr>
              <td><strong>Token</strong></td>
              <td>{currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}</td>
            </tr>
            <tr>
              <td><strong>Username</strong></td>
              <td>{currentUser.username}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>{currentUser.email}</td>
            </tr>
            <tr>
              <td><strong>Password</strong></td>
              <td>*********</td>
            </tr>
            <tr>
              <td><strong>Authorities</strong></td>
              <td>{currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}</td>
            </tr>

          </table>
      </header>
      
    </div>
  );
};

export default Profile;

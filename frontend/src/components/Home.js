import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">M426 Agiles Team 4.</h1>
          <p class="lead">Coole App sehr cool benutze sie bitte :D</p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

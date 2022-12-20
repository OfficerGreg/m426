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
          <table className="projekte_table">
            <tr>
              <th>Project name</th>
              <th>User</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>test1</td>
              <td>tester</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr>
            <tr>
              <td>test2</td>
              <td>bob</td>
              <td>nicht cool :(</td>
            </tr>
            <tr>
              <td>test2</td>
              <td>bob</td>
              <td>nicht cool :(</td>
            </tr>
            <tr>
              <td>test2</td>
              <td>bob</td>
              <td>nicht cool :(</td>
            </tr>
            <tr>
              <td>test2</td>
              <td>bob</td>
              <td>nicht cool :(</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

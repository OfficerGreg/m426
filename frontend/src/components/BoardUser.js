import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import "../App.css"

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <table className="projekte_table">
            <tr>
              <th>Project name</th>
              <th>ID</th>
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
      </header>
    </div>
  );
};

export default BoardUser;

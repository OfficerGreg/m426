import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import "../App.css"

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
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
              <th>User</th>
              <th>Project name</th>
              <th>ID</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>tester</td>
              <td>test</td>
              <td>1</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr>
            <tr>
              <td>tester</td>
              <td>test</td>
              <td>2</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr><tr>
              <td>tester</td>
              <td>test</td>
              <td>3</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr><tr>
              <td>tester</td>
              <td>test</td>
              <td>4</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr><tr>
              <td>tester</td>
              <td>test</td>
              <td>5</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr><tr>
              <td>tester</td>
              <td>test</td>
              <td>6</td>
              <td>Sehr cooles Projekt das nichts macht, ausserdem ist es cool aber trotzdem macht es zurzeit nocht nichts.</td>
            </tr>
          </table>
      </header>
    </div>
  );
};

export default BoardAdmin;

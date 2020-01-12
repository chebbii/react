import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import ChatContainer from "./ChatContainer";
import Settings from "./Settings";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/chat">
            <FormattedMessage id="menu.chat" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FormattedMessage id="menu.settings" />
          </Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Settings} />
      <Route path="/chat" component={ChatContainer} />
    </div>
  </Router>
);

export default Routes;

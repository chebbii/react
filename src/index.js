import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import frLocaleData from "react-intl/locale-data/fr";

import Routes from "./containers/Routes";
import reducers from "./reducers/index";
import websocketServer from "./services/websocket";

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);

// i18n
const LOCALE = "en";

const traductions = {
  en: {
    "chat.title": "🇬🇧 Jolichat",
    "menu.chat": "Chat",
    "menu.settings": "Settings",
    "message.placeholder": "Your message...",
    "action.send": "Send"
  },
  fr: {
    "chat.title": "🇫🇷 JoliTchat",
    "menu.chat": "Chat",
    "menu.settings": "Paramêtres",
    "message.placeholder": "Votre message...",
    "action.send": "Envoyer"
  }
};

const getTradMessages = locale => traductions[locale];

// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk), autoRehydrate())
);

persistStore(store, { whitelist: ["settings"] });

ReactDOM.render(
  <IntlProvider locale={LOCALE} messages={getTradMessages(LOCALE)}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
